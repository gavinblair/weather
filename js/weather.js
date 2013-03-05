var wunderground = function(apiKey, system) {
	//initialize
	wunderground.prototype.unit = {
		code:	'c',
		name: 'celsius'
	};
	if(system === 'imperial') {
		wunderground.prototype.unit = {
			code: 'f',
			name: 'fahrenheit'
		};
	}
	wunderground.prototype.weather = '';
	wunderground.prototype.location = '';
	wunderground.prototype.updateCurrent = function(callback) {
		return $.ajax({
			url : 'http://api.wunderground.com/api/'+apiKey+'/geolookup/conditions/q/zmw:00000.1.71623.json',

			dataType : 'jsonp',
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
	};

	wunderground.prototype.updateForecast = function(callback){
		return $.ajax({
			url : 'http://api.wunderground.com/api/'+apiKey+'/forecast10day/q/zmw:00000.1.71623.json',
			dataType : 'jsonp',
			success : function(data) {

				var num_days = data.forecast.simpleforecast.forecastday.length;
				wunderground.prototype.forecast = [];
				 
				for(var i = 0; i<num_days; i++){
					wunderground.prototype.forecast.push({
						title: data.forecast.txt_forecast.forecastday[i].title,
						english: data.forecast.simpleforecast.forecastday[i].conditions,
						low: data.forecast.simpleforecast.forecastday[i].low[wunderground.prototype.unit.name],
						high: data.forecast.simpleforecast.forecastday[i].high[wunderground.prototype.unit.name]
					});
				}
				
				if(callback){
					callback(wunderground.prototype.forecast);
				}
			}
		});
	};


/*
		$.ajax({
			url : 'http://api.wunderground.com/api/160caaa27c885952/forecast10day/q/zmw:00000.1.71623.json',

			dataType : 'jsonp',
			success : function(parsed_json) {
				console.log(parsed_json.forecast);
			}
		});

	}*/

};