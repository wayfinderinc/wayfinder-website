// Get DOM Elems
// ============================
var openBtn = document.getElementById('openMenu'),
	 closeBtn = document.getElementById('closeMenu');

// ImSoLazy add / remove class js helpers
// ============================
function addClass(selector, myClass) {
	 // get all elements that match our selector
	 elements = document.querySelectorAll(selector);

	 // add class to all chosen elements
	 for (var i = 0; i < elements.length; i++) {
		  elements[i].classList.add(myClass);
	 }
}
function removeClass(selector, myClass) {
	 // get all elements that match our selector
	 elements = document.querySelectorAll(selector);

	 // remove class from all chosen elements
	 for (var i = 0; i < elements.length; i++) {
		  elements[i].classList.remove(myClass);
	 }
}

openBtn.addEventListener("click", function() {
	 addClass('.overlay-main', 'open');
	 addClass('.footer-main', 'open');
	 addClass('#logo', 'open');
	//  removeClass('.overlay-main', 'close');
}, false);

closeBtn.addEventListener("click", function() {
	 removeClass('.overlay-main', 'open');
	 removeClass('.footer-main', 'open');
	 removeClass('#logo', 'open');
	//   removeClass('.overlay-main', 'open');
}, false);


// Logo intro animations
// ============================
	// Time var
	var time = 0.25;

	// Setting up init values of el's
	TweenMax.set('#logo, .services-area span, .services-area b', {opacity: 0});
	TweenMax.set('.vertSticks',{scaleY: 0, transformOrigin:'0% 50%'});
	TweenMax.set('.vertTickLeft', {scaleX: 0, transformOrigin:'0% 0%'});
	TweenMax.set('.vertTickMid', {scaleX: 0, transformOrigin:'50% 0%'});
	TweenMax.set('.vertTickRight', {scaleX: 0, transformOrigin:'100% 0%'});
	TweenMax.set('.services-area b', {scaleX: 0.75, scaleY: 0});
	TweenMax.set('.footer-main', {opacity: 0, y: '+=100px'});
	TweenMax.set('#gfx_left', {x: '-=100px'});
	TweenMax.set('#gfx_right', {y: '-=100px'});
	TweenMax.set('#gfx_right rect', {opacity: '0.4'});
	TweenMax.set('.slide-img img', {opacity: 0, scale: 0.97});
	// TweenMax.set('#gridWrap svg g rect', {});
	// TweenMax.set('#gridWrap', {opacity: 0, scale: 0.97});
	// TweenMax.set('#slide-heading-01', {opacity: 0});

	//§ Initial tl animations
	var init_TL = new TimelineMax();

	init_TL
		.add(animateHeader, 'start')
		.add(animateFooter, 'start')
		.add(animateGFX, 'start')
		.add(animateGridVert, 'ticks+=' + time)
		.add(animateTickLeft, 'ticks+=' + time * 3.5)
		.add(animateTickMid, 'ticks+=' + time * 3.5)
		.add(animateTickRight, 'ticks=+' + time * 3.5);

	// logo fade in
	function animateHeader() {
		var t1 = new TimelineMax();
		t1
		.to('#logo', time, {opacity: 1}, time)
		.staggerFrom('#mainNav li a', time, {opacity: 0, x: '+=50', ease: Back.easeOut.config(1.5)}, time / 2);
		return t1;
	}

	function animateFooter() {
		var t1 = new TimelineMax();
		t1
		.to('.footer-main', time * 2, {opacity: 1, y: 0, ease: Power1.easeOut});
		return t1;
	}

	function animateGFX() {
		var t1 = new TimelineMax();
		t1
		.to('.slide-img img', time, {opacity: 1, scale: 1, transformOrigin:'35% 35%', ease: Power1.easeOut}, 0)
		.staggerFrom('#gfx_right rect', time * 2 , {scaleY:0, transformOrigin:'center top', ease: Power1.easeOut}, 0)
		.to('#gfx_left', time, { x: 0, ease: Power1.easeOut}, 0)
		.to('#gfx_left rect', time, { opacity: 0.4, ease: Power1.easeOut}, 0)
		.to('#gfx_right', time * 2, { y:0, ease: Power1.easeOut}, 0);
		return t1;
	}

	function animateGridVert() {
		var t1 = new TimelineMax();
		t1.staggerTo('.vertSticks', time * 4, {scaleY: 1, opacity: 0.4, transformOrigin:'0% 50%', ease: Back.easeOut.config(1.5)});
		return t1;
	}

	function animateTickLeft() {
		var t1 = new TimelineMax();
		t1.staggerTo('.vertTickLeft', time, {scaleX: 1, opacity: 0.4, transformOrigin:'0% 0%', ease: Back.easeOut.config(1.5)});
		return t1;
	}

	function animateTickMid() {
		var t1 = new TimelineMax();
		t1.staggerTo('.vertTickMid', time, {scaleX: 1, opacity: 0.4, transformOrigin:'50% 0%', ease: Back.easeOut.config(1.5)});
		return t1;
	}
	// ============
	function animateText() {
		var split = new SplitText('#slide-heading-01', {type:'words', position:'relative'});
		var t1 = new TimelineMax();
		t1.staggerFrom(split.words, 1, {y:100, autoAlpha:0, opacity: 0, ease: Back.easeOut.config(1.5), onComplete:function()
			{
				// split.revert();
				// t1.set("#slide-heading-01", {clearProps:"height"});
			}
		}, 0.1);
		return t1;
	}

	// this is not working
	function animateTickRight() {
		var t1 = new TimelineMax();
		t1.staggerTo('.vertTickRight', time, {scaleX: 1, opacity: 0.4, transformOrigin:'100% 0%', ease: Back.easeOut.config(1.5)});
		return t1;
	}

	TweenMax.set(['#gridWrap rect#right_gfx_01'], {opacity:'0.75'});
