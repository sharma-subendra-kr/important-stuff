// var degrees2meters = function(lon,lat) {
var degrees2meters = function(arr) {
		var lon = arr[0];
		var lat = arr[1];
        var x = lon * 20037508.34 / 180;
        var y = Math.log(Math.tan((90 + lat) * Math.PI / 360)) / (Math.PI / 180);
        y = y * 20037508.34 / 180;
        return [x, y]
}

// var meters2degress = function(x,y) {
var meters2degress = function(arr) {	
		var x = arr[0];
		var y = arr[1];
        var lon = x *  180 / 20037508.34 ;
        // var lat =Number(180 / Math.PI * (2 * Math.atan(Math.exp(y * Math.PI / 180)) - Math.PI / 2));
        var lat = Math.atan(Math.exp(y * Math.PI / 20037508.34)) * 360 / Math.PI - 90;

        return [lon, lat]
}

//51.503774, -1.816696
//36.908522, -120.920053
//-49.454482, -69.834352
//-35.157819, 146.857634
//-2.265007, 38.049039

var lat = -2.265007;
var long =  38.049039;

console.log([long, lat]);
var arr = degrees2meters(long, lat);
console.log(arr);
var arr2 = meters2degress(arr[0], arr[1]);
console.log(arr2);


// p1 13.090190, 77.487037
// p2 13.089988, 77.487917

// p3 13.090524, 77.486586

var reverse = function(y, x){
	return [x, y];
}

var p1 = degrees2meters(reverse(12.898357, 77.646833));
var p2 = degrees2meters(reverse(12.898281, 77.645873));

var p3 = degrees2meters(reverse(12.898056, 77.645366));

// var p1 = reverse(13.090278, 77.487980);
// var p2 = reverse(13.090401, 77.487374);

// var p3 = reverse(13.090712, 77.487095);

console.log(p1);
console.log(p2);
console.log(p3);
console.log(p2[1] - p1[1]);
console.log(p2[0] - p1[0]);
var m1 = (p2[1] - p1[1])/(p2[0] - p1[0]);
console.log(m1);
console.log(Math.round(m1));

var m2 = -(1/m1);
console.log(Math.round(m2));
console.log(m2);

// var y1 = m1 * (x1 - p1[0]) + p1[1]
// var x1 = (y1 - p1[1])/m1 + p1[0];


// var y2 = m2 * (x2 - p3[0]) + p3[1]
// var x2 = (y2 - p3[1])/m2 + p3[0]

//var x = (-m1 * p1[0] + p1[1] - m2 * p3[0] + p3[1])/(m1 -m2);
var x = (p3[1] - p1[1] - (m2 * p3[0]) + (m1 * p1[0]))/(m1 -m2);
var y = (((p3[0] - p1[0]) * (m1 * m2)) + (m2 * p1[1]) - (m1 * p3[1]))/(m2 - m1);

console.log([x, y]);
var p4 = meters2degress([x, y]);
console.log(p4)