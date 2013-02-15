$(document).ready(function($) {

	var w = new weather('160caaa27c885952');
	w.get_current();
	console.log(w);
	$("div").text(w.i);

	/*eat_me = w.get_current();
	console.log(eat_me);
	eat_me = eat_me.weather;*/

	//$('div').text(eat_me);



});
