

## HTML

### 1. 说一下对HTML语义化的理解?

语义化就是选择与语义相符合的标签，使代码语义化，这样不仅便于开发者进行阅读，同时也能维护和写出更优雅的代码，还能够让搜索引擎和浏览器等工具更好地解析。

通俗的讲语义化就是让正确的标签做正确的事情，比如段落用p标签，头部用header标签，主要内容用main标签，侧边栏用aside标签等等。

### 2. meta viewport 是做什么用的

将视口大小设置为可视区域的大小。

**什么是视口**

视口简单理解就是可视区域大小。

在PC端，视口大小就是浏览器窗口可视区域的大小

在移动端, 视口大小并不等于窗口大小, 移动端视口宽度被人为定义为了980

**为什么移动端视口宽度是980而不是其他的值**

因为过去网页的版心都是980的，为了能够让网页在移动端完美的展示, 所以将手机视口的大小定义为了980。

**移动端自动将视口宽度设置为980带来的问题**

虽然移动端自动将视口宽度设置为980之后让我们可以很完美的看到整个网页，但是由于移动端的物理尺寸(设备宽度)是远远小于视口宽度的，所以为了能够在较小的范围内看到视口中所有的内容, 那么就必须将内容缩小。

但是缩小后用户看到的是一个缩小版的整个页面，字体、图标和内容等等都非常小，想要点击或者查看都需要去放大页面进行操作，放大页面之后就会出现横向滚动条，这对用户体验来说是非常不好的。

**如何保证在移动端不自动缩放网页的尺寸**

通过meta设置视口大小

`meta name="viewport" content="width=device-width, initial-scale=1.0`

viewport 是指 web 页面上用户的可视区域。

meta标签的属性:
   
    - width=device-width 设置视口宽度等于设备的宽度

    -initial-scale=1.0 初始缩放比例, 1不缩放

    - maximum-scale：允许用户缩放到的最大比例

    - minimum-scale：允许用户缩放到的最小比例

    - user-scalable：用户是否可以手动缩放
   
## CSS

### 1. 清除浮动

    ```css
    .clearfix:after { 
        /*生成内容作为最后一个元素*/ 
        content: ""; 
        /*使生成的元素以块级元素显示,占满剩余空间*/ 
        display: block; 
        /*避免生成内容破坏原有布局的高度*/ 
        height: 0; 
        /*使生成的内容不可见，并允许可能被生成内容盖住的内容可以进行点击和交互*/ 
        visibility: hidden; 
        /*清除浮动元素对当前元素的影响*/ 
        clear: both; 
    } 
    .clearfix { 
        /*用于兼容IE, 触发IE hasLayout*/ 
        *zoom:1; 
    } ```

### 2. Less/Sass/Scss的区别

*   **Scss其实是Sass的改进版本**
    Scss是Sass的缩排语法，对于写惯css前端的web开发者来说很不直观，也不能将css代码加入到Sass里面，因此Sass语法进行了改良，Sass 3就变成了Scss(sassy css)。与原来的语法兼容，只是用{}取代了原来的缩进。
*   **Less环境较Sass简单**
    Sass的安装需要安装Ruby环境，Less基于JavaScript，需要引入Less.js来处理代码输出css
*   **变量符不一样，Less是@，而Sass是$，而且变量的作用域也不一样。**
    Sass没有局部变量，满足就近原则。Less中{}内定义的变量为局部变量。
*   **Less没有输出设置，Sass提供4中输出选项**
    输出样式的风格可以有四种选择，默认为nested
    nested：嵌套缩进的css代码
    expanded：展开的多行css代码
    compact：简洁格式的css代码
    compressed：压缩后的css代码
*   **Sass支持条件语句，可以使用if{}else{},for{}循环等等。而Less不支持。**
*   **Less与Sass处理机制不一样**
    Less是通过客户端处理的，Sass是通过服务端处理，相比较之下Less解析会比Sass慢一点
*   **Sass和Less的工具库不同**
    Sass有工具库Compass, 简单说，Sass和Compass的关系有点像Javascript和jQuery的关系,Compass是Sass的工具库。在     它的基础上，封装了一系列有用的模块和模板，补充强化了Sass的功能。
    Less有UI组件库Bootstrap, Bootstrap是web前端开发中一个比较有名的前端UI组件库，Bootstrap的样式文件部分源码就是采用Less语法编写，不过Bootstrap4也开始用Sass编写了。

    ### 3. BFC及其应用

    BFC （块级格式化上下文），是一个独立的渲染区域，让处于 `BFC` 内部的元素与外部的元素相互隔离，使内外元素的定位不会相互影响，它属于定位方案的普通流。

    **触发条件：**

*   根元素
*   浮动元素：float 除 none 以外的值（`left`、`right`）
*   绝对定位元素：position (absolute、fixed)
*   display 为 inline-block、table-cells、flex
*   overflow 除了 visible 以外的值 (hidden、auto、scroll)

    **约束规则：**

*   属于同一个 `BFC` 的两个相邻 `Box` 垂直排列
*   属于同一个 `BFC` 的两个相邻 `Box` 的 `margin` 会发生重叠
*   `BFC` 的区域不会与 `float` 的元素区域重叠
*   计算 `BFC` 的高度时，浮动子元素也参与计算
*   文字层不会被浮动层覆盖，会环绕于周围

    **作用：**

*   阻止元素被浮动元素覆盖
    一个正常文档流的块级元素可能被一个浮动元素覆盖，挤占正常文档流，因此可以设置一个元素的float、display、position或者overflow值等方式触发BFC，以阻止被浮动盒子覆盖。
*   可以包含浮动元素（清除浮动）
    通过改变包含浮动子元素的父盒子的属性值，触发BFC，以此来包含子元素的浮动盒子。
*   阻止相邻元素的margin合并
    属于同一个BFC的两个相邻块级子元素的上下margin会发生重叠，所以当两个相邻块级子元素分属于不同的BFC时可以阻止margin重叠。

    ### 4. 水平垂直居中

*   子绝父相 + transform

    ```
    .parent {
        position: relative;
    }

    .son {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
    }
    ```

*   伸缩布局
    `.parent {
        display:flex;
        justify-content:center;
        align-items: center;
    }
    `

    ## JavaScript

    ### 1. 什么是闭包?

    闭包的实质是因为函数嵌套而形成的作用域链

    比如说：函数 A 内部有一个函数 B，函数 B 可以访问到函数 A 中的变量，那么函数 B 就是闭包

    用途：使用闭包主要是为了设计私有的方法和变量

    优点：可以避免变量被全局变量污染

    缺点：函数中的变量都被保存在内存中，内存消耗很大，所以不能滥用闭包

    解决方法：在退出函数之前，将不使用的局部变量全部删除

    ### 2. 手写选择排序和冒泡排序

*   选择排序
    ```js let arr = [3, 4, 1, 2];
    let len = arr.length;
    //  这里之所以是len-1，是因为到最后两个元素，交换位置，整个数组就已经排好序了。
    for(let i = 0; i  len - 1; i++){
        let min = arr[i];
        // j = i+1是把与自己比较的情况给省略掉
        for(let j = i+1; j  len; j++){
            if(arr[j]  min){
                // 利用ES6数组的解构赋值交换数据
                [arr[j], min] = [min, arr[j]];
            }
        }
        arr[i] = min;
    }
    console.log(arr);
    ```

*   冒泡排序
    ```let arr = [3, 4, 1, 2];
    let max = arr.length - 1;
    for(let i = 0; i  max; i++){
        // 声明一个变量，作为标志位
        // 如果某次循环完后，没有任何两数进行交换，就将标志位设置为 true，表示排序完成
        let flag = true;
        for(let j = 0; j  max - i; j++){
            if(arr[j] &gt; arr[j + 1]){
                // 利用ES6数组的解构赋值交换数据
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                flag = false;
            }
        }
        if(flag){
            break;
        }
    }
    console.log(arr);
    ```

    ### 3. 数组去重和反转数组

    **数组去重**

方法 1

扩展运算符和 Set 结构相结合，就可以去除数组的重复成员


```js
    // 去除数组的重复成员
    [...new Set([1, 2, 2, 3, 4, 5, 5])];
    // [1, 2, 3, 4, 5]
```


方法 2

Array.from()能把set结构转换为数组

```js
    Array.from(new Set([1, 2, 2, 3, 4, 5, 5]));
// [1, 2, 3, 4, 5]
```

方法 3（ES5）

```js
    function unique(arr) {
      let temp = [];
      arr.forEach(e =&gt; {
        if (temp.indexOf(e) == -1) {
          temp.push(e);
        }
      });

      return temp;
    }
```

**反转数组**

    要求

    输入: I am a student  输出: student a am I

    输入是数组 输出也是数组 不允许用 split splice reverse

    解法一

```js 
    function reverseArray(arr) {
        let str = arr.join(' ')
        let result = []
        let word = ''
        for (let i = 0; i  str.length; i++) {
            if (str[i] != ' ') {
                word += str[i]
            } else {
                result.unshift(word)
                word = ''
            }
        }

        result.unshift(word)
        return result
    }

    console.log(reverseArray(['I', 'am', 'a', 'student']))
    // ["student", "a", "am", "I"]
```

    解法二

```js
    function reverseArray(arr) {
        let result = []
        let distance = arr.length - 1
        for (let i = 0; i = distance; i++) {
            result[i] = arr[distance - i]
        }

        return result
    }
```

    ### 4. 函数节流和函数防抖

    **函数节流**

    函数节流是优化**高频率**执行js代码的一种手段

    可以**减少**高频调用函数的执行次数

    作用：减少代码执行次数, 提升网页性能

    应用场景：oninput / onmousemove / onscroll / onresize 等事件

```js
    let timerId = null;
    let flag = true;
    window.onresize = function () {
        if (!flag)  return;
        flag = false;
        timerId &amp;&amp; clearInterval(timerId);
        timerId = setTimeout(function () {
            flag = true;
            console.log("尺寸变化");
        }, 500);
    }
```

    封装一个节流函数

```js
function throttle(fn, delay){
        let timer = null
        return function (){
            // 如果已经有定时器了，那么就退出
            if(timer) return
            // 获取debounce执行作用域的this
            let _this = this
            // 获取参数
            let args = arguments

            timer = setTimeout(function(){
                // 改变执行函数内部的this指向debounce执行作用域的this，并把参数传给执行函数
                fn.apply(_this, args)
                // 在delay后执行完fn之后清空timer，此时timer为假，throttle触发可以进入计时器 
                timer = null
            }, delay)
        }
    }
```

    **函数防抖**

    函数防抖是也优化**高频率**执行js代码的一种手段

    可以让被调用的函数在一次连续的高频操作中只被调用**一次**

    作用：减少代码执行次数, 提升网页性能

    应用场景：oninput / onmousemove / onscroll / onresize 等事件

    `let timerId = null;
    window.onresize = function () {
        timerId &amp;&amp; clearInterval(timerId);
        timerId = setTimeout(function () {
            console.log("尺寸变化");
        }, 500);
    }
    `

    封装一个防抖函数

    > 方便防抖函数的调用和回调函数fn的传参问题，这里使用闭包来设计防抖函数
    `function debounce(fn, delay){
        let timer = null
        return function(){
            // 设置了定时器就清空这个定时器，没有就去设置定时器
            timer &amp;&amp; clearTimeout(timer)
            // 获取debounce执行作用域的this
            let _this = this
            // 获取参数
            let args = arguments

            timer = setTimeout(function(){
                fn.apply(_this, args)
            }, delay)
        }
    }
    `

    **函数节流和函数防抖区别**

    函数节流是**减少**连续的高频操作函数执行次数 (例如连续调用10次, 可能只执行3-4次)

    函数防抖是让连续的高频操作时函数只执行**一次**(例如连续调用10次, 但是只会执行1次)

    ### 5. 原型和原型链

    每个"构造函数"中都有一个默认的属性, 叫做 prototype, prototype属性保存着一个对象, 这个对象我们称之为"原型对象", prototype 指向它的原型对象

    每个"原型对象"中都有一个默认的属性, 叫做constructor, constructor 指向当前原型对象对应的那个"构造函数"

    通过构造函数创建出来的对象我们称之为"实例对象", 每个"实例对象"中都有一个默认的属性, 叫做__proto__, `__proto__` 指向创建它的那个构造函数的"原型对象"

    **基本关系**

    `  1. 所有函数都是Function构造函数的实例对象
      2. 所有函数都是对象, 包括Function构造函数
      3. 所有对象都有__proto__属性
      4. 普通对象的__proto__属性指向创建它的那个构造函数对应的"原型对象"
    `

    **特殊关系**

    `   5. 所有对象的__proto__属性最终都会指向"Object原型对象"
       6. "Object原型对象"的__proto__属性指向NULL
    `

    **对象中__proto__组成的链条我们称之为原型链**

    对象在查找属性和方法的时候, 会先在**当前**对象查找, 如果有就用自己的

    如果当前对象中找不到想要的, 会依次去**上一级**原型对象中查找

    如果找到**Object**原型对象都没有找到, 就会**报错**

    ### 6. new一个对象的时候发生了什么?

    `function Person(name, age) {
      this.name = name;
      this.age = age;
    }
    let p = new Person("Alice", 23);
    `

    new一个对象的四个过程：

    1、创建一个空对象

    `let obj = {};
    `

    2、让构造函数中的this指向新对象，并执行构造函数的函数体

    `let result = Person.call(obj);
    `

    3、设置新对象的__proto__属性指向构造函数的原型对象

    `obj.__proto__ = Person.prototype;
    `

    4、判断构造函数的返回值类型，如果是值类型，则返回新对象。如果是引用类型，就返回这个引用类型的对象。

    `if (typeof(result) == "object") 
        p = result;
    else 
        p = obj;
    `

    ### 7. ES5继承和ES6继承

    **ES5继承**

1.  在子类中通过call / apply方法借助父类的构造函数
2.  将子类的原型函数设置为父类的实例对象
    `function Person(myName, myAge) {
        this.name = myName;
        this.age = myAge;
    }
    Person.prototype.say = function () {
        console.log(this.name, this.age);
    }
    function Student(myName, myAge, myScore) {
        // 1.在子类中通过call/apply方法借助父类的构造函数
        Person.call(this, myName, myAge);
        this.score = myScore;
        this.study = function () {
            console.log("day day up");
        }
    }
    // 2.将子类的原型对象设置为父类的实例对象
    Student.prototype = new Person();
    Student.prototype.constructor = Student;

    let stu = new Student("zs", 18, 98);
    stu.say();  // zs 18
    `

    **ES6继承**

1.  通过子类extends父类, 来告诉浏览器子类要继承父类
2.  通过super()方法修改 this
    `class Person{
        constructor(myName, myAge){
            // this = stu;
            this.name = myName; // stu.name = myName;
            this.age = myAge;   // stu.age = myAge;
        }
        say(){
            console.log(this.name, this.age);
        }
    }
    // 以下代码的含义: 告诉浏览器将来Student这个类需要继承Person这个类
    class Student extends Person{
        constructor(myName, myAge, myScore){
            super(myName, myAge);   // 这一行代码相当于在子类中通过call/apply方法借助父类的构造函数
            this.score = myScore;
        }
        study(){
            console.log("day day up");
        }
    }

    let stu = new Student("zs", 18, 98);
    stu.say();  // zs 18
    `

    ### 8. 深拷贝和浅拷贝，以及如何实现对象深拷贝？

    **深拷贝**

    修改新变量的值不会影响原有变量的值

    默认情况下基本数据类型都是深拷贝

    **浅拷贝**

    修改新变量的值会影响原有变量的值

    默认情况下引用类型都是浅拷贝

    **通过自定义函数实现深拷贝**

    `class Person{
      name = "zs";
      cat = {
          age : 3
      };
      score = [1, 3, 5];
    }
    let p1 = new Person();
    let p2 = new Object();

    // 通过自定义函数实现深拷贝
    function deCopy(target, source) {
      // 1.通过遍历拿到source中所有的属性
      for (let key in source){
          // 2.取出当前遍历到的属性对应的取值
          let sourceValue = source[key];
          // 3.判断当前的取值是否是引用数据类型
          if (sourceValue instanceof Object){ // 如果是引用数据类型, 那么要新建一个存储空间保存
              // 4.通过sourceValue.constructor拿到这个对象的构造函数的类型, 然后新建这个对象或数组
              let subTarget = new sourceValue.constructor;
              target[key] = subTarget;
              // 5.再次调用拷贝, 将遍历到的属性的取值拷贝给新建的对象或者数组
              deCopy(subTarget, sourceValue);
          }else { // 如果不是引用数据类型, 之间将属性拷贝即可
              target[key] = sourceValue;
          }
      }
    }

    // 简化版本
    function deCopy(obj){
    	// 如果不是引用数据类型, 直接将属性拷贝即可
    	if(typeof obj != 'object')	return obj
    	// 如果是引用数据类型, 那么要新建一个存储空间保存
    	let newObj = new obj.constructor
    	for(let key in obj){
    		// 递归调用拷贝, 将遍历到的属性的取值拷贝给新建的对象或者数组
    		newObj[key] = deCopy(obj[key])
    	}
    	return newObj
    }

    deCopy(p2, p1);
    p2.cat.age = 666;   // 修改新变量的值不会影响到原有变量, 这里是深拷贝
    console.log(p1.cat.age);    // 3
    console.log(p2.cat.age);    // 666
    `

    ### 9. 进程和线程的区别

    进程是程序的一次执行过程，是一个动态概念，是程序在执行过程中分配和管理资源的基本单位

    线程是CPU调度和分派的基本单位，它可与同属一个进程的其他的线程共享进程所拥有的全部资源

1.  一个程序至少有一个进程,一个进程至少有一个线程
2.  线程的划分尺度小于进程，使得多线程程序的并发性高
3.  另外，进程在执行过程中拥有独立的内存单元，而多个线程共享内存，从而极大地提高了程序的运行效率
4.  线程在执行过程中与进程还是有区别的。每个独立的线程有一个程序运行的入口、顺序执行序列和程序的出口。但是线程不能够独立执行，必须依存在应用程序中，由应用程序提供多个线程执行控制
5.  从逻辑角度来看，多线程的意义在于一个应用程序中，有多个执行部分可以同时执行。但操作系统并没有将多个线程看做多个独立的应用，来实现进程的调度和管理以及资源分配。这就是进程和线程的重要区别

    ### 10. 说一下JS异步编程

    **JS是单线程的**

    所以JS中的代码都是串行的, 前面没有执行完毕后面不能执行

    JavaScript的单线程，与它的用途有关。

    作为浏览器脚本语言，JavaScript的主要用途是与用户互动，以及操作DOM。
    这决定了它只能是单线程，否则会带来很复杂的同步问题。

    例如: 如果JS是多线程的

    现在有一个线程要修改元素中的内容, 一个线程要删除该元素, 这时浏览器不知道以哪个线程为准

    除了"事件绑定的函数"和"回调函数"以外的都是同步代码

    程序运行会从上至下依次执行所有的同步代码

    在执行的过程中如果遇到异步代码会将异步代码放到事件循环中

    当所有同步代码都执行完毕后, JS会不断检测 事件循环中的异步代码是否满足条件

    一旦满足条件就执行满足条件的异步代码

    开发中为了保存异步代码的执行顺序, 那么就会出现回调函数层层嵌套

    如果回调函数嵌套的层数太多, 就会导致代码的阅读性, 可维护性大大降低

    promise是ES6中新增的异步编程解决方案, 在代码中的表现是一个对象

    promise对象可以将异步操作以同步流程来表示, 避免了回调函数层层嵌套问题，避免了回调地狱问题

    ### 11. 什么是promise

    promise是ES6中新增的异步编程解决方案, 在代码中的表现是一个对象

    开发中为了保存异步代码的执行顺序, 那么就会出现回调函数层层嵌套

    如果回调函数嵌套的层数太多, 就会导致代码的阅读性, 可维护性大大降低

    promise对象可以将异步操作以同步流程来表示, 避免了回调函数层层嵌套问题，避免了回调地狱问题

    我们可以通过 `new Promise(function(resolve, reject){});` 来创建一个promise对象，但创建的promise对象不是异步的, 只要创建promise对象就会立即执行存放的代码

    promise对象是通过状态的改变来实现通过同步的流程来表示异步的操作的, 只要状态发生改变就会自动触发对应的函数

    Promise对象有三种状态，分别是

    `pending:   默认状态，只要没有告诉promise任务是成功还是失败就是pending状态  
    fulfilled(resolved): 只要调用resolve函数, 状态就会变为fulfilled, 表示操作成功  
    rejected:  只要调用rejected函数, 状态就会变为rejected, 表示操作失败  
    `

    状态一旦改变既不可逆, 从pending变为fulfilled, 那么永远都是fulfilled，从pending变为rejected, 那么永远都是rejected

    可以通过函数来监听Promise状态的变化

    成功执行  then() 函数的回调

    失败执行  catch() 函数的回调

    **Promise的then方法**

    then方法接收两个参数,

    第一个参数是状态切换为成功时的回调,

    第二个参数是状态切换为失败时的回调

    **Promise的catch方法**

    catch 其实是 then(undefined, () =&gt; {}) 的语法糖

    **Promise的all静态方法:**

    1.all方法接收一个数组,

    2.如果数组中有多个Promise对象,只有都成功才会执行then方法,  并且会按照添加的顺序, 将所有成功的结果重新打包到一个数组中返回给我们

    3.如果数组中不是Promise对象, 那么会直接执行then方法

    应用场景: 批量加载, 要么一起成功, 要么一起失败

    **Promise的race静态方法:**

    1.race方法接收一个数组,

    2.如果数组中有多个Promise对象, 谁先返回状态就听谁的, 后返回的会被抛弃

    3.如果数组中不是Promise对象, 那么会直接执行race方法

    应用场景: 接口调试, 超时处理

    ## HTTP

    ### 1. 什么是跨域，以及如何解决跨域问题？

    跨域是相对于同源策略而言的。

    同源策略是一种约定，它是浏览器最核心也最基本的安全功能

    所谓同源是指: 协议，域名，端口都相同,就是同源, 否则就是跨域

    **同源策略带来的影响**

    在同源策略下, 浏览器只允许Ajax请求同源的数据, 不允许请求不同源的数据

    但在企业开发中, 一般情况下为了提升网页的性能, 网页和数据都是单独存储在不同服务器上的

    这时如果再通过Ajax请求数据就会拿不到跨域数据

    **跨域解决方案**

    现在主流跨域解决方案是jsonp

    JSONP让网页从跨域的地址那获取资料，即跨域读取数据

    **JSONP实现跨域访问的原理**

    > 1.  在同一界面中可以定义多个script标签
> 2.  同一个界面中多个script标签中的数据可以相互访问
> 3.  可以通过script的src属性导入其它资源, 通过src属性导入其它资源的本质就是将资源拷贝到script标签中
> 4.  script的src属性不仅能导入本地资源, 还能导入远程资源
> 5.  由于script的src属性没有同源限制, 所以可以通过script的src属性来请求跨域数据

    **JSONP优化**

    > 1.  在开发中通过JSONP来获取跨域的数据，一般情况下服务器返回的都不会是一个变量, 而是一个函数的调用。所以JSONP的第一个优化就是让服务器返回函数调用。
>     但是这样会导致当前服务器返回的函数调用名称写死了,服务器返回函数叫什么名称, 我们本地就必须定义一个什么名称的函数
> 2.  解决方案:通过URL参数的方式来动态指定函数名称
>     如：script标签的URL为https://www.jd.com?name=test，（假设服务端语言是php）服务端可以通过`$name = $_GET['name']`获取到客户端传递过来的参数，然后通过echo $name."(666);";返回字符串的拼接后的数据。
> 3.  由于script标签默认是同步, 前面的script标签没有加载完数据, 后面的script标签就不会被执行
>     所以请求数据的script标签必须放到后面
>     解决方案:
>     通过JS动态创建script标签, 因为JS动态创建的script标签默认就是异步的,
>     不用等到前面的标签加载完就可以执行后面的script标签

    **jQuery中JSONP使用**

    jQuery也考虑到我们有可能需要获取跨域数据，所以在jQuery中也能获取跨域数据。

    > 1.  使用jQuery封装好的ajax方法
> 2.  在ajax方法中新增一个键值对dataType: "jsonp"，作用是告诉jQuery需要请求跨域的数据
> 3.  在请求服务端文件的时候jQuery会自动在链接后面加上?callback=回调函数名称，服务端就可以通过callback拿到回调函数的名称`$name = $_GET["callback"]`,然后还是一样可以通过字符串拼接的回调函数返回数据`echo $name.("666");`
> 4.  在jQuery中不需要定义一个对应名称的函数，jQuery会自动将回调函数中的数据取出来传给success方法
> 5.  还可以设置jsonp: "回调函数名称"来告诉jQuery服务器在获取回调函数名称的时候需要用什么key来获取。
> 6.  回调函数的名称也可以由我们自己来指定，只需要设置`jsonpCallback：回调函数的名称`即可

    **JSONP封装(参考jQuery)**

    myJaonp.js

    `function obj2str(obj){
        // 生成随机因子
        obj.t = (Math.random()).replace(".", "");
        let arr = [];
        for(let key in obj){
            arr.push(key + "=" + encodeURI(obj[key]));
        }
        let str = arr.join("&amp;");
        return str;
    }

    function myJsonp(options){
        options = optionns || {};
        // 1. 生成url地址
        let url = options.url;
        // 判断是否指定回调函数名称的key
        if(options.jsonp){
            url += "?" + options.jsonp + "=";
        }else{
            url += "?callback=";
        }
        // 判断是否指定回调函数名称
        let callbackName = ("jQuery" + Math.random()).replace(".", "");
        if(options.jsonpCallback){
            callbackName = options.jsonpCallback;       
            url += options.jsonpCallback;
        }else{
            url += callbackName;
        }
        // 判断是否传递数据
        if(options.data){
            let str = obj2str(options.data);
            url += "&amp;" + str;
        }

        // 2. 获取跨域的回调函数
        let oScript = document.createElement("script");;
        oScript.src = url;
        document.body.appentChild(oScript);

        // 3.定义回调函数
        window[callbackName] = function(data){
            // 删除已经获取了数据的script标签
            document.body.removeChild(oScript);
            // 将获取到的数据返回给外界
            options.success(data);
        }
    }
    `

    JSONP封装.html

    `...
    script src="myJsonp.js"&gt;/script&gt;
    script&gt;
        myJSONP({
                url: "http://127.0.0.1:80/jQuery/Ajax/jsonp.php",
                data:{
                    "name": "zs",
                    "age": 22
                },
                jsonp: "cb",  // 告诉jQuery服务器在获取回调函数名称的时候需要用什么key来获取
                jsonpCallback: "zs", // 告诉jQuery服务器在获取回调函数名称的时候回调函数的名称是什么
                success: function (msg) {
                    console.log(msg);
                }
            });
    /script&gt;
    ...
    `

    jsonp.php

    `?php
    // 1.拿到传递过来的数据
    $name = $_GET["name"];
    $age = $_GET["age"];
    $arr = array("name"=&gt;$name, "age"=&gt;$age);
    $data = json_encode($arr);  // 将数组转换为json

    // 2.拿到回调函数的名称
    $cb = $_GET["cb"];   
    // 3.返回数据
    echo $cb."(".$data.");";  
    ?&gt;
    `

    ### 2. HTTP和HTTPS的区别

    HTTP 的URL 以http:// 开头，而HTTPS 的URL 以https:// 开头

    HTTP 是明文传输，HTTPS 通过 SSL\TLS 进行了加密

    HTTP 的端口号是 80，HTTPS 是 443

    HTTPS 需要到 CA 申请证书，一般免费证书很少，需要交费

    HTTP 的连接很简单，是无状态的；HTTPS 协议是由 SSL+HTTP 协议构建的可进行加密传输、身份认证的网络协议，比 HTTP 协议安全。

    ### 3. HTTP的状态码说一下

    100-199 用于指定客户端应响应的某些动作

    200-299 用于表示请求成功

    300-399 用于已重定向的文件

    400-499 用于指出客户端的错误

    &emsp;400：语义有误，当前请求无法被服务器理解

    &emsp;401：当前请求需要用户验证

    &emsp;403：服务器已经理解请求，但是拒绝执行它

    &emsp;404：请求的内容不存在。

    500-599 用于指出服务器错误

    &emsp;503：服务不可用

    ### 4. get和post的区别

*   **提交数据存储位置不同**
    GET请求会将数据放到URL后面
    POST请求会将数据放到请求头中
*   **对提交的数据大小限制不同**
    GET请求对所发信息量的限制是2000 个字符
    POST请求对信息量没有限制
*   **对提交的数据编码不同**
    GET请求的参数只能是ASCII码，所以中文需要URL编码
    POST请求传参没有这个限制
*   **应用场景不同**
    GET请求用于提交非敏感数据和小数据
    POST请求用于提交敏感数据和大数据
*   get请求可以被缓存，post不可以被缓存
*   get后退不会有影响，post后退会重新进行提交
*   get请求的记录会留在历史记录中，post请求不会留在历史记录

    ### 5. Cookie、SessionStronge、LocalStronge的区别

*   **在同一浏览器下生命周期不同**
    Cookie生命周期:         默认是关闭浏览器后失效, 但是也可以设置过期时间
    SessionStorage生命周期: 仅在当前会话(窗口)下有效，关闭窗口或浏览器后被清除, 不能设置过期时间
    LocalStorage生命周期:   除非被清除，否则永久保存
*   **容量不同**
    Cookie容量限制:         大小(4KB左右)和个数(20~50)
    SessionStorage和LocalStorage容量限制: 大小(5M左右)
*   **网络请求不同**
    Cookie网络请求:         每次都会携带在HTTP请求头中，如果使用cookie保存过多数据会带来性能问题
    SessionStorage和LocalStorage网络请求: 仅在浏览器中保存，不参与和服务器的通信
*   **应用场景不同**
    Cookie:         判断用户是否登录
    sessionStorage: 表单数据
    LocalStorage:   购物车
    > 需要注意的是：无论通过哪种方式存储的数据, 都不能将敏感数据直接存储到本地

    ### 6. Ajax的优缺点和四个步骤

    ajax简单来说是通过XmlHttpRequest对象来向服务器发异步请求，从服务器获得数据，然后用javascript来操作DOM而更新页面。

    #### ajax的优点

*   最大的一点是页面无刷新，在页面内与服务器通信，给用户的体验非常好。
*   使用异步方式与服务器通信，不需要打断用户的操作，具有更加迅速的响应能力。
*   可以把以前一些服务器负担的工作转嫁到客户端，利用客户端闲置的能力来处理，减轻服务器和带宽的负担，节约空间和宽带租用成本，ajax的原则是“按需取数据”，可以最大程度的减少冗余请求。
*   基于标准化的并被广泛支持的技术，不需要下载插件或者小程序。

    #### ajax的缺点

*   ajax对浏览器后退机制造成了破坏，也就是说用户无法通过浏览器的后退按钮回到前一次操作的页面。虽然有些浏览器解决了这个问题，但它也并不能改变ajax的机制，它所带来的开发成本是非常高的，和ajax框架所要求的快速开发是相背离的。这是ajax所带来的一个非常严重的问题。
*   安全问题。技术同时也对IT企业带来了新的安全威胁，ajax技术就如同对企业数据建立了一个直接通道。这使得开发者在不经意间会暴露比以前更多的数据和服务器逻辑。
*   对搜索引擎的支持比较弱。
*   破坏了程序的异常机制。至少从目前看来，像ajax.dll，ajaxpro.dll这些ajax框架是会破坏程序的异常机制的。
*   另外，像其他方面的一些问题，比如说违背了url和资源定位的初衷。例如，我给你一个url地址，如果采用了ajax技术，也许你在该url地址下面看到的和我在这个url地址下看到的内容是不同的。这个和资源定位的初衷是相背离的。
*   一些手持设备（如手机、PDA等）现在还不能很好的支持ajax，比如说我们在手机的浏览器上打开采用ajax技术的网站时，它目前是不支持的。

    #### ajax的四个步骤

*   **创建一个异步对象**
    `let xmlhttp = new XMLHttpRequest();
    `

*   **设置请求方式和请求地址**
    open(method,url,async)  规定请求的类型、URL 以及是否异步处理请求。
    method：请求的类型；GET 或 POST
    url：文件在服务器上的位置
    async：true（异步）或 false（同步）
    `xmlhttp.open("GET","04-ajax-get.php",true);
    `

*   **发送请求**
    `xmlhttp.send();
    `

*   **监听状态的变化**
    `xmlhttp.onreadystatechange = function(ev2){
        /*
        0: 请求未初始化
        1: 服务器连接已建立
        2: 请求已接收
        3: 请求处理中
        4: 请求已完成，且响应已就绪
        */
        if (xmlhttp.readyState === 4){
            // 判断是否请求成功
            if (xmlhttp.status &gt;= 200 &amp;&amp; xmlhttp.status  300 || xmlhttp.status === 304){
                // 5.处理返回的结果
                console.log("接收到服务器返回的数据");
            }else {
                console.log("没有接收到服务器返回的数据");
            }
        }
    }
    `

    ### 7. 前端对后端返回的数据如何处理

    `前端通过javascript对后端返回的json或者xml进行格式化处理
    JSON:
    var jsonObj = JSON.parse(后端返回的json字符串);
    var result = JSON.stringify(jsonObj, null, 2);//格式化

    XML：
    先使用 xml2json转化为JSON格式，然后再JSON.parse再JSON.stringfy进行格式化
    `

    ### 8 . 从输入URL到页面加载完成的过程中都发生了什么

    > 这里我不得不说一下，这是一个前端面试非常经典的面试题，这个题目很深，涉及的知识点很广，我这里只是简单概括，如果想进一步了解请移步：[传送门](https://segmentfault.com/a/1190000006879700#comment-area)
    `1. 浏览器会进行DNS域名解析，拿到域名对应的服务器ip地址，再用该ip去访问web服务器
    2. 然后会和web服务器进行tcp的三次握手建立tcp连接
    3. 连接建立成功后，浏览器会发送http的get请求
    4. 服务器收到请求并给予响应，返回请求的数据
    5. 浏览器拿到数据并进行解析、渲染
    6. 浏览器和服务器进行tcp的四次挥手，断开连接
    `

    ### 9. 详细说一下 TCP 的三次握手和四次挥手过程

    **三次握手**

1.  第一次握手(SYN=1, seq=x):
    > 1.  客户端发送一个 TCP的 SYN 标志位置1的包，指明客户端打算连接的服务器的端口(请求同步)，并选择序号 seq=x，表明传送数据时的第一个数据字节的序号是 x。(seq是个随机值)
    >2.  发送完毕后，客户端进入 SYN_SEND 状态。
2.  第二次握手(SYN=1, ACK=1, seq=y, ack=x+1):
    > 1.  服务器的TCP收到连接请求报文段后，如同意，则发回确认包(ACK)应答。即 SYN 标志位和 ACK 标志位均为1。服务器端选择自己 ISN 序列号(随机值y)，放到seq 域里，同时将确认序号ack设置为客户的 ISN 加1，即 x+1(即回复对方确认收到了序列号为x开始的包，且希望下次的数据从x+1的位置开始)。
    >2.  发送完毕后，服务器端进入 SYN_RCVD 状态。
3.  第三次握手(ACK=1，ack=y+1，seq=x+1)
    > 1.  客户端收到此报文段后再次发送确认包(ACK)，SYN 标志位为0，ACK 标志位为1，并且把服务器发来 ACK 的序号字段+1，放在确定字段ack中发送给对方，并且告诉服务器自己的seq=x+1
    >2.  发送完毕后，客户端进入 ESTABLISHED 状态，当服务器端接收到这个包时，也进入 ESTABLISHED 状态，TCP握手结束。

    **四次挥手**

    1.第一次挥手：客户端发送一个FIN，用来关闭客户端到服务端的数据传送，客户端进入FIN_WAIT_1状态。

    2.第二次挥手：服务端收到FIN后，发送一个ACK给客户端，确认序号为收到序号+1（与SYN相同，一个FIN占用一个序号），服务端进入CLOSE_WAIT状态。

    3.第三次挥手：服务端发送一个FIN，用来关闭服务端到客户端的数据传送，服务端进入LAST_ACK状态。

    4.第四次挥手：客户端收到FIN后，客户端进入TIME_WAIT状态，接着发送一个ACK给Server，确认序号为收到序号+1， 服务端进入CLOSED状态，完成四次挥手。

    ## 浏览器

    ### 1. 说一下浏览器渲染机制

    `1.解析HTML生成DOM树  
    2.解析CSS生成CSSOM规则树  
    3.将DOM树和CSSOM规则树合并在一起生成渲染树  
    4.遍历渲染树开始布局，计算每个节点的位置大小信息  
    5.将渲染树的每个节点绘制到屏幕  
    `

    ### 2. 说一下浏览器事件环

    `1.JS是单线程的
      JS中的代码都是串行的, 前面没有执行完毕后面不能执行

    2.执行顺序
    2.1程序运行会从上至下依次执行所有的同步代码
    2.2在执行的过程中如果遇到异步代码会将异步代码放到事件循环中
    2.3当所有同步代码都执行完毕后, JS会不断检测 事件循环中的异步代码是否满足条件
    2.4一旦满足条件就执行满足条件的异步代码

    3.宏任务和微任务
    在JS的异步代码中又区分"宏任务(MacroTask)"和"微任务(MicroTask)"
    宏任务: 宏/大的意思, 可以理解为比较费时比较慢的任务
    微任务: 微/小的意思, 可以理解为相对没那么费时没那么慢的任务

    4.常见的宏任务和微任务
    MacroTask: setTimeout, setInterval, setImmediate（IE独有）...
    MicroTask: Promise, MutationObserver ,process.nextTick（node独有) ...
    注意点: 所有的宏任务和微任务都会放到自己的执行队列中, 也就是有一个宏任务队列和一个微任务队列
            所有放到队列中的任务都采用"先进先出原则", 也就是多个任务同时满足条件, 那么会先执行先放进去的

    5.完整执行顺序
    1.从上至下执行所有同步代码
    2.在执行过程中遇到宏任务就放到宏任务队列中,遇到微任务就放到微任务队列中
    3.当所有同步代码执行完毕之后, 就执行微任务队列中满足需求所有回调
    4.当微任务队列所有满足需求回调执行完毕之后, 就执行宏任务队列中满足需求所有回调
    ... ...
    注意点:
    每执行完一个宏任务都会立刻检查微任务队列有没有被清空, 如果没有就立刻清空
    `

    ## Vue

    ### 1. 什么是MVVM，MVVM和MVC以及MVP有什么区别？

    MVVM最早由微软提出来，它借鉴了桌面应用程序的MVC思想，在前端页面中，把Model用纯JavaScript对象表示，View负责显示，两者做到了最大限度的分离，把Model和View关联起来的就是ViewModel。

    ViewModel负责把Model的数据同步到View显示出来，还负责把View的修改同步回Model

    View 和 Model 之间的同步工作完全是自动的，无需人为干涉（由viewModel完成，在这里指VUE）

    因此开发者只需关注业务逻辑，不需要手动操作DOM, 不需要关注数据状态的同步问题，复杂的数据状态维护完全由 MVVM 来统一管理

    MVVM的设计思想：关注Model的变化，让MVVM框架去自动更新DOM的状态，从而把开发者从操作DOM的繁琐步骤中解脱出来！

    **MVC和MVP的关系**

    MVP是从经典的模式MVC演变而来，它们的基本思想有相通的地方：Controller/Presenter负责逻辑的处理，Model提供数 据，View负责显示。作为一种新的模式，MVP与MVC有着一个重大的区别：在MVP中View并不直接使用Model，它们之间的通信是通过 Presenter (MVC中的Controller)来进行的，所有的交互都发生在Presenter内部，而在MVC中View会直接从Model中读取数据而不是通过 Controller。

    **MVVM和MVP的关系**

    而 MVVM 模式将 Presenter 改名为 ViewModel，基本上与 MVP 模式完全一致。 唯一的区别是，它采用双向绑定（data-binding）：View的变动，自动反映在 ViewModel，反之亦然。这样开发者就不用处理接收事件和View更新的工作，框架已经帮你做好了。

    ### 2. 说一下Vue的优点

    #### 1. 体积小

    压缩后只有33K;

    #### 2. 更高的运行效率

    基于虚拟DOM, 一种可以预选通过JavaScript进行各种计算, 把最终的DOM操作计算出来并优化的技术，由于这个DOM操作属于预处理操作， 并没有真正地操作DOM， 所以叫虚拟DOM。

    #### 3. 双向数据绑定

    让开发者不用再去操作DOM对象, 把更多的精力投入到业务逻辑上。

    #### 4. 生态丰富、学习成本低

    市场上拥有大量成熟、稳重的基于Vue.js的UI框架、常用组件！拿来即用实现快速开发！
    对初学者友好、入门容易、学习资料多。

    ### 3. 说一下Vue的生命周期

    Vue 实例有一个完整的生命周期，也就是从开始创建、初始化数据、编译模板、挂载Dom→渲染、更新→渲染、卸载等一系列过程，我们称这是 Vue 的生命周期。通俗说就是 Vue 实例从创建到销毁的过程，就是生命周期。

    Vue生命周期可以分为三个阶段：创建阶段、运行阶段、销毁阶段

    #### 创建阶段的生命周期方法

    **1. beforeCreate**

    在调用`beforeCreate`的时候, 仅仅表示Vue实例刚刚被创建出来

    此时此刻还没有初始化好Vue实例中的数据和方法, 所以还不能访问Vue实例中保存的数据和方法

    **2. created**

    在调用`created`的时候, 是我们**最早**能够访问Vue实例中保存的数据和方法的地方

    **3. beforeMount**

    在调用`beforeMount`的时候, 表示Vue已经编译好了最终模板, 但是还没有将最终的模板渲染到界面上

    **4. mounted**

    在调用`mounted`的时候, 表示Vue已经完成了模板的渲染, 我们已经可以拿到界面上渲染之后的内容了

    #### 运行阶段的生命周期方法

    **1. beforeUpdate**

    在调用beforeUpdate的时候, 表示Vue实例中保存的数据被修改了

    只有保存的数据被修改了才会调用beforeUpdate, 否则不会调用

    在调用beforeUpdate的时候, 数据已经更新了, 但是界面还没有更新

    **2. updated**

    在调用updated的时候, 表示Vue实例中保存的数据被修改了, 并且界面也同步了修改的数据了

    也就是说: 数据和界面都同步更新之后就会调用updated

    #### 销毁阶段的生命周期方法

    **1. beforeDestroy**

    在调用`beforeDestroy`的时候, 表示当前组件即将被销毁了

    只要组件不被销毁, 那么beforeDestroy就不会调用。beforeDestroy函数是我们**最后**能够访问到组件数据和方法的函数

    **2. destroyed**

    在调用`destroyed`的时候, 表示当前组件已经被销毁了

    只要组件不被销毁, 那么destroyed就不会调用。在这个生命周期方法中无法再去操作组件中数据和方法

    ### 4. 什么是组件以及如何使用组件

    组件就是把一个很大的界面拆分为多个小的界面, 每一个小的界面就是一个组件

    将大界面拆分成小界面就是组件化

    组件化的好处是可以简化Vue实例的代码，可以提高代码复用性

    Vue的组件注册分为**全局注册**和**局部注册**

    全局注册是在全局Vue对象的component属性中绑定定义好的模板

    局部注册是在Vue实例的components属性中绑定定义好的模板

    如果是.vue文件的组件则需要通过import导入到需要的组件中。

    ### 5. Vue组件间是如何通信的

    **方法一、`props`/`$emit`**

    在父组件中通过v-bind传递数据，在子组件中通过props接收数据

    在父组件中通过 v-on 传递方法，在子组件的自定义方法中通过 `this.$emit('自定义接收名称');` 触发传递过来的方法

    **方法二、`$emit/$on`**

    这种方法通过一个空的Vue实例作为中央事件总线（事件中心），用它来触发事件和监听事件,巧妙而轻量地实现了任何组件间的通信，包括父子、兄弟、跨级。

1.  定义一个空的Vue实例
    `var Event = new Vue();
    `

1.  传递数据
    `Event.$emit(事件名,数据);
    `

1.  获取数据
    `Event.$on(事件名,data =&gt; {});
    `

    **方法三、vuex**

    vuex 是 Vue 配套的 公共数据管理工具，我们可以将共享的数据保存到 vuex 中，
    方便整个程序中的任何组件都可以获取和修改vuex中保存的公共数据

*   创建Vuex对象
    `const store = new Vuex.Store({
        // 这里的state就相当于组件中的data, 就是专门用于保存共享数据的
        state: {
            msg: "共享数据"
        }
    });
    `

*   在祖先组件中添加 store 的 key 保存Vuex对象
    只要祖先组件中保存了Vuex对象 , 那么祖先组件和所有的后代组件就可以使用Vuex中保存的共享数据了
    `store: store,
    `

*   在使用Vuex中保存的共享数据的时候, 必须通过如下的格式来使用
    <!-- `<p>{{this.$store.state.msg}}</p>` -->

    **方法四：作用域插槽**

    作用域插槽就是带数据的插槽, 就是让父组件在填充子组件插槽内容时也能使用子组件的数据

    应用场景在于:  子组件提供数据, 父组件决定如何渲染

*   在`slot`中通过 `v-bind:数据名称="数据名称"` 方式暴露数据
*   在父组件中通过 `template slot-scope="作用域名称"&gt;` 接收数据
*   在父组件的 `template&gt;/template&gt;` 中通过 作用域名称.数据名称 方式使用数据

    在 Vue2.6.版本中，为作用域插槽引入了一个新的统一的语法 (即 v-slot 指令)。

    它取代了slot-scope

    也就是说我们可以通过`v-slot`指令告诉Vue如何接收作用域插槽暴露的数据

    格式： `v-slot:插槽名称="作用域名称"`

    简写: `#插槽名称="作用域名称"`

    ### 6. Vue是如何实现双向数据绑定的(Vue双向数据绑定原理)

    mvvm 双向绑定，采用**数据劫持结合发布者-订阅者模式**的方式，通过`Object.defineProperty()`来劫持各个属性的 setter、getter，在数据变动时发布消息给订阅者，触发相应的监听回调。

    Vue主要通过以下4个步骤实现数据双向绑定:

    1、实现一个数据监听器 Observer，能够对数据对象的所有属性进行监听，如有变动可拿到最新值并通知订阅者

    2、实现一个指令解析器 Compile，对每个元素节点的指令进行扫描和解析，根据指令模板替换数据，以及绑定相应的更新函数

    3、实现一个订阅者 Watcher，作为连接 Observer 和 Compile 的桥梁，能够订阅并收到每个属性变动的通知，执行指令绑定的相应回调函数，从而更新视图

    4、最后实现 MVVM 作为数据绑定的入口，整合监听器、解析器和订阅者

    ### 7. 为什么需要使用Key（Vue 中 key 值的作用？）

    `需要使用 key 来给每个节点做一个唯一标识，Diff 算法就可以正确的识别此节点，找到正确的位置区插入新的节点
    所以简单的说，key 的作用主要是为了高效的更新虚拟 DOM

    比如渲染一堆input框，中间删除一个就会产生问题，下面的input会被顶上来，
    vue会选择复用节点(Vue的就地更新策略)，导致之前节点的状态被保留，从而产生一系列的bug
    

### 8. 你对Vue项目进行了哪些优化

1.  不在模板里面写过多表达式
2.  循环调用子组件时添加key
3.  频繁切换的使用v-show，不频繁切换的使用v-if
4.  尽量少用float，可以用flex
5.  按需加载，可以用require或者import()按需加载需要的组件
6.  路由懒加载