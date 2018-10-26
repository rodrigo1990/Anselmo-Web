

	var isOpen=0;

	function mostrarMenu(){
		$(".overlay-xs-menu").show();
		$(".xs-btn").show();


		setTimeout( function() {
		 isOpen=1;
	  	}, 300);

		
	}



	$(document).mouseup(function (e){

		var container = $(".xs-btn");

		if (!container.is(e.target) && container.has(e.target).length === 0 && isOpen==1){

			$(".overlay-xs-menu").fadeOut();


			console.log(isOpen);
			
		}
	}); 



