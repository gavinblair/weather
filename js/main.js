var weather;
$(document).ready(function($) {

	weather = new wunderground('160caaa27c885952', 'metric');

	weather.updateCurrent(function(current){

		var weather_template = ich.weather({
			"feelslike": current.feelslike,
			"english": current.english,
			"unit": weather.unit.code.toUpperCase()
		});
		$("#container").html(weather_template);


		
	});

});
