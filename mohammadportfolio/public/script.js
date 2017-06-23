const c = console.log;
let path;
window.onload = function(){
	windowScroll();
	document.getElementsByClassName('galaxyimage')[0].addEventListener('click',function(){
		window.open('https://mylessons.herokuapp.com', '_blank');
	})
	document.getElementsByClassName('attrimage')[0].addEventListener('click',function(){
		window.open('https://attrreader3.herokuapp.com', '_blank');
	})	
	document.getElementsByClassName('wsiaimage')[0].addEventListener('click',function(){
		window.open('http://wsiatest.bitballoon.com/', '_blank');
	})	
	document.getElementsByClassName('contactmeform')[0].addEventListener('submit',function(e){
		e.preventDefault();
		var data = {
			name: e.target.name.value,
			phone_or_email: e.target.phone_or_email.value,
			message: e.target.message.value
		}
		if(data['phone_or_email'].match(/^(?:(?:\(?(?:00|\+)([1-4]\d\d|[1-9]\d?)\)?)?[\-\.\ \\\/]?)?((?:\(?\d{1,}\)?[\-\.\ \\\/]?){0,})(?:[\-\.\ \\\/]?(?:#|ext\.?|extension|x)[\-\.\ \\\/]?(\d+))?$/i) || data['phone_or_email'].match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)){
			$.ajax({
			  type: "POST",
			  url: "/message/new",
			  data: data,
			  success: function(response){
		        console.log('postedd');
		        document.getElementsByClassName('success')[0].style.display = 'inline-block';
		        document.getElementsByClassName('failure')[0].style.display = 'none';
		        document.getElementsByClassName('invalid')[0].style.display = 'none';
		        setTimeout(function(){
		        	document.getElementsByClassName('success')[0].style.display = 'none';

		        },20000);
		        
			  },
			  error: function(){
			  	console.log('failll')
			  	document.getElementsByClassName('failure')[0].style.display = 'inline-block';
			  	document.getElementsByClassName('success')[0].style.display = 'none';
			  	document.getElementsByClassName('invalid')[0].style.display = 'none';
			  	 setTimeout(function(){
		        	document.getElementsByClassName('failure')[0].style.display = 'none';
		        },20000);
			  },
			  complete: function(jqXHR, textStatus) { console.log(jqXHR, textStatus); }
			});
		}else{
			document.getElementsByClassName('invalid')[0].style.display = 'inline-block';
			document.getElementsByClassName('failure')[0].style.display = 'none';
			document.getElementsByClassName('success')[0].style.display = 'none';
		}

		
	}) //end of onsubmit
}


function windowScroll(){
	if(window.location.pathname.includes('/about') || window.location.pathname == '/portfolio' || window.location.pathname == '/services' || window.location.pathname == '/skills' || window.location.pathname == '/learn' || window.location.pathname == '/contactme'){
		c('scrolling to', window.location.pathname);
	}
}