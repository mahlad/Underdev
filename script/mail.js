// JavaScript Document
function validateText(str,len){
	return str.length >= len;
}

function validateEmail(str){
	var emailPattern = /^[a-z0-9+_%.-]+@(?:[a-z0-9-]+\.)+[a-z]{2,6}$/i ;

	return emailPattern.test(str);
}

$(function(){
	// var closeform = $('section.designform  a.close'),
	// 	formdesign = $('section.designform'),
	// 	contact = $('div.container a.contact');
	// closeform.click(function(){
	// 	contact.animate({opacity:1},200);
	// 	formdesign.animate({
	// 		top:-390
	// 	},500);
	// });
	// contact.click(function(){
	// 	$(this).animate({opacity:0},500);
	// 	formdesign.animate({
	// 		top:-10
	// 	},500);
	// });
	$('#form-design').submit(function(){
		var target, err = false;
		target = $('#name');
		if( validateText(target.val(),3) ){

			target.removeClass('err').addClass('ok');
		}else{
			alert(12);
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
});