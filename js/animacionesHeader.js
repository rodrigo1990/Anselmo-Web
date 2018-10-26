
	$(window).scroll(function (event) {
	    var scroll = $(window).scrollTop();

	    if(scroll>=100){
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

	      $(".fixed-btn").fadeIn();

	       $(".nav-collapse span").css({background:"black"});
	      $(".nav-collapse span").addClass("nav-black-af nav-black-bef");
	      




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

	          $(".fixed-btn").fadeOut();

	          $(".nav-collapse span").css({background:"white"});
	          $(".nav-collapse span").removeClass("nav-black-af nav-black-bef");

	       
	    }
	    // Do something
	});


