// ******************************************************************************************
// Contact Form Start
// ******************************************************************************************
		$(document).ready(function(){
		$("#form").validate({
			debug: false,
			rules: {
				name: "required",
				phone:"digits",
				message: "required",
				email: {
					required: true,
					email: true
				}
			},
			messages: {
				name: "Please let us know who you are.",
				email: "A valid email will help us get in touch with you."
				
			},
			submitHandler: function(form) {
				// do other stuff for a valid form
				$.post('email_process.php', $("#form").serialize(), function(data) {
					$('#post_message').html(data);
				});
			}
		});

//Contact Form END



/***************************************************
		  		   // Portfolio on mouseover opactiy
***************************************************/	

				if( jQuery.hasOwnProperty("prettyPhoto") ){
			
				$(".lightbox").prettyPhoto({
					animation_speed	: 'normal',
					theme			: 'pp_default',
					social_tools	: ''
				});
			
			}

});

//prettyPhoto END


/***************************************************
		  			Isotope Portfolio
***************************************************/
jQuery(document).ready(function(){ 

// Needed variables
	var $container	 	= $('#portfolio-list');
	var $filter 		= $('#portfolio-filter');
		
// Run Isotope  
	$container.isotope({
		filter				: '*',
		layoutMode   		: 'masonry',
		animationOptions	: {
		duration			: 750,
		easing				: 'linear'
	   }
	});	
	
// Isotope Filter 
	$filter.find('a').click(function(){
	  var selector = $(this).attr('data-filter');
		$container.isotope({ 
		filter				: selector,
		animationOptions	: {
		duration			: 750,
		easing				: 'linear',
		queue				: false,
	   }
	  });
	  return false;
	});	

// Adding Class to current selected items
$filter.find('a').click(function() {
		var currentOption = $(this).attr('data-filter');
		$filter.find('a').removeClass('current');
		$(this).addClass('current');
	});	




// Portfolio on mouse over image animation 
	var $container	 	= $('#portfolio-list');
	$container.find('img').adipoli({
		'hoverEffect' 	: 'boxRainGrowReverse',
		'startEffect' : 'transparent',
		'animSpeed' 	: 200,
	});


// Services on mouse over image animation 
	var $container3	 	= $('#service-box');
	$container3.find('img').adipoli({
		'hoverEffect' 	: 'boxRainGrowReverse',
		'startEffect' : 'transparent',
		'animSpeed' 	: 200,
	});
	
});	


// Isotope Portfolio END

/***************************************************
		  			Card Slides start
***************************************************/

            $(function() {
          
				// on  click logo	ul.list li
				$('ul.arrowunderline li,.menu > .item > .item_content >h2,.logo').hover(
				)
	
	
	// on  click navigation	
				.click(function(){
					var $this = $(this);
					var name = this.className;
					$('#wrapper').animate({marginTop:-900}, 500,function(){ // upside slide animation 
					var $this = $(this);
		
		switch (name)
			{
			case 'home':
			$('#home').show();
			$('#gift,#wedding,#portfolio,#contact').hide();
			break;
			
			case 'logo':
			$('#home').show();
			$('#gift,#wedding,#portfolio,#contact').hide();
			break;

			case 'wedding':	 
			$('#wedding').show();
			$('#home,#gift,#portfolio,#contact').hide();
			break;

			case 'portfolio':
			$('#portfolio').show();
			$('#home,#wedding,#gift,#contact').hide();
			break;
			
			case 'gift':	 
			$('#gift').show();
			$('#home,#wedding,#portfolio,#contact').hide();
			break;
			
			case 'contact':
			$('#contact').show();
			$('#home,#wedding,#gift,#portfolio').hide();
			break;
			
		} // end switch 
					
				$this.animate({marginTop:50}, 500);  // Downside slide animation 
				$this.animate({marginTop:28}, 500); //  slight animation 
				$this.animate({marginTop:50}, 500); // reset to normal
		
					})	 

				});

            });

  // Card Slides END
  
  
  jQuery(document).ready(function(){ 
 $("ul.arrowunderline li").click(function () {
			$('ul.arrowunderline  li').removeAttr('id');
		//	$('ul.arrowunderline  li').css('color', '#b6b6b6')
			$(this).attr('id', 'selected'  );
		//	$(this).css('color', '#71be6f');
    });
     });
 
 jQuery(document).ready(function($){

	/* prepend menu icon */
	$('#nav-wrap').prepend('<div id="menu-icon">Menu</div>');
	
	/* toggle nav */
	$("#menu-icon").on("click", function(){
		$("#nav").slideToggle();
		$(this).toggleClass("active");
	});

});


/***************************************************
		  		//	Preloader Script
***************************************************/

$(window).load(function() {
  $('#preloader').fadeOut(300, function() {
    $('body').css('overflow','visible');
    $(this).remove();
  });
});

//	//	Preloader Script

