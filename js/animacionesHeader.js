$( document ).ready(function() {

	$(window).scroll(function (event) {
	    var scroll = $(window).scrollTop();

	    if(scroll==100){
	        $("header").addClass("white-header");

	        $("header nav ul li a").addClass("black-after");
	       
	      $("header nav ul li a").css({
	        color:"black"
	        });

	      $("header nav img.logo").css({
	      	filter:"invert(100%)",
	      	transition:"filter 0.5s"
	      });

	      $("header nav ul li a i").css({
	        color:"black",
	        transition:"color 0.5s"
	        });

	      $(".fixed-btn").css({
	      	right:"-1%",
	      	transition:"right 0.5s"
	      });




	        /*$("#espacio_header").css({
	            paddingTop:"40px"
	        });*/
	        

	    }else if(scroll==0){
	       $("header").removeClass("white-header");
	         $("header nav ul li a").css({
	        color:"white",
	        transition:"color 0.5s"
	        });


	         $("header nav ul li a").removeClass("black-after");


	         $("header nav ul li a i").css({
	        color:"white",
	        transition:"color 0.5s"
	        });

	         $("header nav img.logo").css({
	      	filter:"invert(0%)",
	      	transition:"filter 0.5s"
	      });

	          $(".fixed-btn").css({
	      	right:"-100%",
	      	transition:"right 0.5s"
	      });
	       
	    }
	    // Do something
	});


});