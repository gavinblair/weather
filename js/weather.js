function wunderground(api_key, system){
	//initialize
	wunderground.prototype.unit = {
		code:	"c",
		name: "celsius"
	}
	if(system == "imperial") {
		wunderground.prototype.unit = {
			code: "f",
			name: "fahrenheit"
		}
	}
	wunderground.prototype.weather = "";
	wunderground.prototype.update_current = function(callback){
		return $.ajax({
			url : "http://api.wunderground.com/api/"+api_key+"/geolookup/conditions/q/zmw:00000.1.71623.json",

			dataType : "jsonp",
			success : function(data) {
				wunderground.prototype.current = {
					feelslike: data.current_observation['feelslike_'+wunderground.prototype.unit.code],
					temp: data.current_observation['temp_'+wunderground.prototype.unit.code],
					english: data.current_observation.weather,
					wind: data.current_observation.wind_string,
					updated: data.current_observation.observation_time
				};

				if(callback){
					callback(wunderground.prototype.current);
				}
			}
		});
	}

	wunderground.prototype.update_shortterm = function(callback){
		return $.ajax({
			url : "http://api.wunderground.com/api/"+api_key+"/forecast/q/zmw:00000.1.71623.json",

			dataType : "jsonp",
			success : function(data) { console.log(data);
				var num_days = data.forecast.simpleforecast.forecastday.length;
				wunderground.prototype.shortterm = [];
				for(var i = 0; i<num_days; i++){
					wunderground.prototype.shortterm.push({
						title: data.forecast.txt_forecast.forecastday[i].title,
						english: data.forecast.simpleforecast.forecastday[i].conditions,
						low: data.forecast.simpleforecast.forecastday[i].low[wunderground.prototype.unit.name],
						high: data.forecast.simpleforecast.forecastday[i].high[wunderground.prototype.unit.name],
						//verbose: data.forecast.txt_forecast.forecastday[i].
					});
				}

				if(callback){
					callback(wunderground.prototype.shortterm);
				}
			}
		});
	}

	wunderground.prototype.update_longterm = function(callback){
		return $.ajax({
			url : "http://api.wunderground.com/api/"+api_key+"/forecast10day/q/zmw:00000.1.71623.json",

			dataType : "jsonp",
			success : function(data) {
			/*
				var num_days = data.forecast.simpleforecast.forecastday.length;
				wunderground.prototype.shortterm = [];
				for(var i = 0; i<num_days; i++){
					wunderground.prototype.shortterm.push({
						title: data.forecast.txt_forecast.forecastday[i].title,
						english: data.forecast.simpleforecast.forecastday[i].conditions,
						low: data.forecast.simpleforecast.forecastday[i].low[wunderground.prototype.unit.name],
						high: data.forecast.simpleforecast.forecastday[i].high[wunderground.prototype.unit.name]
					});
				}*/

				if(callback){
					callback(wunderground.prototype.shortterm);
				}
			}
		});
	}


/*
		$.ajax({
			url : "http://api.wunderground.com/api/160caaa27c885952/forecast10day/q/zmw:00000.1.71623.json",

			dataType : "jsonp",
			success : function(parsed_json) {
				console.log(parsed_json.forecast);
			}
		});

	}*/

}
