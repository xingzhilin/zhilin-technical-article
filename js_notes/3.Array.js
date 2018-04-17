// Array

let arr = new Array(1,2,3,'30');

console.log(arr.length);  // 4

arr[6] = 'add';

console.log(arr);

arr.length = 2;

console.log(arr);

// indexOf()来搜索一个指定的元素的位置
arr.length = 6;
console.log(arr);
arr = [34,5,6,7,8,,9,0,7];
console.log(arr);

console.log(arr.indexOf(3));  // -1
console.log(arr.indexOf(1));  // 0  下标为0的

// slice()就是对应String的substring()版本，它截取Array的部分元素，然后返回一个新的Array： do
// 都包含开始的元素  不包含结束的元素

console.log(arr.slice(2, 4)); // [ 6, 7 ] 


console.log(arr.slice(2)); //[ 6, 7, 8, <1 empty item>, 9, 0, 7 ]

//push和pop

// push()向Array的末尾添加若干元素，pop()则把Array的最后一个元素删除掉：


// unshift和shift

// 如果要往Array的头部添加若干元素，使用unshift()方法，shift()方法则把Array的第一个元素删掉：



//sort

//sort()可以对当前Array进行排序，它会直接修改当前Array的元素位置，直接调用时，按照默认顺序排序：

let arr2 = [245,3,4,5,6,34,53,1,0,34];

console.log(arr2.sort(sortNum));
function sortNum(a,b){
	return a-b;
}

//reverse

// reverse()把整个Array的元素给掉个个，也就是反转：


//splice

//splice()方法是修改Array的“万能方法”，它可以从指定的索引开始删除若干元素，然后再从该位置添加若干元素：

//concat

//concat()方法把当前的Array和另一个Array连接起来，并返回一个新的Array：

//join

// join()方法是一个非常实用的方法，它把当前Array的每个元素都用指定的字符串连接起来，然后返回连接后的字符串

let arr3 = [3,4,5,5,6,7,8,9,0,1,2,3,4,5,5,5,6,12,24];

let newArr = arr3.sort(sortNum);

console.log(newArr);


Array.prototype.unique3 = function(){
 var res = [];
 var json = {};
 for(var i = 0; i < this.length; i++){
  if(!json[this[i]]){
   res.push(this[i]);
   json[this[i]] = 1;
  }
 }
 return res;
}
/*
	1.创建一个新的数组存放结果
	2.创建一个空对象
	3.for循环时，每次取出一个元素与对象进行对比，如果这个元素不重复，则把它存放到结果数组中，同时把这个元素的内容作为对象的一个属性，并赋值为1，存入到第2步建立的对象中。
	说明：至于如何对比，就是每次从原数组中取出一个元素，然后到对象中去访问这个属性，如果能访问到值，则说明重复。
*/
function uniqueArr(arr){
	let res = [],
		json = {};
	for(let i=0; i<arr.length; i++){
		if(!json[arr[i]]){
			res.push(arr[i]);
			json[arr[i]] = 1;
		}
	}

	return res;
}

let arr4 = [34,56,23,34,23,12,12,12,12,3,4,2,2,3,12,45];
console.log(uniqueArr(arr4));

/*var arr = [112,112,34,'你好',112,112,34,'你好','str','str1'];
alert(arr.unique3());*/


