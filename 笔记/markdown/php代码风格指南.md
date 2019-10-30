# 代码风格指南



### 文档说明

主要是为自己找到合适的编码风格，并不会把所有指南都记录在内，其他优先使用用phpstrom来进行代码格式的优化（eg:空格，换行等）



参考

https://psr.phphub.org/

### PSR-1 基础编码规范



1类的命名 **必须** 遵循 `StudlyCaps` 大写开头的驼峰命名规范；

2.方法名称 **必须** 符合 `camelCase()` 式的小写开头驼峰命名规范。

3.类的属性命名 **可以** 遵循：         

- 大写开头的驼峰式 (`$StudlyCaps`)
- 小写开头的驼峰式 (`$camelCase`)
- 下划线分隔式 (`$under_score`)     

（建议使用小写驼峰）

4类的常量中所有字母都 **必须** 大写，词间以下划线分隔。

```php
const DATE_APPROVED
```

从属效应（副作用）

PHP 代码中 **应该** 只定义类、函数、常量等声明，或其他会产生 `副作用` 的操作（如：生成文件输出以及修改 .ini 配置文件等），二者只能选其一













### PSR-2 编码风格规范



1.每行的字符数 **应该** 软性保持在 80 个之内，理论上 **一定不可** 多于 120 个，但 **一定不可** 有硬性限制。

2.PHP 所有 [关键字](http://php.net/manual/en/reserved.keywords.php) **必须** 全部小写。

常量 `true` 、`false` 和 `null` 也 **必须** 全部小写。

3.空行

空行 **可以** 使得阅读代码更加方便以及有助于代码的分块。

每个方法之后空行

4.方法

方法名称后 **一定不可** 有空格符，其开始花括号 **必须** 独占一行，结束花括号也 **必须** 在方法主体后单独成一行。参数左括号后和右括号前 **一定不可** 有空格。

```php
    public function fooBarBaz($arg1, &$arg2, $arg3 = [])
    {
        // method body
    }
```







### 命名原则

命名是程序规划的核心。古人相信只要知道一个人真正的名字就会获得凌驾于那个人之上的不可思议的力量。只要你给事物想到正确的名字，就会给你以及后来的人带来比代码更强的力量

名字就是事物在它所处的生态环境中一个长久而深远的结果。总的来说，只有了解系统的程序员才能为系统取出最合适的名字。如果所有的命名都与其自然相适合，则关系清晰，含义可以推导得出，一般人的推想也能在意料之中。

就一般约定而言，类、函数和变量的名字应该总是能够描述让代码阅读者能够容易的知道这些代码的作用。形式越简单、越有规则，就越容易让人感知和理解。应该避免使用模棱两可，晦涩不标准的命名。

#### 变量、对象、函数名



- 变量、对象、函数名一律为小写格式，除非必要，单词之间一般不使用下划线“_”进行分割；
- 变量命名只能使用项目中有据可查的英文缩写方式，例如可以使用$data而不可使用$data1、$data2这样容易产生混淆的形式，应当使用$threaddata、$postdata这样一目了然容易理解的形式；
- 必须清楚所使用英文单词的词性，在权限相关的范围内，大多使用$allow***或$is***的形式，前者后面接动词，后者后面接形容词。
- 可以合理的对过长的命名进行缩写，例如$bio($biography)，$tpp($threadsPerPage)，前提是英文中有这样既有的缩写形式，或字母符合英文缩写规范；

- 变量名标识符不应当使用下划线“_”进行分割，函数名根据需要可按照模块单元名称使用下划线添加前缀，以实现命名空间的效果。但每个函数名标识符尽量避免出现三个以上的下划线。





##### 			自用命名风格（参考yii2源代码）

​			方法名

​			getXxxx()                   getName()

​			setBasePath()

​			addDynamic()

​			updateDynamic()

​			deleteValue()

​			removeDuplicate()

​			clearOutput()

​			createAction()

​			findLayoutFile()

​			hasProperty()

​			canSetProperty()

​			ensureBehavious()

​			attachBehaviors()

​			detachBehaviors()

​			defineAttribute()

​			undefineAttribute()

​			isFatalError()

​			logException()

​			checkREquirements()

​			filterBySimilarity()

​			buildInternal()

​			sortModels()

​			refresh()

​			handleRequest()

​			bindActionParams()

​			preInit()

​			beforeRun()

​			afterRun()

​			sendCache()

​			checkRateLimit()

​			showCursor()

​			asHtml()

​			goHome()



### 编码规范



1.if(!empty($switch))  代替 if($switch)

判断一个无法确定（不知道是否已被赋值）的变量时，可用empty()或isset()，而不要直接使用if($switch)的形式

if($a) 效果等同 if(!empty($a))，但如果$a未定义，if($a)将报告一个警告，if(!empty($a))不会。



2使用变量，需要初始化

3.优先使用单引号 

4 if(4 ==$a )    代替  if($a==4)

5.尽量使用绝对路径  代替相对路径

6.优先使用内置函数

7.用 $i+=1代替 $i = $i +1;

8.PHP_EOL       代替"\n\r"    php换行符    

9.DIRECTORY_SEPARATOR     代替   "\\"作为文件分隔符

10.使用[] 定义数组

11.php 5.6之后  支持  ...parames 定义可变参数

12使用+运算符来实现默认参数

```php
function getDetail(parames){
    $parames + =[
        'height' => '200',
     	'width'  =>  '300'
    ]
    
}
```



对嵌套的if和foreach 优化，尽量不要多层嵌套if

13.可以使用 && 代替if       strlen($newpad)<6  &&  $msg = '密码长度不足！';

14 使用三元  代替if

15 去掉多此一举的if ，  返

```php
function isStr(){
        if($str&&strlen($str)>6){
            return true;
        }else{
            return false;
        }
}
直接替换成
 function isStr(){
    return  ($str&&strlen($str)>6)；
}
    


```

16  使用表驱动法    对else if 进行优化

```php
if('玄幻' == $sortname){
    $sortid=1;
}elseif('修真' == $sortname){
     $sortid=2;
}else{
       $sortid=3;
}

//可以使用switch进行改造

switch ($sortname){
    case '玄幻':
         $sortid=1;
         break;
    case '修真':
         $sortid=2;
         break;  
     default :
         $sortid=3;
         break;  
}

//最终解决方案  使用表驱动法代替“else if”,这个表可以理解成hash表，php中数组本身就是一个hash表，
$sortTable = [
     '玄幻' => 1，
     '修正' => 2，
      '其他' => 3
];
$sortid = $sortTable[$sortname]




```

循环语句的优化

优先使用foreach

- 用while(true)表示无限循环，别用for
- 特定情况下【发邮件，采集网页】，要加延时sleep
- 循环体内尽可能不用函数或更消耗资源的调用
- foreach 代替while和for 循环（php）
- 避免空循环
- 只做一件事，尽可能短，控制在50行以内
- 循环嵌套限制在3层以内



使用更加精悍短小的代码

- 函数的最佳最大长度是50-150行代码  （最多80行）
- 函数参数不超过7个
- 短小函数更容易理解也方便修改
- 只做一件事情的函数更易于修复
- 

复杂的逻辑表达式做成布尔函数

```php
if(!$isfirst && $success == 1 && $month >= 4 && $fee>= 12000 ){
    //todo
}

/为了更好的阅读性，可以将多个表达式，按照合适的命名合并
    
    $notFirst = (!$isfirst && $success == 1);
	$monthAndFee = ($month >= 4 && $fee>= 12000)
    
     if($notFirst && $monthAndFee){
         //todo
     }
    





```

永远不要复制雷同的代码

- 相同的代码放在一起让以后修改更轻松
- 可以让全局的统计和过滤器等实现方面
- 可复用的带参函数是解决雷同代码的好方法