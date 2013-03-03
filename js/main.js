var weatherbacon = function(){
	var weather;
	$(document).ready(function($) {

		weather = new wunderground('160caaa27c885952', 'metric');

		weather.updateCurrent(function(current){

			var weather_template = ich.weather({
				"feelslike": current.feelslike,
				"english": current.english,
				"forecast": [
					{
						index: 1,
						letter: 'M',
						high: '36'
					},
					{
						index: 1,
						letter: 'M',
						high: '36'
					}
				],
				"unit": weather.unit.code.toUpperCase()
			});

			$("#container").html(weather_template);

			/* prevent "0" being on the screen while we wait for a new value */
			document.getElementById("temp").style.visibility='visible';

			var tempEffect = new numfader(document.getElementById("temp"));
			var interval = 10;
			if(Math.abs(parseInt(current.feelslike,10)) < 10) {
				interval = 100;
			}
			tempEffect.animateText(0, parseInt(current.feelslike,10), interval, function(){
				$(tempEffect.el).addClass('animated bounceIn');
			});


		});

		/*weather.updateForecast(function(forecast){

			var weather_template = ich.weather({

			});

			$("#forecast").html(weather_template);
			
		});*/

	});
};
var app = new weatherbacon();