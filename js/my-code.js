$(document).ready(function() {
	
	$("p").hide();
	$("#kristenPic").hide();
	
	$("h1").click(function() {

		$(this).next().fadeToggle(1000);

	});

});