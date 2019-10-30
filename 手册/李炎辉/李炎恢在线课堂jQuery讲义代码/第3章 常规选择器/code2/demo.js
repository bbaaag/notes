

$(function () {
	
	//$('div, p, strong').css('color', 'red');
	//$('#box, .pox, strong').css('color', 'blue');
	
	//$('ul li a').css('color', 'orange');
	
	//$('*').css('color', 'blue');
	
	//alert($('*').size());
	//alert($('*')[0].nodeName);
	
	//在全局范围使用*号，会极大的消耗资源，所以不建议在全局使用
	
	//$('ul li a, ul li em, ul li strong').css('color', 'red');
	
	//$('ul li, ul li a').css('color', 'red');
	
	//$('ul li *').css('color', 'green');
	//alert($('ul li *').size());				//通配选择器一般运用在局部的环境内
	
	//$('div.box').css('color', 'red');
	
	//$('.box.pox').css('color', 'green');
	
	//$('div#box p ul li a#link');			//可以，选择器越复杂，那么字符串解析就越慢
	
	$('#link');			//单个ID不需要字符串解析，就可以获取到
	
});


























