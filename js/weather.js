var Wunderground = function(apiKey, system) {
	//initialize
	Wunderground.prototype.unit = {
		code:	'c',
		name: 'celsius'
	};
	if(system === 'imperial') {
		Wunderground.prototype.unit = {
			code: 'f',
			name: 'fahrenheit'
		};
	}
	Wunderground.prototype.weather = '';
	Wunderground.prototype.location = '';
	Wunderground.prototype.updateCurrent = function(callback) {
		var url = 'http://api.wunderground.com/api/'+apiKey+'/geolookup/conditions/q/zmw:00000.1.71623.json';
		var datatype = 'jsonp';

		if(apiKey == 'test'){
			url = 'zmw-00000.1.71623.json';
			datatype = 'json';
		}
		return $.ajax({
			url : url,
			dataType : datatype,
			success : function(data) {
				Wunderground.prototype.current = {
					feelslike: data.current_observation['feelslike_'+Wunderground.prototype.unit.code],
					temp: data.current_observation['temp_'+Wunderground.prototype.unit.code],
					english: data.current_observation.weather,
					wind: data.current_observation.wind_string,
					updated: data.current_observation.observation_time
				};

				if(callback){
					callback(Wunderground.prototype.current);
				}
			}
		});
	};

	Wunderground.prototype.updateForecast = function(callback){
		var url = 'http://api.wunderground.com/api/'+apiKey+'/forecast10day/q/zmw:00000.1.71623.json';
		var datatype = 'jsonp';

		if(apiKey == 'test'){
			url = 'zmw-00000.1.71623_forecast.json';
			datatype = 'json';
		}
		return $.ajax({
			url : url,
			dataType : datatype,
			success : function(data) {

				var num_days = data.forecast.simpleforecast.forecastday.length;
				Wunderground.prototype.forecast = [];

				for(var i = 0; i<num_days; i++){
					Wunderground.prototype.forecast.push({
						title: data.forecast.txt_forecast.forecastday[i].title,
						english: data.forecast.simpleforecast.forecastday[i].conditions,
						low: data.forecast.simpleforecast.forecastday[i].low[Wunderground.prototype.unit.name],
						high: data.forecast.simpleforecast.forecastday[i].high[Wunderground.prototype.unit.name]
					});
				}

				if(callback){
					callback(Wunderground.prototype.forecast);
				}
			}
		});
	};


/*
		$.ajax({
			url : 'http://api.Wunderground.com/api/160caaa27c885952/forecast10day/q/zmw:00000.1.71623.json',

			dataType : 'jsonp',
			success : function(parsed_json) {
				console.log(parsed_json.forecast);
			}
		});

	}*/

};