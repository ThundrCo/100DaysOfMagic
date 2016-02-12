$( window ).load(function() {
	var numDays = 3;
	var positions = [];
	var scrollTop = $(window).scrollTop();
	for(var x = numDays; x>0;x--){
		var top = $('#day-'+x).position().top-100;
		changeDays(scrollTop,top,x);
		positions.push(top);
	}

	$(window).scroll(function() {
		scrollTop = $(window).scrollTop();
		$.each(positions, function( index, value ) {
			changeDays(scrollTop,value,numDays-index);
		});
	});
	function changeDays(scrollTop,value,index){		
		if (scrollTop>=value){
				day = pad((index), 3 );
				$("#day-tracker").text('DAY '+day);
		}
	};
	function pad (str, max) {
		str = str.toString();
		return str.length < max ? pad("0" + str, max) : str;
	}
});