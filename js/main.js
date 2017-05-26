$(document).ready(function() {
				 
	$(window).scroll(function() {
					
		if ($(window).scrollTop() > 970) {		
		   $('.navbar').addClass('navbar-fixed-top');		
	 }	
		if ($(window).scrollTop() < 971) {		
		   $('.navbar').removeClass('navbar-fixed-top');		
	 }					

	})						 
});


$(".navbar-toggleable-md ul li a[href^='#']").on('click',function(e) {

  e.preventDefault();
	
	var hash = this.hash;
	
	$('html,body').animate ({
	   scrollTop: $(hash).offset().top
	 }, 300 , function(){
		
	  window.location.hash = hash;
		
	});
	
});


$("#section-parallax .col-sm-8 a[href^='#']").on('click',function(e) {

  e.preventDefault();
	
	var hash = this.hash;
	
	$('html,body').animate ({
	   scrollTop: $(hash).offset().top
	 }, 300 , function(){
		
	  window.location.hash = hash;
		
	});
	
});


$(".footer .scroll-to-top-button a[href^='#']").on('click',function(e) {

  e.preventDefault();
	
	var hash = this.hash;
	
	$('html,body').animate ({
	   scrollTop: $(hash).offset().top
	 }, 300 , function(){
		
	  window.location.hash = hash;
		
	});
	
});



