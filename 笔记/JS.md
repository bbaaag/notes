

## array 索引数组 [ ]

### 创建

. []

```
var fruits = ['Apple', 'Banana'];
```

### 增

- push  将一个或多个元素添加到数组的末尾，并返回该数组的新长度 
- unshift 从数组中删除第一个元素，并返回该元素的值。此方法更改数组的长度。 
- _.concat

**添加元素到数组的末尾**

```js
var newLength = fruits.push('Orange');
```

**添加元素到数组的头部**

```js
var newLength = fruits.unshift('Strawberry') // add to the front
```

**合并或添加元素**  

```
var array = [1];
var other = _.concat(array, 2, [3], [[4]]);
```



### 删

- **pop**  从数组中删除最后一个元素，并返回该元素的值。此方法更改数组的长度 
- **shift** 从数组中删除第一个元素，并返回该元素的值。此方法更改数组的长度 
- **splice** 通过删除或替换现有元素或者原地添加新的元素来修改数组,并以数组形式返回被修改的内容。此方法会改变原数组 
- **_.drop** ( 去除`array`前面的`n`个元素 ,不改变数组)
- _**.without**  剔除所有给定值的新数组 ,  这个方法不会改变数组，与__.pull 对应
- **_.pull**  移除数组`array`中所有和给定值相等的元素 , 这个方法会改变数组 
- **_.filter**  返回满足回调方法的数组， 这个方法不会改变数组，与__.remove 对应
- **_.remove**返回满足回调方法的数组， 这个方法会改变数组

**删除数组末尾的元素**

```js
var last = fruits.pop();
```

**删除数组最前面（头部）的元素**

```js
var first = fruits.shift();
```

 **通过索引删除一个或多个元素** 

```js
var removedItem = fruits.splice(pos, 1); 
var removedItems = vegetables.splice(pos, n);
```

 **去除`array`前面的`n`个元素。（`n`默认值为1。）** 

```
_.drop([1, 2, 3]);  
// => [2, 3] 不改变原数组
```

**移除数组`array`中所有和给定值相等的元素** 

```

_.without([2, 1, 2, 3], 1, 2);

var array = [1, 2, 3, 1, 2, 3];
_.pull(array, 2, 3);
```

**返回满足回调方法的数组**

```
var words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

_.filter(words, function(o) { return o == 'spray'; })



var array = [1, 2, 3, 4];
var evens = _.remove(array, function(n) {
  return n % 2 == 0;
});


```

### 改

 删除或替换现有元素 

-  splice 

```css
var months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');


```





### 查

- **indexof**  返回在数组中可以找到一个给定元素的第一个索引，如果不存在，则返回-1。 
-  **findindex** 返回数组中满足提供的测试函数的第一个元素的**索引**。否则返回-1。 
- **find **   返回数组中满足提供的测试函数的第一个元素的值。否则返回 [`undefined`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/undefined)。 
- **slice**  返回一个新的数组对象，这一对象是一个由 begin和 end（不包括end）决定的原数组的浅拷贝。原始数组不会被改变 
- _.first  获取数组 `array` 的第一个元素 
- _.last   获取`array`中的最后一个元素。 
- _.take  从`array`数组的起始元素开始提取`n`个元素。 



**查索引**

```js
var beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];
console.log(beasts.indexOf('bison'));

```

```
var array1 = [5, 12, 8, 130, 44];

function isLargeNumber(element) {
  return element > 13;
}

console.log(array1.findIndex(isLargeNumber));
```

**获取数据的一部分**	

```
var array1 = [5, 12, 8, 130, 44];

var found = array1.find(function(element) {
  return element > 10;
});

console.log(found);
```





```
var fruits = ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango'];
var citrus = fruits.slice(1, 3);
```



### 循环

forEach

```js
fruits.forEach(function (item, index, array) {
    console.log(item, index);
});
// Apple 0
// Banana 1
```

map

```css
var array1 = [1, 4, 9, 16];
const map1 = array1.map(x => x * 2);
```

reduce

```
const array1 = [1, 2, 3, 4];
const reducer = (accumulator, currentValue) => accumulator + currentValue;

console.log(array1.reduce(reducer));
```



### 其他

isArray()



join

```
var elements = ['Fire', 'Air', 'Water'];
console.log(elements.join());
```



## object 关联数组 {}

新建

{}

增

1.user.age =36;

 2._.assign({ 'a': 0 }, {'d':5}); 

_.merge

删

_.unset

 _.omit 

改

 user.age =36;

_.set



查

 _.pick 

_.findkey

循环

_.forin

_.filter



其他











## object_array [{},{}]

## 增

push

删

_.filter

改



查

_.find

循环 

_.map













































```
times
```