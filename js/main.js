$( document ).ready(function() {
	console.log('hi');
	var top = $('#day-2').position().top-100;
	console.log($('#day-2').position().top);
	$(window).scroll(function() {
		var scrollTop = $(window).scrollTop();
		if(scrollTop >=top){
			console.log("GREATER");
			$("#day-tracker").text('DAY 002');
		}else{			
			$("#day-tracker").text('DAY 001');
		}

		console.log(scrollTop);
	});
});