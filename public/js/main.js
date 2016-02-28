$( window ).load(function() {
	var numDays = 12;
	var positions = [];
	var scrollTop = $(window).scrollTop();
	var cities = ["NEW YORK CITY","STRASBOURG, FRANCE","DOWNTOWN LOS ANGELES",
	"NEW YORK CITY","SEATTLE, WASHINGTON","SEATTLE, WASHINGTON", "DOWNTOWN SEATTLE", 
	"GRANADA, SPAIN", "GRANADA, SPAIN", "GRANADA, SPAIN", "STRASBOURG, FRANCE",
	"STRASBOURG, FRANCE"
	];
	
	for(var x = numDays; x>0;x--){
		var top = $('#day-'+x).position().top-100;
		changeDays(scrollTop,top,x);
		changeCity(scrollTop,top,x);
		positions.push(top);
	}

	$(window).scroll(function() {
		scrollTop = $(window).scrollTop();
		$.each(positions, function( index, value ) {
			changeDays(scrollTop,value,numDays-index);
			changeCity(scrollTop,value,numDays-index-1);
		});
	});
	function changeDays(scrollTop,value,index){		
		if (scrollTop>=value){
				day = pad((index), 3 );
				$("#day-tracker").text('DAY '+day);
		}
	};
	function changeCity(scrollTop,value,index){		
		if (scrollTop>=value){
				city = cities[index];
				$("#city-tracker").text(city);
		}
	};
	function pad (str, max) {
		str = str.toString();
		return str.length < max ? pad("0" + str, max) : str;
	}
});
