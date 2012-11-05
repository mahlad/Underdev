// JavaScript Document
function validateText(str,len){
	return str.length >= len;
}

$(function(){
	var 
		formdesign = $('section.designform'),
		contact = $('div.total a.contact'),
		formdsg = $('section.designform form'),
		flag = false;
	contact.click(function(){
		if (!flag) {
			flag = true;
			formdesign.css({
				'border-radius':'10px',
				 padding : 15,
			}).animate({
				height:200,
				 
			},200);
			// formdsg.css({
			// 	'display' : 'block'
			// });

		}else{
			flag = false;
			formdesign.animate({
				height : 0,
				padding : 0
			},200);
			// formdsg.css({
			// 	'display' : 'none'
			// });
		}

	});

	$('#form-design').submit(function(){
		var target, err = false;
		target = $('#name');
		if( validateText(target.val(),3) ){
			target.removeClass('err').addClass('ok');
		}else{
			target.removeClass('ok').addClass('err');
			err = true;
		}

		target = $('#subject');
		if( validateText(target.val(),5) ){
			target.removeClass('err').addClass('ok');
		}else{
			target.removeClass('ok').addClass('err');
			err = true;
		}

		target = $('#txt');
		if( validateText(target.val(),10) ){
			target.removeClass('err').addClass('ok');
		}else{
			target.removeClass('ok').addClass('err');
			err = true;
		}

		if(!err){
			$('#ifrm').animate({
				height:'75px'
			},500);
		}

		return !err;
	});
	$('#form-design #reset').click(function(){
		$('#ifrm').animate({
			height:'0px'
		},200);
		$('#txt').removeClass('ok').removeClass('err');
		$('#name').removeClass('ok').removeClass('err');
		$('#subject').removeClass('ok').removeClass('err');
	});
});