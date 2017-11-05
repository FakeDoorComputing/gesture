<!-- For more info on jQuery Mobile,  touch gestures and other useful events see : http://api.jquerymobile.com/category/events/ -->

$(document).on("pagecreate","#pageOne",function(){

  	$('#tapholdtext').on("taphold",function(){
    	$(this).hide();
      $(".footer").text("Tap me to get the button back").css("text-align","center");
 	});

	$('#taptext').on("tap",function(){
    	$(this).css("color", "red");
 	});

	$('#swipetext').on("swipeleft",function(){
    	$(this).css('color', 'green');
  	});

  $('#swipetext').on("swiperight",function(){
      $(this).css('color', 'blue');
    });

    $(".footer").on("tap",function(){
      $("#tapholdtext").show();
      $(".footer").text("Footer Text").css("text-align","center");
    });

    $("#navi_page_one").on("swipe", function(){
      $.mobile.navigate("#pageTwo");
    });

    $("#navi_page_two").on("swipe", function(){
      $.mobile.navigate("#pageOne");
    });
});
