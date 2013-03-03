var weather;
$(document).ready(function($) {

	/* prevent "0" being on the screen while we wait for a new value */
	document.getElementById("temp").style.visibility = 'visible';
	
	var temp = new numfader(document.getElementById("temp"));
	temp.animateText(0, 34, 10, function(){
		$(temp.el).addClass('animated bounceIn');
	});

	/*
	
	weather = new wunderground('160caaa27c885952', 'metric');

	weather.updateCurrent(function(current){

		var weather_template = ich.weather({
			"feelslike": current.feelslike,
			"english": current.english,
			"unit": weather.unit.code.toUpperCase()
		});
		$("#current").html(weather_template);


		
	});

	weather.updateForecast(function(forecast){

		var weather_template = ich.weather({
			
		});

		$("#forecast").html(weather_template);
		
	});
	*/
	

});
