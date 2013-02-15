$(document).ready(function($) {
	$.ajax({
		url : "http://api.wunderground.com/api/160caaa27c885952/geolookup/conditions/q/zmw:00000.1.71623.json",

		dataType : "jsonp",
		success : function(parsed_json) {
			console.log(parsed_json.current_observation.weather);
		}
	});

	$.ajax({
		url : "http://api.wunderground.com/api/160caaa27c885952/forecast/q/zmw:00000.1.71623.json",

		dataType : "jsonp",
		success : function(parsed_json) {
			console.log(parsed_json);
		}
	}); 

	$.ajax({
		url : "http://api.wunderground.com/api/160caaa27c885952/forecast10day/q/zmw:00000.1.71623.json",

		dataType : "jsonp",
		success : function(parsed_json) {
			console.log(parsed_json);
		}
	});

});