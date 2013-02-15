$(document).ready(function($) {

	var w = new weather('160caaa27c885952');

	$("div").text(w.get_current());






});
