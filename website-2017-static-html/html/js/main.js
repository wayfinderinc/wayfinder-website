
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
      var time = .25;

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
         .to('#gfx_left', time, { x: 0, opacity: 0.25, ease: Power1.easeOut}, 0)
         .to('#gfx_right', time * 2, { y:0, ease: Power1.easeOut}, 0);
         return t1;
      }

      function animateGridVert() {
         var t1 = new TimelineMax();
         t1.staggerTo('.vertSticks', time * 4, {scaleY: 1, opacity: 0.25, transformOrigin:'0% 50%', ease: Back.easeOut.config(1.5)});
         return t1;
      }

      function animateTickLeft() {
         var t1 = new TimelineMax();
         t1.staggerTo('.vertTickLeft', time, {scaleX: 1, opacity: 0.25, transformOrigin:'0% 0%', ease: Back.easeOut.config(1.5)});
         return t1;
      }

      function animateTickMid() {
         var t1 = new TimelineMax();
         t1.staggerTo('.vertTickMid', time, {scaleX: 1, opacity: 0.25, transformOrigin:'50% 0%', ease: Back.easeOut.config(1.5)});
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
         t1.staggerTo('.vertTickRight', time, {scaleX: 1, opacity: 0.25, transformOrigin:'100% 0%', ease: Back.easeOut.config(1.5)});
         return t1;
      }

      var split0 = new SplitText('#glide-heading-01', {type:'words', position:'relative'});
      var split = new SplitText('.quote-text', {type:'lines', position: 'relative', linesClass: 'line++'});
      var split2 = new SplitText('.quote-author', {type:'words', position: 'relative'});
      var split3 = new SplitText('.ideas_msg', {type:'lines', position: 'relative', linesClass: 'line++' })


$(document).ready(function(){
   window.onload = function() {

     //References to DOM elements
     var $window = $(window);
     var $document = $(document);
     //Only links that starts with #
     var $navButtons = $("#right_gfx a").filter("[href^=#]");
     var $navGoPrev = $(".go-prev");
     var $navGoNext = $(".go-next");
     var $slidesContainer = $(".slides-container");
     var $allSlides = $(".slide");
     var $currentSlide = $allSlides.first();
     var slideControl = $("#right_gfx a")

     //Animating flag - is our app animating
     var isAnimating = false;

     //The height of the window
     var pageHeight = $window.innerHeight();

     //Key codes for up and down arrows on keyboard. We'll be using this to navigate change slides using the keyboard
     var keyCodes = {
       UP  : 38,
       DOWN: 40
     };

     var currentIndex = 0;

     var timeline1 = new TimelineMax()
                         .staggerFrom(split0.words, time * 2, {y:'+=100', autoAlpha:0, opacity: 0, ease: Back.easeOut.config(1.5)}, 0.1)
                         .staggerTo('.services-area span', time * 2, {opacity: 1, ease: Power1.easeOut}, time / 4)
                         .staggerTo('.services-area b', time * 2, {opacity: 1, scaleY:1, transformOrigin: 'center center', ease: Power1.easeOut})
                         .reverse();

     var timeline2 = new TimelineMax()
                        .set('#section2', {display: 'flex'})
                        .set('.services .underline', {scaleX: 0, transformOrigin:'0% 50%',})
                        .to(['#logo svg path', 'svg g rect', '.overlay-main nav ul li a', '.icon-social svg path', '.copyright small'], time / 2, {fill: '#ffffff', color: '#ffffff'}, 0)

                        // .to('#transition_01', time * 1.5, {morphSVG: 'M0.2,272.9l1439.6,153.9l0.2,24H0L0.2,272.9z', ease: Elastic.easeOut.config(1, 0.4)}, 0.05)
                        .to('.services .bgImg', time * 1.5, {opacity: 1, transformOrigin:'35% 35%', ease: Power1.easeOut}, 0.05)
                        .to('.services h2', time * 1.5, {opacity: 1, y: 0 , ease: Power1.easeOut}, 0.05)
                        .to('.services .underline', time * 1.5, {scaleX: 1, ease: Power1.easeOut}, 0.085)
                        .staggerFrom(".module__services", time * 3.5, {scale:0.85, y: '+=50px', autoAlpha: 0, delay:0.5, ease: Elastic.easeOut.config(1, 0.4), force3D:true}, 0.085)
                        .reverse();

     var timeline3 = new TimelineMax()
                        //   .to(['#logo svg path', 'svg g rect', '.overlay-main nav ul li a', '.icon-social svg path', '.copyright small'], time, {fill: '#444444', color: '#444444'})
                          .set(['svg g rect'], { fill: '#444', color: '#444', opacity: 0.35}, 0)
                          .set('.quote-image', {opacity: 1})
                          .to('.quote-image-mask', time * 2, { ease: Back.easeOut.config(1.7), boxShadow: 'inset 0 0 0 15px #ffea00', force3D:true}, time * 2)
                          .staggerFrom(split.lines, time * 3, {y:'+=110', autoAlpha: 0, ease: Back.easeOut.config(1.5)}, 0.1, 'slideIn')
                          .staggerFrom(split2.words, time * 3, {autoAlpha: 0, x: 100, ease: Elastic.easeOut.config(1, 0.4)}, 0.1, 'slideIn+=0.5')
                          .reverse();

     var timeline4 = new TimelineMax()
                        //  .set('#section4 .container-fluid', {autoAlpha: 0})
                         .to('#section4 .container-fluid', time * 3, {opacity: 1})
                         .to(['svg g rect'], time / 2, { fill: '#444', opacity: 0.25, color: '#444'}, 0)
                         .reverse();

     var timeline5 = new TimelineMax()
                         .to(['#logo svg path', '.overlay-main nav ul li a', '.icon-social svg path', '.copyright small'], time / 2, {fill: '#ffffff', color: '#ffffff'}, 0)
                         .to(['#gfx_right g a rect','svg g rect'], time / 2, {opacity:0.65, fill: '#ffffff', color: '#ffffff'}, 0)
                         .to(['#section5 .bgImg', '#section5 .container-fluid'], time * 4, {opacity: 1})
                         .reverse();

     var timeline6 = new TimelineMax()
                          .to(['#logo svg path', '.overlay-main nav ul li a', '.icon-social svg path', '.copyright small'], time / 2, {fill: '#ffffff', color: '#ffffff'}, 0)
                          .to(['#gfx_right g a rect','svg g rect'], time / 2, {opacity:0.65, fill: '#ffffff', color: '#ffffff'}, 0)
                          .staggerFrom('.idea_image, .ideas_category, .ideas_titles', time, {y:'+=25', autoAlpha: 0, ease: Power1.easeOut}, 0.1)
                          // .staggerFrom('.ideas_category, .ideas_titles', time, {y:'+=20', autoAlpha: 0, ease: Power1.easeOut}, 0.1)
                          .set('.header-message .underline', {scaleX: 0})
                          .from('.ideas_header', time, {y: '+=100', autoAlpha: 0, ease: Back.easeOut.config(1.7)})
                          .staggerFrom(split3.lines, time, {y: '+=100', autoAlpha: 0, ease: Back.easeOut.config(1.5)}, 0.1)
                          .to('.header-message .underline', time * 2, {transformOrigin: '0% 50%', scaleX: 1, autoAlpha: 1, ease: Power1.easeOut})
                          .staggerFrom('.grid .grid-item', time, {y: '+=50', autoAlpha: 0, ease: Back.easeOut.config(1.5)}, 0.1)
                          .reverse();

     var timeline7 = new TimelineMax().to("#action4", 2, {scale: 2}).reverse();

     var timelines = [timeline1, timeline2, timeline3, timeline4, timeline5, timeline6, timeline7];

     var sTimeline1 = new TimelineMax()
                           .to('#section2 #transition_01', time * 1.5 , {  morphSVG: 'M0,424.9l1440-150v176H0V424.9z', ease: Back.easeOut.config(1.2)})
                           .to('#section2 #transition_01', time * 1.5 , {  morphSVG: 'M0,244.9l1440,130v76H0V244.9z', ease: Back.easeOut.config(1.7)})
                           .to('#section2 #transition_01', time * 1.15 , {  morphSVG: 'M0,244.9l1440-200v406H0V244.9z', ease: Back.easeOut.config(1.9)})
                           // .to('#transition_01', time * 1.5 , {  morphSVG: 'M0,4.9l1440,40v406H0V4.9z', ease: Back.easeOut.config(1.2)})
                           .to('#section2 #transition_01', time * 1.15 , {  morphSVG: 'M0-5.1l1440-1v457H0V-5.1z', ease: Power1.easeOut})
                           .set('#section2 .transition_img', {display: 'none'})
                           .reverse();


     var sTimeline2 = new TimelineMax()
                          .to('#section3 #transition_01', time * 1.15 , {  morphSVG: 'M0,424.9l1440-150v176H0V424.9z', ease: Back.easeOut.config(1.2)})
                          .to('#section3 #transition_01', time * 1.5 , {  morphSVG: 'M0,244.9l1440,130v76H0V244.9z', ease: Back.easeOut.config(1.7)})
                          .to('#section3 #transition_01', time * 1.35 , {  morphSVG: 'M0,244.9l1440-200v406H0V244.9z', ease: Back.easeOut.config(1.9)})
                          // .to('#transition_01', time * 1.5 , {  morphSVG: 'M0,4.9l1440,40v406H0V4.9z', ease: Back.easeOut.config(1.2)})
                          .to('#section3 #transition_01', time * 1.05 , {  morphSVG: 'M0-5.1l1440-1v457H0V-5.1z', ease: Power1.easeOut})
                          .set('#section3 .transition_img', {display: 'none'})
                          .reverse();

     var sTimeline3 = new TimelineMax()
                          .to('#section4 #transition_01', time * 1.15 , {  morphSVG: 'M0,424.9l1440-150v176H0V424.9z', ease: Back.easeOut.config(1.2)})
                          .to('#section4 #transition_01', time * 1.5 , {  morphSVG: 'M0,244.9l1440,130v76H0V244.9z', ease: Back.easeOut.config(1.7)})
                          .to('#section4 #transition_01', time * 1.35 , {  morphSVG: 'M0,244.9l1440-200v406H0V244.9z', ease: Back.easeOut.config(1.9)})
                          // .to('#transition_01', time * 1.5 , {  morphSVG: 'M0,4.9l1440,40v406H0V4.9z', ease: Back.easeOut.config(1.2)})
                          .to('#section4 #transition_01', time * 1.05 , {  morphSVG: 'M0-5.1l1440-1v457H0V-5.1z', ease: Power1.easeOut})
                          .set('#section4 .transition_img', {display: 'none'})
                          .reverse();

  var sTimeline4 = new TimelineMax()
                      .to('#section5 #transition_01', time * 1.15 , {  morphSVG: 'M0,424.9l1440-150v176H0V424.9z', ease: Back.easeOut.config(1.2)})
                      .to('#section5 #transition_01', time * 1.5 , {  morphSVG: 'M0,244.9l1440,130v76H0V244.9z', ease: Back.easeOut.config(1.7)})
                      .to('#section5 #transition_01', time * 1.35 , {  morphSVG: 'M0,244.9l1440-200v406H0V244.9z', ease: Back.easeOut.config(1.9)})
                      // .to('#transition_01', time * 1.5 , {  morphSVG: 'M0,4.9l1440,40v406H0V4.9z', ease: Back.easeOut.config(1.2)})
                      .to('#section5 #transition_01', time * 1.05 , {  morphSVG: 'M0-5.1l1440-1v457H0V-5.1z', ease: Power1.easeOut})
                      .set('#section5 .transition_img', {display: 'none'})
                      .reverse();

    var sTimeline5 = new TimelineMax()
                        .to('#section6 #transition_01', time * 1.15 , {  morphSVG: 'M0,424.9l1440-150v176H0V424.9z', ease: Back.easeOut.config(1.2)})
                        .to('#section6 #transition_01', time * 1.5 , {  morphSVG: 'M0,244.9l1440,130v76H0V244.9z', ease: Back.easeOut.config(1.7)})
                        .to('#section6 #transition_01', time * 1.35 , {  morphSVG: 'M0,244.9l1440-200v406H0V244.9z', ease: Back.easeOut.config(1.9)})
                        // .to('#transition_01', time * 1.5 , {  morphSVG: 'M0,4.9l1440,40v406H0V4.9z', ease: Back.easeOut.config(1.2)})
                        .to('#section6 #transition_01', time * 1.05 , {  morphSVG: 'M0-5.1l1440-1v457H0V-5.1z', ease: Power1.easeOut})
                        .set('#section6 .transition_img', {display: 'none'})
                        .reverse();

   var sTimeline6 = new TimelineMax()
                       .to('#section7 #transition_01', time * 1.15 , {  morphSVG: 'M0,424.9l1440-150v176H0V424.9z', ease: Back.easeOut.config(1.2)})
                       .to('#section7 #transition_01', time * 1.5 , {  morphSVG: 'M0,244.9l1440,130v76H0V244.9z', ease: Back.easeOut.config(1.7)})
                       .to('#section7 #transition_01', time * 1.35 , {  morphSVG: 'M0,244.9l1440-200v406H0V244.9z', ease: Back.easeOut.config(1.9)})
                       // .to('#transition_01', time * 1.5 , {  morphSVG: 'M0,4.9l1440,40v406H0V4.9z', ease: Back.easeOut.config(1.2)})
                       .to('#section7 #transition_01', time * 1.05 , {  morphSVG: 'M0-5.1l1440-1v457H0V-5.1z', ease: Power1.easeOut})
                       .set('#section7 .transition_img', {display: 'none'})
                       .reverse();

     var sTimelines = [sTimeline1, sTimeline2, sTimeline3, sTimeline4, sTimeline5, sTimeline6];

     //Going to the first slide
     goToSlide($currentSlide);
     //TweenLite.set($currentSlide, {className: "+=active"});

     /*
   	*   Adding event listeners
   	* */

     $window.on("resize", onResize).resize();
     $window.on("mousewheel DOMMouseScroll", onMouseWheel);
     $document.on("keydown", onKeyDown);
     $navButtons.on("click", onNavButtonClick);
     $navGoPrev.on("click", goToPrevSlide);
     $navGoNext.on("click", goToNextSlide);

     /*
   	*   Internal functions
   	* */

     /*
   	*   When a button is clicked - first get the button href, and then slide to the container, if there's such a container
   	* */
     function onNavButtonClick(event)
     {
       //The clicked button
       var $button = $(this);

       //The slide the button points to
       var $slide = $($button.attr("href"));

       //If the slide exists, we go to it
       if($slide.length)
       {
          // clzd HERE
         $currentSlide.addClass('fixedtest');
         goToSlide($slide);
         event.preventDefault();
       }
     }

     /*
   	*   Getting the pressed key. Only if it's up or down arrow, we go to prev or next slide and prevent default behaviour
   	*   This way, if there's text input, the user is still able to fill it
   	* */
     function onKeyDown(event)
     {

       var PRESSED_KEY = event.keyCode;

       if(PRESSED_KEY == keyCodes.UP)
       {
         goToPrevSlide();
         event.preventDefault();
       }
       else if(PRESSED_KEY == keyCodes.DOWN)
       {
         goToNextSlide();
         event.preventDefault();
       }

     }

     /*
   	*   When user scrolls with the mouse, we have to change slides
   	* */
     function onMouseWheel(event)
     {
       //Normalize event wheel delta
       var delta = event.originalEvent.wheelDelta / 30 || -event.originalEvent.detail;

       //If the user scrolled up, it goes to previous slide, otherwise - to next slide
       if(delta < -1)
       {
         goToNextSlide();
       }
       else if(delta > 1)
       {
         goToPrevSlide();
       }

       event.preventDefault();

     }

     /*
   	*   If there's a previous slide, slide to it
   	* */
     function goToPrevSlide()
     {
       if($currentSlide.prev().length)
       {
         $currentSlide.prev().removeClass('fixedtest');
         goToSlide($currentSlide.prev());
       }
     }

     /*
   	*   If there's a next slide, slide to it
   	* */
     function goToNextSlide()
     {
       if($currentSlide.next().length)
       {
         $currentSlide.prev().removeClass('fixedtest');
         $currentSlide.addClass('fixedtest');
         goToSlide($currentSlide.next());
       }
     }

     /*
   	*   Actual transition between slides
   	* */
     function goToSlide($slide)
     {
       //If the slides are not changing and there's such a slide
       if(!isAnimating && $slide.length)
       {
         //setting animating flag to true
         isAnimating = true;
         $currentSlide = $slide;
         NextSlide = $currentSlide.next()

         //Sliding to current slide
         TweenMax.to($slidesContainer, time * 5, {scrollTo: {y: pageHeight * $currentSlide.index()}, onStart: onSlideStarted, onStartScope: this, onComplete: onSlideChangeEnd, onCompleteScope: this});

         //Definig slide status
         TweenMax.to($allSlides.filter(".active"), 0.1, {className: "-=active"});
         TweenMax.to($allSlides.filter($currentSlide), 0.1, {className: "+=active"});

         //Animating menu items
         TweenMax.to($navButtons.filter(".active"), 0.5, {className: "-=active"});
         TweenMax.to($navButtons.filter("[href=#" + $currentSlide.attr("id") + "]"), 0.5, {className: "+=active"});

         //console.log(anim02);
         console.log($navButtons);
         console.log($allSlides);
       }
     }


     /* ============ animations individual / slide ===================*/

     //var anim02 = $("#slide-2").hasClass('.active');
     //var anim02 = $("#slide02").hasClass('.active');

     //var T02 = new TimelineLite({paused:true});
     //T02.to(".action02", 2, {scale: 2});

     /* ============ animations End===================*/


     function onSlideStarted() {

       // Reverse the timeline for the previous slide
       sTimelines[currentIndex].reversed(true).progress(0);

       // Play the timeline for the current slide
       sTimelines[currentIndex].reversed(false);
     }

     /*
   	*   Once the sliding is finished, we need to restore "isAnimating" flag.
   	*   You can also do other things in this function, such as changing page title
   	* */
     function onSlideChangeEnd() {
       isAnimating = false;

       // Reverse the timeline for the previous slide
       timelines[currentIndex].reversed(true).progress(0);

       // Change the index
       currentIndex = $currentSlide.index();

       // Play the timeline for the current slide
       timelines[currentIndex].reversed(false);
     }

     /*
   	*   When user resize it's browser we need to know the new height, so we can properly align the current slide
   	* */
     function onResize(event)
     {

       //This will give us the new height of the window
       var newPageHeight = $window.innerHeight();

       /*
   		*   If the new height is different from the old height ( the browser is resized vertically ), the slides are resized
   		* */
       if(pageHeight !== newPageHeight)
       {
         pageHeight = newPageHeight;

         //This can be done via CSS only, but fails into some old browsers, so I prefer to set height via JS
         TweenLite.set([$slidesContainer, $slides], {height: pageHeight + "px"});

         //The current slide should be always on the top
         TweenLite.set($slidesContainer, {scrollTo: {y: pageHeight * $currentSlide.index() }});
       }

     }
   }
});


function gsapSlider(element) {
   // crousel codepen// ========
   TweenMax.set(element,{perspective:1000});

   var glides=document.querySelectorAll(element + ' .glide'),
       tl=new TimelineMax({paused:true});

   for(var i=0;i<glides.length;i++){
       var D=document.createElement('div');
       D.className='Dot'; D.id='Dot'+i;
       D.addEventListener('click',function(){ tl.seek(this.id).pause() });
       document.querySelector(element + ' .Dots').appendChild(D);
       if(i!=0){tl.addPause('Dot'+i)};
       if(i!=glides.length-1){
         tl.to(glides[i],0.25,{scale:.96,ease:Back.easeOut})
           .to(glides[i],0.7,{xPercent:-130,rotationY:15},'L'+i) // 0.7
           .from(glides[i+1],0.7,{xPercent:130,rotationY:-15},'L'+i)
           .to('#Dot'+i,0.7,{backgroundColor:'rgba(0,0,0,0.15)'},'L'+i)
           .from(glides[i+1],0.25,{scale:.96,ease:Back.easeIn})
       };
   };

   function GO(e){
     var SD=isNaN(e)?e.wheelDelta||-e.detail:e;
     if(SD<0){tl.play()}else{tl.reverse()};
   };

   // document.addEventListener("mousewheel",GO);
   // document.addEventListener("DOMMouseScroll",GO);
   document.querySelector(element + ' .nextBtn').addEventListener("click",function(){GO(-1)});
   document.querySelector(element + ' .prevtBtn').addEventListener("click",function(){GO(1)});

   return tl;
}

gsapSlider('#sectionONE');
gsapSlider('#sectionTWO');
