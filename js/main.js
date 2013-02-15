$(document).ready(function($) {

	var w = new weather('api_key');

	eat_me = w.get_current();
	console.log(eat_me);
	eat_me = eat_me.weather;

	$('div').text(eat_me);




});