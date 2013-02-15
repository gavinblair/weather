$(document).ready(function($) {

	var w = new weather('160caaa27c885952');
var i = w.get_current();
	$("div").text(i);






});
