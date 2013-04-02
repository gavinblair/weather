/*
*
* Numfader
* by Gavin Blair
* http://github.com/gavinblair
*
* usage:
* var myfader = new Numfader(document.getElementById("mydiv"));
* myfader.animateText(0,10,1000); //count from 0 to 10, updating every second
* myfader.animateBackgroundColour({r: 255, g: 0, b: 0}, {r: 0, g: 255, b: 0}, 100); //animate the background color, faster
* 
 */

var Numfader = function(el){

	//initialize
	Numfader.prototype.el = el;

	Numfader.prototype.animateText = function(from,to,interval,callback) {
		if(interval === undefined) {
			interval = 100;
		}
		var i = from;
		var timer = setInterval(function(){
			i = _incrementNum(i,to);
			el.innerHTML = i;
			if(i === to) {
				clearInterval(timer);
				if(callback){
					callback(el);
				}
			}
		}, interval);
	};

	Numfader.prototype.animateBackgroundColour = function(fromRGB,toRGB,interval,callback){
		if(interval === undefined) {
			interval = 10;
		}
		var r = fromRGB.r;
		var g = fromRGB.g;
		var b = fromRGB.b;
		var timer = setInterval(function(){
			r = _incrementNum(r,toRGB.r);
			g = _incrementNum(g,toRGB.g);
			b = _incrementNum(b,toRGB.b);
			el.style.backgroundColor = 'rgb('+r+','+g+','+b+')';
			if(r === toRGB.r && g === toRGB.g && b === toRGB.b) {
				clearInterval(timer);
				if(callback){
					callback(el);
				}
			}
		}, interval);
	};

	function _incrementNum(from,to){
		var i = from;
		if(i < to) {
			i ++;
		} else if (i > to) {
			i --;
		}
		return i;
	}

};