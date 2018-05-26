# 问题
	- 什么是构造函数？
	- 构造函数与普通函数区别是什么？
	- 用new关键字的时候到底做了什么？
	- 构造函数有返回值怎么办？
	- 构造函数能当普通函数调用吗？
# 理解

	在命名规则上，构造函数一般是首字母大写，普通函数遵照小驼峰式命名法。
	在函数调用的时候：
		 function fn() { }
	     构造函数：1. new fn( )
                 2 .构造函数内部会创建一个新的对象，即f的实例
                 3. 函数内部的this指向 新创建的f的实例
                 4. 默认的返回值是f的实例
	     普通函数：1. fn( )
                 2. 在调用函数的内部不会创建新的对象
                 3. 函数内部的this指向调用函数的对象（如果没有对象调用，默认是window）
                 4. 返回值由return语句决定
	 
	 构造函数的返回值：
	     有一个默认的返回值，新创建的对象（实例）；
	     当手动添加返回值后（return语句）：
	          1. 返回值是基本数据类型-->真正的返回值还是那个新创建的对象（实例）
	          2. 返回值是复杂数据类型（对象）-->真正的返回值是这个对象

	1）构造函数内部会创建一个实例，调用普通函数时则不会创建新的对象。
	2）构造函数内部的this指向是新创建的创建的实例，而普通函数内部的this指向调用函数的对象（如果没有对象调用，默认为window）
	3）返回值
		对于构造函数而言，如果返回值是基本数据类型，那么返回值就是this指向的实例；
		如果是复杂数据类型，那么返回值为对象

	 构造函数与普通函数的区别就是：
		1、用new关键字调用
			var prince = new Prince(“charming”,25);
		2、函数内部可以使用this关键字（普通函数原则上不可以！因为普通函数的this相当于window）
			在构造函数内部，this指向的是构造出的新对象。用this定义的变量货函数／方法，就是实例变量／实例函数／方法。需要用实例才能访问到，不能用类型名访问。
			prince.age;//25
			Prince.age;//undefined
		3、默认不用return返回值
			构造函数是不需要用return显示返回值，默认会返回this，也就是新的实例对象。当然，也可以用return语句，返回值会根据return值的类型而有所不同。
		4、函数命名建议首个字母大写，与普通函数区分开。
			不是命名规范，但是建议这么写。

# this
		this永远指向当前正在被执行的函数或方法的owner。例如：

		function test(){
		    console.log(this);
		}
		test();//Window {top: Window, window: Window, location: Location, external: Object, chrome: Object…}
		上面这段代码中，我们在页面中定义了一个test()函数，然后在页面中调用。函数定义在全局时，其this就是当前页面，也就是window对象。

		this指向的几种情况
		1.全局中调用

		    this.name //this指向window对象
		2.函数调用

		    test();//test()函数中的this也指向window对象
		3.对象的方法调用

		    obj1.fn();//obj1对象的fn()方法中的this指向obj1
		4.调用构造函数

		    var dog=new Dog();//构造函数内的this指向新创建的实例对象，也就是这里的dog
			call和apply
			call和apply的作用一样，只是接受参数的方式不一样，call接受的是多个单个参数，apply接受的是参数数组。
			call和apply的作用简单地可以说成，当一个对象实例缺少一个函数/方法时，可以调用其他对象的现成函数/方法，其方式是通过替换其中的this为这个对象实例，改变函数运行时的上下文。
			例如：

			function Dog(){
			    this.sound="汪汪汪";
			}
			Dog.prototype.bark=function(){
			    alert(this.sound);
			}
			现在我有另外一个cat对象：

			var cat={sound:'喵喵喵'}
			我也想让这个cat对象可以调用bark方法，这时候就不用重新为它定义bark方法了，可以用call/apply调用Dog类的bark方法：

			Dog.prototype.bark.call(cat);
			或者：

			dog.bark.call(cat);
			加点东西，变成一个带参数的栗子：

			function Dog(){
			    this.sound="汪汪汪";
			}
			Dog.prototype.bark=function(words){
			    alert(this.sound+"  "+words);
			}
			var dog=new Dog();
			dog.bark("有小偷");//alert:汪汪汪   有小偷
			Dog.prototype.bark.call(cat,"饿了");//alert：喵喵喵   饿了
			普通函数
			这是一个简单的普通函数：

		function fn(){
		    alert("hello sheila");
		}
		fn();//alert:hello sheila
# 普通函数与构造函数相比有四个明显特点：

		1.不需要用new关键字调用

		    fn();
		2.可以用return语句返回值

		    function fn(a,b){
		        return a+b;
		    }
		    alert(fn(2,3));//alert:5
		3.函数内部不建议使用this关键字
			我们说不建议使用，当然硬要用是可以的，只是要注意这时候发生了什么。如果在普通函数内部使用this关键字定义变量或函数，因为这时候this指向的是window全局对象，这样无意间就会为window添加了一些全局变量或函数。

		    function greeting(){
		        this.name="sheila";
		        alert("hello "+this.name);
		    }
		    greeting();//alert:hello sheila
		    alert(window.name);//alert:sheila
		4.函数命名以驼峰方式，首字母小写

		构造函数
		在JavaScript中，用new关键字来调用定义的构造函数。默认返回的是一个新对象，这个新对象具有构造函数定义的变量和函数/方法。

		举个栗子：

		function Prince(name,age){
		    this.gender="male";
		    this.kind=true;
		    this.rich=true;
		    this.name=name;
		    this.age=age;
		}
		Prince.prototype.toFrog=function(){
		    console.log("Prince "+this.name+" turned into a frog.");
		}
		var prince=new Prince("charming",25);
		prince.toFrog();//Prince charming turned into a frog.
		prince.kind;//true
# 与普通函数相比，构造函数有以下明显特点：

		1.用new关键字调用

		    var prince=new Prince("charming",25);
		2.函数内部可以使用this关键字
		在构造函数内部，this指向的是构造出的新对象。用this定义的变量或函数/方法，就是实例变量或实例函数/方法。需要用实例才能访问到，不能用类型名访问。

		    prince.age;//25
		    Prince.age;//undefined
		3.默认不用return返回值
		构造函数是不需要用return显式返回值的，默认会返回this，也就是新的实例对象。当然，也可以用return语句，返回值会根据return值的类型而有所不同，细节将在下文介绍。

		4.函数命名建议首字母大写，与普通函数区分开。
		不是命名规范中的，但是建议这么写。

		使用new关键字实例化的时候发生了什么？
		以上文中的Prince()函数举个栗子：

		1.第一步，创建一个空对象。

		var prince={}
		2.第二步，将构造函数Prince()中的this指向新创建的对象prince。
		3.第三步，将prince的_proto_属性指向Prince函数的prototype，创建对象和原型间关系
		4.第四步，执行构造函数Prince()内的代码。

		构造函数有return值怎么办？
		构造函数里没有显式调用return时，默认是返回this对象，也就是新创建的实例对象。
		当构造函数里调用return时，分两种情况：

		1.return的是五种简单数据类型：String，Number，Boolean，Null，Undefined。
		这种情况下，忽视return值，依然返回this对象。

		2.return的是Object
		这种情况下，不再返回this对象，而是返回return语句的返回值。

		    function Person(name){
		        this.name=name;
		        return {name:"cherry"}
		    }
		    var person=new Person("sheila");
		    person.name;//cherry
		    person;//Object {name: "cherry"}