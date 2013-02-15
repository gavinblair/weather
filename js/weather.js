function weather(api_key){
	//initialize

	weather.prototype.get_current = function get_current(){
		$.ajax({
			url : "http://api.wunderground.com/api/160caaa27c885952/geolookup/conditions/q/zmw:00000.1.71623.json",

			dataType : "jsonp",
			success : function(parsed_json) {
				current_weather = {};
				current_weather.celcius = {};
				current_weather.farenheit = {};
				current_weather.celcius.feelslike = parsed_json.current_observation.feelslike_c;
				current_weather.celcius.temp = parsed_json.current_observation.temp_c;
				current_weather.farenheit.feelslike = parsed_json.current_observation.feelslike_f;
				current_weather.farenheit.temp = parsed_json.current_observation.temp_f;
				current_weather.weather = parsed_json.current_observation.weather;
				current_weather.wind = parsed_json.current_observation.wind_string;
				current_weather.updated = parsed_json.current_observation.observation_time;

				console.log(current_weather);

			}
		});
	}

	/*weather.prototype.get_forecast = function get_forecast(){

		$.ajax({
			url : "http://api.wunderground.com/api/160caaa27c885952/forecast/q/zmw:00000.1.71623.json",

			dataType : "jsonp",
			success : function(parsed_json) {
				console.log(parsed_json.forecast);
			}
		}); 

		$.ajax({
			url : "http://api.wunderground.com/api/160caaa27c885952/forecast10day/q/zmw:00000.1.71623.json",

			dataType : "jsonp",
			success : function(parsed_json) {
				console.log(parsed_json.forecast);
			}
		});

	}*/

}