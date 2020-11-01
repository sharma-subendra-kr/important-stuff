// var n = 1000000000;
// var size = 10000;
// var log2n = Math.ceil(Math.log2(size));

// var p0 = performance.now();
// var _o = {
//     next: null,
//     prev: null
// }
// var count = n/size * log2n;
// var ccount = count;
// while(count) {
//     var o = {
//         next: null,
//         prev: null
//     };
//     o.next = _o;
//     o.prev = _o;

//     count--;
// }
// var p1 = performance.now();
// console.log(p1-p0);
// console.log(n/size);
// console.log(log2n);
// console.log(ccount);

// var p2 = performance.now();
// var __o = {
//     next: null,
//     prev: null
// }
// var cnt = 0;
// while(n) {
// //     var arr = new Array(size);
//     var arr = new Array(log2n);
//     var s = 0;
//     while(s!== log2n) {
//         arr[s] = __o;
//         s++;
//         cnt++;
//     }
//     n -= size;
// }
// var p3 = performance.now();
// console.log(p3-p2);
// console.log(cnt);




// var n = 100000000;
// var size = 10000;
// var log2n = Math.ceil(Math.log2(size));

// var p0 = performance.now();
// var _o = {
//     next: null,
//     prev: null
// }
// // var count = n/size * log2n;
// var count = n/size * size;
// var ccount = count;
// while(count) {
//     var o = {
//         next: null,
//         prev: null
//     };
//     o.next = _o;
//     o.prev = _o;

//     count--;
// }
// var p1 = performance.now();
// console.log(p1-p0);
// console.log(n/size);
// console.log(log2n);
// console.log(ccount);

// var p2 = performance.now();
// var __o = {
//     next: null,
//     prev: null
// };
// var cnt = 0;
// var oarr = [{...__o}, {...__o}, {...__o}, {...__o}, {...__o}, {...__o}, {...__o}, {...__o}, {...__o}, {...__o}];
// while(n) {
//     var arr = new Array(log2n);
//     var len = log2n;
//     var s = 0;
//     while(s!== size) {
//         if (s >= len) {
//             var _arr = new Array(len + log2n);
//             for (var i = 0; i < len; i++) {
//                 _arr[i] = arr[i];
//             }
//             arr = _arr;
//             len = len + log2n;
//         }
//         cnt++;
//         var index = Math.floor(Math.random() * 10);
//         arr[s] = oarr[index];
//         s++;
//     }   
//     n -= size;
// }
// var p3 = performance.now();
// console.log(p3-p2);
// console.log(cnt);


var n = 1000000000;
var size = 100000000;
var log2n = Math.ceil(Math.log2(size));

var p0 = performance.now();
var _o = {
    next: null,
    prev: null
}
// var count = n/size * log2n;
var count = n/size * size;
var ccount = count;
while(count) {
    var o = {
        next: null,
        prev: null
    };
    o.next = _o;
    o.prev = _o;

    count--;
}
var p1 = performance.now();
console.log(p1-p0);
console.log(n/size);
console.log(log2n);
console.log(ccount);

var p2 = performance.now();
var __o = {
    next: null,
    prev: null
};
var cnt = 0;
var oarr = [{...__o}, {...__o}, {...__o}, {...__o}, {...__o}, {...__o}, {...__o}, {...__o}, {...__o}, {...__o}];
while(n) {
//     var len = log2n;
    var len = size;
    var arr = new Array(len);
    var s = 0;
    while(s!== size) {
        if (s >= len) {
            var _arr = new Array(len * 2);
            for (var i = 0; i < len; i++) {
                _arr[i] = arr[i];
            }
            arr = _arr;
            len = len * 2;
        }          
        cnt++;
//         var index = Math.floor(Math.random() * 10);
        var index = 2;
        arr[s] = oarr[index];
        s++;
    }
    n -= size;
}
var p3 = performance.now();
console.log(p3-p2);
console.log(cnt);
