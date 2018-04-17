// JavaScript为字符串提供了一些常用方法

// toUpperCase()
let str = 'sdf';
console.log(str.toUpperCase());

// toLowerCase()

//let str = 'ASD';   // Identifier 'str' has already been declared
let str2 = 'ADS';
console.log(str2.toLowerCase());

// indexOf  搜索字符串出现的位置

let str3 = 'sdsfrergw';
console.log(str3.indexOf('r'));  // 下标
console.log(str3.indexOf('err')); // 如果没有找到就返回 -1

// substring  substring()返回指定索引区间的子串：

let str4 = 'wrong or right';

console.log(str4.substring(1, 3)); // 从索引1开始到3（不包括3）不包含结束的字符串，返回'ro'

console.log(str4.substring(3)); // 从索引3开始到结束，包含传值的下标对应的字符，返回'ng or right'

