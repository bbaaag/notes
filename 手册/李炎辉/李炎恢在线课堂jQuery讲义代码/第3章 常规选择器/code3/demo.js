

$(function () {
	
	//$('#box p').css('color', 'red');
	
	//find()方法
	//$('#box').find('p').css('color', 'blue');
	
	//$('#box > p').css('color', 'orange');
	
	//$('#box').children('p').css('color', 'red');
	
	//$('#box + p').css('color', 'blue');
	
	//next()方法
	//$('#box').next('p').css('color', 'maroon');
	
	//$('#box ~ p').css('color', 'orange');
	
	//nextAll()方法
	//$('#box').nextAll('p').css('color', 'maroon');
	
	//$('#box').next('*').css('color', 'maroon');			//next()等选择器方法不传参，就相当于传递了*号，
	
	//如果*在某个环境里有所浪费，建议尽量不去使用
	
	//prev 
	//$('#box').prev('p').css('color', 'red');
	
	//prevAll
	//$('#box').prevAll('p').css('color', 'red');
	
	//$('#box').prevAll('p').css('color', 'red');
	//$('#box').nextAll('p').css('color', 'red');
	//$('#box').prevAll('p').nextAll('p').css('color', 'red'); 错误的形式
	
	//siblings上下同级所有
	//$('#box').siblings('p').css('color', 'blue');
	
	//nextUntil()方法
	$('#box').nextUntil('p').css('color', 'red');
	
	//prevUntil()方法
	$('#box').prevUntil('p').css('color', 'red');
	
});


























