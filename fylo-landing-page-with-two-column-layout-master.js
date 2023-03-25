'use strict';

$(window).on('load',function(){
	
	
	function validateEmail(email){
		//assuming an email containing charcters : a-z , A-Z, 0-9 and underscore. And from either a .com or .net account
	    const regex = /\w+@\w+\.{1}(com|net){1}/;
		//get the input element 
		const email_input_el = document.getElementById(email);
		//get email entered by user input value
	    const val = email_input_el.value;
		//check the validy of the email 
		const check = regex.test(val);
		return check;
	}
	function errorHandling(font_color,error_border,output_text,cueId,inputId){
		let cue_el = document.getElementById(cueId);
		const input_el = document.getElementById(inputId);
		
		$(cue_el).css('color',font_color);
	    if(error_border !== 'none'){
			$(input_el).css('border', error_border);
		}
		cue_el.textContent=output_text;
	}
	function defaultNoError(cueId,inputId,border){
		//clear all error indicators as the email entered is correct.
		let cue_el = document.getElementById(cueId);
		cue_el.textContent='';
		const input_el = document.getElementById(inputId);
		$(input_el).css('border',border);
	}
	document.querySelector('#email-1-btn').addEventListener('click',function(event){
		event.preventDefault();
		//check to see if the email entered validates 
		const check = validateEmail('email1');
		
		if(check===false){
			//the email entered does not validate, show error message and a red border around the email input field
			errorHandling('red','2px solid red','Please check your email','cue1','email1');
		} else {
			//there is no error (anymore) , show default border color and remove any error message.
			defaultNoError('cue1','email1','2px solid black');
		}
		const form = document.querySelector('.email-form');
		//clear the user entry so they can rewrite their email if it was wrong, or looks send if correct
	    form.reset();
	});
	document.querySelector('#email-2-btn').addEventListener('click',function(event){
		event.preventDefault();
		//check to see if the email entered validates 
		const check = validateEmail('email2');
		
		if(check===false){
			//the email entered does not validate, show error message and a red border around the email input field
			errorHandling('white','none','Please check your email','cue2','email2');
		} else {
			//there is no error (anymore) , show default border color and remove any error message.
			defaultNoError('cue2','email2','2px solid black');
		}
		const form = document.querySelector('.email-form');
		//clear the user entry so they can rewrite their email if it was wrong, or looks send if correct
	    form.reset();
	});
	
});