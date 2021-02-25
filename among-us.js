
$(window).ready(function(){
  $('.header').height($(window).height());
})

$(window).ready(function(){
        
            $("#carouselpause").click(function(){
                $("#mycarousel").carousel('pause');
            });
            $("#carouselplay").click(function(){
                $("#mycarousel").carousel('cycle');
            });
        });

		$(window).ready( function() {
$("#nav-btn").click( function() {
if ( $("#nav-btn").children("span").hasClass("navbar-toggler-icon") ) {
$("#icon").removeClass("navbar-toggler-icon");
$("#icon").addClass("fa fa-window-close fa-sm");
}
else if ( $("#nav-btn").children("span").hasClass("fa fa-window-close fa-sm") ) {
$("#icon").removeClass("fa fa-window-close fa-sm");
$("#icon").addClass("navbar-toggler-icon");
}

} );
} );

$(window).ready(function(){
        
            $("#bg-btn").click(function(){
				
				if ( $("#bg-btn").hasClass("btn-secondary") ) {
					$("#bg-btn").removeClass("btn-secondary");
					$("#bg-btn").addClass("btn-warning");
					$("#bg-btn").text("Night mode on");
					$("body").css('background', '#303030');		
					$(".text").css('color', '#f2f6e9');	
					$(".card-header").css('background', '#f2f6e9');
					$(".card-body").css('background', '#303030');	
					$(".card-body").css('color', '#f2f6e9');	
				}
				else if ( $("#bg-btn").hasClass("btn-warning") ) {
					$("#bg-btn").removeClass("btn-warning");
					$("#bg-btn").addClass("btn-secondary");
					$("#bg-btn").text("Night mode off");
					$("body").css('background', '');
					$(".card-header").css('background', '');
					$(".card-body").css('background', '');	
					$(".card-body").css('color', '');					
				}
              
            });
            });
       
$(document).ready(function(){
  $('[data-toggle="tooltip"]').tooltip();   
});