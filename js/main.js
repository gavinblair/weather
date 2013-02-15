$(document).ready(function($) {

	var w = new weather('160caaa27c885952');

	w.get_current(function(data){
		var weather_template = ich.weather({
			"feelslike": data.celcius.feelslike,
			"weather": data.weather
		});
		$("#container").html(weather_template);
	});

});
