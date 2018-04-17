'use strict';
let m = new Map();
let s = new Set();
console.log('你的浏览器支持Map和Set！');

let names = ['Michael', 'Bob', 'Tracy'];
let scores = [95, 75, 85];

let m2 = new Map([['Michael', 95], ['Bob', 75], ['Tracy', 85]]);

console.log(m2.get('Bob'));