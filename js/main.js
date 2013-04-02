var weatherbacon = function(){
	var weather;

	this.clickDay = function(el, index){

		//Change the background colour of the current nav item
		$('nav a').css('background-color', $('body').css('backgroundColor'));
		$(el).css('background-color', function(){
			var rgb = $('body').css('backgroundColor').match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);

			for(var i = 1; i < rgb.length; i++){
				rgb[i] = parseInt(rgb[i]*0.85);
			}

			var newColor = 'rgb(' + rgb[1] + ',' + rgb[2] + ',' + rgb[3] + ')';

			return newColor; 
		});

		//switch to that day
		$('#bigIcon').hide().children('svg').remove();
		$(el).children('strong').children('svg').clone().appendTo('#bigIcon');
		$('#bigIcon').show();
	};

	$(document).ready(function($) {

		weather = new Wunderground('160caaa27c885952', 'metric');

		weather.updateCurrent(function(current){

			weather.updateForecast(function(forecast){
				var weather_template = ich.weather({ });
				$("#forecast").html(weather_template);
				var weather_template = ich.weather({
					"feelslike": current.feelslike,
					"english": current.english,
					"forecast": [
						{
							index: 1,
							letter: forecast[1].title.substring(0,1),
							high: forecast[1].high
						},
						{
							index: 3,
							letter: forecast[3].title.substring(0,1),
							high: forecast[3].high
						},
						{
							index: 5,
							letter: forecast[5].title.substring(0,1),
							high: forecast[5].high
						},
						{
							index: 7,
							letter: forecast[7].title.substring(0,1),
							high: forecast[7].high
						},
						{
							index: 9,
							letter: forecast[9].title.substring(0,1),
							high: forecast[9].high
						}
					],
					"unit": weather.unit.code.toUpperCase()
				});

				$("#container").html(weather_template);

				var icon = getIcon();
				$('#bigIcon').load(icon.url, function(){
					$('h1').toggle();
					$('p:hidden').html(icon.credit);
					$('p').toggle();
				});

				weather.current.feelslike;

				//is tomorrow day 0 or 1?
				//if(weather.forecast[index].english)
				var tomorrow = 0;

				$('strong.icon').each(function(index, value){
					var icon = getIcon(weather.forecast[index*2].high, weather.forecast[index*2].english);
					$(this).load(icon.url+'?1', function(){
						$(this).parent().children('strong').toggle();
					});
				});
					
				/* prevent "0" being on the screen while we wait for a new value */
				document.getElementById("temp").style.visibility='visible';

				var tempEffect = new numfader(document.getElementById("temp"));
				var interval = 10;
				/**///current.feelslike = 45;
				if(Math.abs(parseInt(current.feelslike,10)) < 10) {
					interval = 100;
				}
				tempEffect.animateText(0, parseInt(current.feelslike,10), interval, function(el){
					//console.log(el);
					$(el).addClass('animated bounceIn');
				});

				var bgEffect = new numfader($('body')[0]);
				var to = temp2RGB(parseInt(current.feelslike));
				var from = temp2RGB(0);

				bgEffect.animateBackgroundColour(from, to);
			}); //forecast callback
		}); //weather callback

	});

function getIcon(temperature, english) {
		var icon = {};
		var iconSet = '';
		var wetConditions = [
			'Chance of Flurries',
			'Chance of Rain',
			'Chance of Freezing Rain',
			'Chance of Sleet',
			'Chance of Snow',
			'Chance of Thunderstorms',
			'Chance of a Thunderstorm',
			'Flurries',
			'Freezing Rain',
			'Rain',
			'Sleet',
			'Thunderstorms',
			'Thunderstorm'
		];

		//hot or cold
		if(temperature > 0){
			iconSet = 'hot';
		}else{
			iconSet = 'cold';
		}

		//wet or dry
		if(wetConditions.indexOf(english) > -1){
			iconSet = iconSet+'wet';
		}else{
			iconSet = iconSet+'dry';
		}
		console.log(temperature)
		switch(iconSet){
			case 'hotdry':
				icon = [{
						credit: '<a href="http://thenounproject.com/noun/egg/#icon-No4122" target="_blank">Egg</a> designed by <a href="http://thenounproject.com/jacob" target="_blank">Jacob Halton</a> from The Noun Project',
						url: 'img/eggs.svg'
					}];
				break;
			case 'hotwet':
				icon = [{
						credit: '<a href="http://thenounproject.com/noun/umbrella/#icon-No795" target="_blank">Umbrella</a> designed by <a href="http://thenounproject.com/Kortschot" target="_blank">Paul te Kortschot</a> from The Noun Project',
						url: 'img/umbrella.svg'
					}];
				break;
			case 'colddry':
				icon = [{
						credit: '<a href="http://thenounproject.com/noun/mittens/#icon-No3812" target="_blank">Mittens</a> designed by <a href="http://thenounproject.com/darrin.higgins" target="_blank">Darrin Higgins</a> from The Noun Project',
						url: 'img/mittens.svg'
					}];
				break;
			//case 'coldwet':
			default:
				icon = [{
						credit: '<a href="http://thenounproject.com/noun/snow-globe/#icon-No8114" target="_blank">Snow Globe</a> designed by <a href="http://thenounproject.com/The Moza" target="_blank">Anna Weiss</a> from The Noun Project',
						url: 'img/snowglobe.svg'
					}];
		}

		//todo: more than one icon, choose it at random.
		//then, make sure you don't use the same one twice

 		return icon[0];
 	}

	function temp2RGB(temp){
		var hex;
		if(temp > 30) { temp = 30; }
		if(temp < -20) { temp = -20; }
		switch(temp){
			case 30:
				hex = '#ab0000';
				break;
			case 29:
				hex =	'#b00200';
				break;
			case 28:
				hex =	'#b60500';
				break;
			case 27:
				hex =	'#bd0800';
				break;
			case 26:
				hex =	'#c50b00';
				break;
			case 25:
				hex =	'#cd0f00';
				break;
			case 24:
				hex =	'#d71300';
				break;
			case 23:
				hex =	'#e01700';
				break;
			case 22:
				hex =	'#e91b00';
				break;
			case 21:
				hex =	'#ef1e00';
				break;
			case 20:
				hex =	'#f32200';
				break;
			case 19:
				hex =	'#ec3000';
				break;
			case 18:
				hex =	'#e84100';
				break;
			case 17:
				hex =	'#e75100';
				break;
			case 16:
				hex =	'#e95e00';
				break;
			case 15:
				hex =	'#ee6e00';
				break;
			case 14:
				hex =	'#f37f00';
				break;
			case 13:
				hex =	'#f99000';
				break;
			case 12:
				hex =	'#ffa300';
				break;
			case 11:
				hex =	'#ffaf00';
				break;
			case 10:
				hex =	'#ffb900';
				break;
			case 9:
				hex =	'#ffc200';
				break;
			case 8:
				hex =	'#ffcc00';
				break;
			case 7:
				hex =	'#ffd400';
				break;
			case 6:
				hex =	'#ffde00';
				break;
			case 5:
				hex =	'#ffe302';
				break;
			case 4:
				hex =	'#ffe807';
				break;
			case 3:
				hex =	'#ffeb0d';
				break;
			case 2:
				hex = '#eaeb25';
				break;
			case 1:
				hex =	'#c8e349';
				break;
			case 0:
				hex =	'#93d07f';
				break;
			case -1:
				hex =	'#5db8b6';
				break;
			case -2:
				hex =	'#33a5f3';
				break;
			case -3:
				hex =	'#40a9f1';
				break;
			case -4:
				hex =	'#51afef';
				break;
			case -5:
				hex =	'#62b4ed';
				break;
			case -6:
				hex =	'#73baeb';
				break;
			case -7:
				hex =	'#84c0e9';
				break;
			case -8:
				hex =	'#93c5e8';
				break;
			case -9:
				hex =	'#9fc9e6';
				break;
			case -10:
				hex =	'#a9cce5';
				break;
			case -11:
				hex =	'#ccd9e3';
				break;
			case -12:
				hex =	'#dce2e7';
				break;
			case -13:
				hex =	'#e7e9eb';
				break;
			case -14:
				hex =	'#efefee';
				break;
			case -15:
				hex =	'#f2f2f1';
				break;
			case -16:
				hex =	'#f6f6f6';
				break;
			case -17:
				hex =	'#f8f8f8';
				break;
			case -18:
				hex =	'#fafafa';
				break;
			case -19:
				hex =	'#fcfcfc';
				break;
			case -20:
				hex =	'#ffffff';
				break;
		}


		var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
		return result ? {
			r: parseInt(result[1], 16),
			g: parseInt(result[2], 16),
			b: parseInt(result[3], 16)
		} : null;
	}
};
var app = new weatherbacon();
