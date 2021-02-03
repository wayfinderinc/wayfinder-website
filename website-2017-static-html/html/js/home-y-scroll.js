
//
//
var time = .25;

var split0 = new SplitText('#glide-heading-01', {type:'words', position:'relative'}),
	 split = new SplitText('.quote-text', {type:'lines', position: 'relative', linesClass: 'line++'}),
	 split2 = new SplitText('.quote-author', {type:'words', position: 'relative'}),
	 split3 = new SplitText('.ideas_msg', {type:'lines', position: 'relative', linesClass: 'line++' });

$(document).ready(function() {
	window.onload = function() {

		//References to DOM elements
		var $window = $(window),
				$document = $(document),
				$activeSlide = $(".active"),
				$allSlides = $(".slide"),
				$slideNavPrev = $(".slideNavPrev"),
				$slideNavNext = $(".slideNavNext"),
				$slideNavPrevA = $(".slideNavPrev a"),
				$slideNavNextA = $(".slideNavNext a"),
				$slidesContainer = $(".slides-container"),
				$currentSlide = $allSlides.first(),
				$navButtons = $(".scroll-wrap a").filter("[href^=#]");

				// setting index val for timelines
				var currentIndex = 0;

				//Animating flag - is our app animating
				var isAnimating = false;

				//The height of the window
				var pageHeight = $window.innerHeight();

		     /*
   	*   Adding event listeners
   	* */

		var onMouseWheelSlide = _.throttle(function(e){
			e.preventDefault();
			if (e.originalEvent.wheelDelta > 0 || e.originalEvent.detail < 0){
				// scroll up
				console.log('UP', e.originalEvent.wheelDelta);
				if(e.originalEvent.wheelDelta > 100){
					var slideOut = $('.slide.active'),
						slideIn = $('.slide.active').prev('.slide');

					goToPrevSlide(slideOut, slideIn);
				}
			}else{
				// scroll down
				console.log('DOWN', e.originalEvent.wheelDelta);
				if(e.originalEvent.wheelDelta < -100){
					var slideOut = $('.slide.active'),
						slideIn = $('.slide.active').next('.slide');

					goToNextSlide(slideOut, slideIn);
				}
			}
		},300); //<- how often the slides can change from the mousewheel event
		function onMouseWheel(e){
			e.preventDefault();
			onMouseWheelSlide(e);
		}
     // $window.on("resize", onResize).resize();
     $window.on("mousewheel DOMMouseScroll", onMouseWheel);
     // $document.on("keydown", onKeyDown);
     $navButtons.on("click", onNavButtonClick);
     // $slideNavPrev.on("click", goToPrevSlide);
     // $slideNavNext.on("click", goToNextSlide);

		//Key codes for up and down arrows on keyboard. We'll be using this to navigate change slides using the keyboard
		// var keyCodes = {
		// 	UP: 38,
		// 	DOWN: 40
		// };

		// TweenLite.to('.glide-img img', time, {opacity: 1, scale: 1, transformOrigin:'35% 35%', ease: Power1.easeOut}, 0);

		TweenMax.set(['#section2', '#section3', '#section4', '#section5', '#section6', '#section7'], {display: 'flex', position: 'absolute', top: '0', width: '100%', height: '100%', opacity: '0'});


		// Scene in timelines
		// =====================
		var sceneInTL1 = new TimelineMax( {paused: true} )
			// .to('#section1', time, {opacity: 1}, 0.01)
			.staggerFrom(split0.words, time * 2, {y:'+=100', autoAlpha:0, opacity: 0, ease: Back.easeOut.config(1.5)}, 0.1)
			.staggerTo('.services-area span', time * 2, {opacity: 1, ease: Power1.easeOut}, time / 4)
			.staggerTo('.services-area b', time * 2, {opacity: 1, scaleY:1, transformOrigin: 'center center', ease: Power1.easeOut});

		var sceneInTL2 = new TimelineMax( {paused: true} )
			.set('.services .underline', {scaleX: 0, transformOrigin:'0% 50%'}, 0)
			.to('#section2', time, {opacity: 1}, 0.01)
			.to('.services .bgImg', time * 1.25, {opacity: 1, transformOrigin:'35% 35%', ease: Power1.easeOut}, 0.025)
			.to('.services h2', time * 1.25, {opacity: 1, y: 0 , ease: Power1.easeOut}, 0.05)
			.to('.services .underline', time * 1.5, {scaleX: 1, ease: Power1.easeOut}, 0.075)
			.staggerFrom(".module__services", time * 2.5, {scale:0.85, y: '+=50px', autoAlpha: 0, delay:0.5, ease: Elastic.easeOut.config(1, 0.4), force3D:true}, 0.085);


		var sceneInTL3 = new TimelineMax({paused: true})
			.to('#section3', time, {opacity: 1}, 0)
			.set('.quote-image', {opacity: 1}, 0)
			.to('.quote-image-mask', time, { ease: Back.easeOut.config(1.7), boxShadow: 'inset 0 0 0 15px #ffea00', force3D:true})
			.staggerFrom(split.lines, time * 1.75, {y:'+=110', autoAlpha: 0, ease: Back.easeOut.config(1.5)}, 0.1, 0)
			.staggerFrom(split2.words, time * 1.75, {autoAlpha: 0, x: 100, ease: Elastic.easeOut.config(1, 0.4)}, 0.1, '+=0.25');

		var sceneInTL4 = new TimelineMax({paused: true})
		   .to('#section4', time, {opacity: 1}, 0)

		var sceneInTL5 = new TimelineMax({paused: true})
		.to('#section5', time, {opacity: 1}, 0)
		.to(['#section5 .bgImg', '#section5 .container-fluid'], time, {opacity: 1});

		var sceneInTL6 = new TimelineMax({paused: true})
			.set('.header-message .underline', {scaleX: 0}, 0)
			.to('#section6', time, {opacity: 1}, 0.01)
			.staggerFrom('.idea_image, .ideas_category, .ideas_titles', time, {y:'+=25', autoAlpha: 0, ease: Power1.easeOut}, 0.1)
			.from('.ideas_header', time, {y: '+=100', autoAlpha: 0, ease: Back.easeOut.config(1.7)})
			.staggerFrom(split3.lines, time, {y: '+=100', autoAlpha: 0, ease: Back.easeOut.config(1.5)}, 0.1)
			.to('.header-message .underline', time * 2, {transformOrigin: '0% 50%', scaleX: 1, autoAlpha: 1, ease: Power1.easeOut})
			.staggerFrom('.grid .grid-item', time, {y: '+=50', autoAlpha: 0, ease: Back.easeOut.config(1.5)}, 0.1);

		var sceneInTL7 = new TimelineMax({paused: true});
			// .to('#slide-7 h1', time * 8.75, { autoAlpha: '1', ease: Back.easeOut.config(1.9) });

		var sceneInTLs = [sceneInTL1, sceneInTL2, sceneInTL3, sceneInTL4, sceneInTL5, sceneInTL6, sceneInTL7];


		// Scene out timelines
		// =====================
		var sceneOutTL1 = new TimelineMax( {paused: true} )
			.to('#section1', time / 2, {opacity: 0});
			// .to('#slide-1 h1', time * 8.75, { autoAlpha: '1', ease: Back.easeOut.config(1.9) })

		var sceneOutTL2 = new TimelineMax( {paused: true} )
		 	.to('#section2', time / 2, {opacity: 0});

		var sceneOutTL3 = new TimelineMax({paused: true})
			.to('#section3', time / 2, {opacity: 0});

		var sceneOutTL4 = new TimelineMax({paused: true})
			.to('#section4', time / 2, {opacity: 0});

		var sceneOutTL5 = new TimelineMax({paused: true})
			.to('#section5', time / 2, {opacity: 0});

		var sceneOutTL6 = new TimelineMax({paused: true})
			.to('#section6', time / 2, {opacity: 0});

		var sceneOutTL7 = new TimelineMax({paused: true})
			.to('#section7', time / 2, {opacity: 0});

		var sceneOutTLs = [sceneOutTL1, sceneOutTL2, sceneOutTL3, sceneOutTL4, sceneOutTL5, sceneOutTL6, sceneOutTL7];


		// Slide In Timelines
		// ===================
		var slideInTL1 = new TimelineMax({ paused: true })
			.staggerFrom(split0.words, time * 2, {y:'+=100', autoAlpha:0, opacity: 0, ease: Back.easeOut.config(1.5)}, 0.1)
			.staggerTo('.services-area span', time * 2, {opacity: 1, ease: Power1.easeOut}, time / 4)
			.staggerTo('.services-area b', time * 2, {opacity: 1, scaleY:1, transformOrigin: 'center center', ease: Power1.easeOut});

		var slideInTL2 = new TimelineMax({ paused: true })
			.to(['#logo path', '.overlay-main nav ul li a', '.social path', '.copyright small', '#gridWrap rect'], time * 1.75, {opacity:'1', color: '#fff', fill: '#fff'}, 0)
			.to(['#gridWrap rect'], time * 1.75, {opacity:'0.65', color: '#fff', fill: '#fff'}, 0)
			.to(['#gridWrap rect#right_gfx_02'], time, {opacity:'1'}, 0)
			.to('#slide-2 #transition_02', time * 1.75, { morphSVG: 'M0,274.9l1440-260v436H0V274.9z', ease: Back.easeOut.config(1.9) }, 0)
			.to('#slide-2 #transition_02', time * 1.5, { morphSVG: 'M0-5.1l1440,0v456H0V-5.1z', ease: Back.easeOut.config(1.2)});

		var slideInTL3 = new TimelineMax({ paused: true })
			.to(['#logo path', '.overlay-main nav ul li a', '.social path', '.copyright small', '#gridWrap rect'], time * 1.75, {opacity:'1', color: '#444', fill: '#444'}, 0)
			.to(['#gridWrap rect'], time * 1.75, {opacity:'0.4', color: '#444', fill: '#444'}, 0)
			.to(['#gridWrap rect#right_gfx_03'], time, {opacity:'1'}, 0)
			.to('#slide-3 #transition_03', time * 1.75, { morphSVG: 'M0,274.9l1440-260v436H0V274.9z', ease: Back.easeOut.config(1.9) }, 0)
			.to('#slide-3 #transition_03', time * 1.5, { morphSVG: 'M0-5.1l1440,0v456H0V-5.1z', ease: Back.easeOut.config(1.2)});

		var slideInTL4 = new TimelineMax({ paused: true })
			.to(['#gridWrap rect#right_gfx_03'], time, {opacity:'0.4'}, 0)
			.to(['#gridWrap rect#right_gfx_04'], time, {opacity:'1'}, 0)
			.to('#slide-4 #transition_04', time * 1.75, { morphSVG: 'M0,274.9l1440-260v436H0V274.9z', ease: Back.easeOut.config(1.9) }, 0)
			.to('#slide-4 #transition_04', time * 1.5, { morphSVG: 'M0-5.1l1440,0v456H0V-5.1z', ease: Back.easeOut.config(1.2)});

		var slideInTL5 = new TimelineMax({ paused: true })
			.to(['#logo path', '.overlay-main nav ul li a', '.social path', '.copyright small', '#gridWrap rect'], time * 1.75, {opacity:'1', color: '#fff', fill: '#fff'}, 0)
			.to(['#gridWrap rect'], time * 1.75, {opacity:'0.65', color: '#fff', fill: '#fff'}, 0)
			.to(['#gridWrap rect#right_gfx_05'], time, {opacity:'1'}, 0)
			.to('#slide-5 #transition_05', time * 1.75, { morphSVG: 'M0,274.9l1440-260v436H0V274.9z', ease: Back.easeOut.config(1.9) }, 0)
			.to('#slide-5 #transition_05', time * 1.5, { morphSVG: 'M0-5.1l1440,0v456H0V-5.1z', ease: Back.easeOut.config(1.2)});

		var slideInTL6 = new TimelineMax({ paused: true })
			.to(['#gridWrap rect#right_gfx_05'], time, {opacity:'0.65'}, 0)
			.to(['#gridWrap rect#right_gfx_06'], time, {opacity:'1'}, 0)
			.to('#slide-6 #transition_06', time * 1.75, { morphSVG: 'M0,274.9l1440-260v436H0V274.9z', ease: Back.easeOut.config(1.9) }, 0)
			.to('#slide-6 #transition_06', time * 1.5, { morphSVG: 'M0-5.1l1440,0v456H0V-5.1z', ease: Back.easeOut.config(1.2)});

		var slideInTL7 = new TimelineMax({ paused: true })
			.set('#slide-7.slide', { height: '38vh', top: 'inherit', bottom: '-35vh', autoAlpha: '1'}, 0)
			.set('#section7', {autoAlpha: 1}, 0)
			.to(['#logo path', '.overlay-main nav ul li a', '.social path', '.copyright small'], time * 1.75, {opacity:'1', color: '#444', fill: '#444'}, 0.001)
			.to(['#gridWrap rect'], time * 1.75, {opacity:'0.4', color: '#444', fill: '#444'}, 0.001)
			.to('#slide-6.slide', time * 1.75, { height: '65vh', ease: Back.easeOut.config(1.9)}, 0)
			.to('#slide-7.slide', time * 6, { bottom: '-3.5vh', ease: Elastic.easeOut.config(0.75, 0.5)}, 0);

		var slideInTLs = [slideInTL1, slideInTL2, slideInTL3, slideInTL4, slideInTL5, slideInTL6, slideInTL7];

		// Slide Out Timelines
		// ===================
		var slideOutTL1 = new TimelineMax({ paused: true })
			.to(['#logo path', '.overlay-main nav ul li a', '.social path', '.copyright small', '#gridWrap rect'], time * 1.75, {opacity:'1', color: '#444', fill: '#444'}, 0)
			.to(['#gridWrap rect'], time * 1.25, {opacity:'0.4', color: '#444', fill: '#444'}, 0)

		var slideOutTL2 = new TimelineMax({ paused: true })
			.to(['#logo path', '.overlay-main nav ul li a', '.social path', '.copyright small', '#gridWrap rect'], time * 1.75, {opacity:'1', color: '#444', fill: '#444'}, 0)
			.to(['#gridWrap rect'], time * 1.25, {opacity:'0.4', color: '#444', fill: '#444'}, 0)
			.to(['#gridWrap rect#right_gfx_02'], time, {opacity:'0.4'}, 0)
			.to(['#gridWrap rect#right_gfx_01'], time, {opacity:'1'}, 0)
			.to('#slide-2 #transition_02', time * 1.25, { morphSVG: 'M0,184.9l1440-170v436H0V184.9z', ease: Back.easeOut.config(1.2) }, 0);

		var slideOutTL3 = new TimelineMax({ paused: true })
			.to(['#logo path', '.overlay-main nav ul li a', '.social path', '.copyright small', '#gridWrap rect'], time * 1.75, {opacity:'1', color: '#fff', fill: '#fff'}, 0)
			.to(['#gridWrap rect'], time * 1.25, {opacity:'0.65', color: '#fff', fill: '#fff'}, 0)
			.to(['#gridWrap rect#right_gfx_03'], time, {opacity:'0.65'}, 0)
			.to(['#gridWrap rect#right_gfx_02'], time, {opacity:'1'}, 0)
			.to('#slide-3 #transition_03', time * 1.25, { morphSVG: 'M0,184.9l1440-170v436H0V184.9z', ease: Back.easeOut.config(1.2) }, 0);

		var slideOutTL4 = new TimelineMax({ paused: true })
			.to(['#logo path', '.overlay-main nav ul li a', '.social path', '.copyright small', '#gridWrap rect'], time * 1.75, {opacity:'1', color: '#444', fill: '#444'}, 0)
			.to(['#gridWrap rect'], time * 1.25, {opacity:'0.4', color: '#444', fill: '#444'}, 0)
			.to(['#gridWrap rect#right_gfx_04'], time, {opacity:'0.4'}, 0)
			.to(['#gridWrap rect#right_gfx_03'], time, {opacity:'1'}, 0)
			.to('#slide-4 #transition_04', time * 1.25, { morphSVG: 'M0,184.9l1440-170v436H0V184.9z', ease: Back.easeOut.config(1.2) }, 0);

		var slideOutTL5 = new TimelineMax({ paused: true })
			.to(['#logo path', '.overlay-main nav ul li a', '.social path', '.copyright small', '#gridWrap rect'], time * 1.75, {opacity:'1', color: '#444', fill: '#444'}, 0)
			.to(['#gridWrap rect'], time * 1.25, {opacity:'0.4', color: '#444', fill: '#444'}, 0)
			.to(['#gridWrap rect#right_gfx_05'], time, {opacity:'0.4'}, 0)
			.to(['#gridWrap rect#right_gfx_04'], time, {opacity:'1'}, 0)
			.to('#slide-5 #transition_05', time * 1.25, { morphSVG: 'M0,184.9l1440-170v436H0V184.9z', ease: Back.easeOut.config(1.2) }, 0);

		var slideOutTL6 = new TimelineMax({ paused: true })
			.to(['#gridWrap rect#right_gfx_06'], time, {opacity:'0.65'}, 0)
			.to(['#gridWrap rect#right_gfx_05'], time, {opacity:'1'}, 0)
			.to('#slide-6 #transition_06', time * 1.25, { morphSVG: 'M0,184.9l1440-170v436H0V184.9z', ease: Back.easeOut.config(1.2) }, 0);

		var slideOutTL7 = new TimelineMax({ paused: true })
			.to(['#logo path', '.overlay-main nav ul li a', '.social path', '.copyright small', '#gridWrap rect'], time * 1.75, {opacity:'1', color: '#fff', fill: '#fff'}, 0)
			.to(['#gridWrap rect'], time * 1.75, {opacity:'0.65', color: '#fff', fill: '#fff'}, 0)
			.to(['#gridWrap rect#right_gfx_06'], time, {opacity:'1'}, 0)
			.to('#slide-7.slide', time * 1.75, { bottom: '-35vh', ease: Back.easeOut.config(1.9)}, 0)
			.to('#slide-6.slide', time * 1.75, { height: '100vh', ease: Back.easeOut.config(1.2) }, 0);


		var  slideOutTLs = [slideOutTL1, slideOutTL2, slideOutTL3, slideOutTL4, slideOutTL5, slideOutTL6, slideOutTL7];

		// Init function that run on page load
		function init() {
			// Hide all slides apart from the active one
			TweenMax.set($allSlides.not($activeSlide), { autoAlpha: 0 });
			// Disable arrow down on page load
			TweenMax.set($slideNavPrev, { autoAlpha: 0.2 });
		}

		// Run Init function
		init();
		sceneInTL1.play();

		/*
		 *   If there's a previous slide, slide to it
		 * */
		function goToPrevSlide(slideOut, slideIn) {
			var tl = new TimelineMax(),
					index = slideIn.next().index(),
					size = $('.slide').length;

			currentIndex = index;

			console.log('gotoPrevSlide currentIndex =' + +currentIndex);

			if (slideIn.length !== 0) {
				tl
					// move the new slide (the one about to enter viewport) out of the viewport (to the top)
					.set(slideIn, { autoAlpha: 1, className: '+=active' })
					// remove class active from the currently active slide (slideOut)
					.set(slideOut, { className: '-=active' })
					// animate active slide down (out of the viewport)
					.to(slideOut, time * 3, { y: '100%', ease: Power3.easeInOut, onStart: onSlideStartedReverse, onStartScope: this, onComplete: sceneOut, onCompleteScope: this }, 0)
					// animate new slide down (from out of the viewport)
					// .to(slideIn, 0.5, {y: '+=100%', ease:Power3.easeInOut}, '-=0.5')
			}
			// Fade in arrow up
			TweenMax.set($slideNavNext, { autoAlpha: 1 });

			// Fade out arrow down on first slide
			if (index === 1) {
				TweenMax.to($slideNavPrev, 0.3, { autoAlpha: 0.2, ease: Linear.easeNone });
			}
		}

		// Navigation click - go to the Previous Slide
		$slideNavPrev.click(function(e) {
			e.preventDefault();

			var slideOut = $('.slide.active'),
					slideIn = $('.slide.active').prev('.slide');

			goToPrevSlide(slideOut, slideIn);

		});

		/*
		 *   If there's a next slide, slide to it
		 * */
		function goToNextSlide(slideOut, slideIn) {
			var tl = new TimelineMax(),
					index = slideIn.index(),
					size = $('.slide').length;

			currentIndex = index;

			console.log('gotoNextSlide index =' + +currentIndex);

			if (slideIn.length !== 0) {
				tl
					.set(slideIn, { y: '100%', autoAlpha: 1, className: '+=active' })
					.set(slideOut, { className: '-=active', position: 'fixed' })
					// .to(slideOut, 0.5, {y: '-100%', ease:Power3.easeInOut}, 0)
					.to(slideIn, time * 3, { y: '-=100%', ease: Power3.easeInOut, onStart: onSlideStarted, onStartScope: this, onComplete: sceneIn, onCompleteScope: this}, 0)

				// Fade in arrow down
				TweenMax.set($slideNavPrev, { autoAlpha: 1 });

				// Fade out arrow up on last slide
				if (index === size) {
					TweenMax.to($slideNavNext, 0.3, { autoAlpha: 0.2, ease: Linear.easeNone});
				}

			}
		}

		// Navigation click - go to the Next Slide
		$slideNavNext.click(function(e) {
			e.preventDefault();

			var slideOut = $('.slide.active'),
					slideIn = $('.slide.active').next('.slide');

			goToNextSlide(slideOut, slideIn);
		});


		// ======

     function onNavButtonClick(e) {
			 e.preventDefault();
       //The clicked button
        var $button = $(this),
				nextID = $button.data('index-number'),
				$slide = $($button.attr("href")),
				index = $slide.index(),
				slideOut = $('.slide.active'),
				currentID = slideOut.data('slide'),
				slideIn = $("[data-slide='" + nextID + "']");

			 currentIndex = index;

			 console.log('onNavButtonClick index =' + +currentIndex);

				if(+nextID > +currentID) {
					//goToNextSlide(slideOut, slideIn);
					(function(){
						var diff = +nextID - +currentID;
						function goToNextSlide(){
							$slideNavNext.trigger('click');
							if(--diff){
								setTimeout(goToNextSlide,100);
							}
						}
						goToNextSlide();
					})();

				} else {
					 //goToPrevSlide(slideOut, slideIn);
					(function(){
						var diff = +currentID - +nextID;
						function goToPrevSlide(){
							$slideNavPrev.trigger('click');
							if(--diff){
								setTimeout(goToPrevSlide,100);
							}
						}
						goToPrevSlide();
					})();
				}

     }

		// ========

		function onSlideStarted() {
			// Play the timeline for the current slide
			slideInTLs[currentIndex].restart();
		}

		function onSlideStartedReverse() {
			sceneOutTLs[currentIndex].restart();
			// Play the timeline for the current slide
			slideOutTLs[currentIndex].restart();

		}

		/*
		 *   Once the sliding is finished, we need to restore "isAnimating" flag.
		 *   You can also do other things in this function, such as changing page title
		 * */
		function sceneIn() {
			// Reverse the timeline for the previous slide
			sceneInTLs[currentIndex].restart();
		}

		function sceneOut() {
			// Reverse the timeline for the previous slide
			// sceneOutTLs[currentIndex].retstart();
		}

	}
});
