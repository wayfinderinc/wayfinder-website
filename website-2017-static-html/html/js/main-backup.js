
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
      TweenMax.set('#gfx_left rect', {opacity: 1, x: '-=100px'});
      TweenMax.set('#gfx_right', {opacity: 0, y: '-=100px'});
      TweenMax.set('.slide-img img', {opacity: 0, scale: 0.97});
      // TweenMax.set('#slide-heading-01', {opacity: 0});

      // Initial tl animations
      var main_tl = new TimelineMax();

      main_tl
         .add(animateHeader, 'start')
         .add(animateFooter, 'start')
         .add(animateGFX, 'start')
         .add(animateText, 'start')
         // .add(animateServText, 'start')
         .add(animateGridVert, 'ticks+=' + time)
         .add(animateTickLeft, 'ticks+=' + time * 3.5)
         .add(animateTickMid, 'ticks+=' + time * 3.5)
         .add(animateTickRight, 'ticks=+' + time * 3.5);


      // var slideMain_tl = new TimelineMax()

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
         t1.to('.slide-img img', time, {opacity: 1, scale: 1, transformOrigin:'35% 35%', ease: Power1.easeOut}, 0)
         .staggerFrom('#gfx_right rect', time * 2 , {opacity: 1, scaleY:0, transformOrigin:'center top', ease: Power1.easeOut}, 0)
         .to('#gfx_left rect', time, {opacity: 0.4, x: 0, ease: Power1.easeOut}, 0)
         .to('#gfx_right rect', time * 2, {opacity: 0.4, y:0, ease: Power1.easeOut}, 0);
         return t1;
      }

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

      function animateServText() {
         var t1 = new TimelineMax();
         t1.staggerTo('.services-area span', time, {opacity: 1, ease: Power1.easeOut}, time / 4);
         t1.staggerTo('.services-area b', time, {opacity: 1, scaleY:1, transformOrigin: 'center center', ease: Power1.easeOut});
         return t1;
      }

      function animateGridVert() {
         var t1 = new TimelineMax();
         t1 .staggerTo('.vertSticks', time * 4, {opacity: 1, scaleY: 1, transformOrigin:'0% 50%', ease: Back.easeOut.config(1.5)});
         return t1;
      }

      function animateTickLeft() {
         var t1 = new TimelineMax();
         t1.staggerTo('.vertTickLeft', time, {scaleX: 1, transformOrigin:'0% 0%', ease: Back.easeOut.config(1.5)});
         return t1;
      }

      function animateTickMid() {
         var t1 = new TimelineMax();
         t1.staggerTo('.vertTickMid', time, {scaleX: 1, transformOrigin:'50% 0%', ease: Back.easeOut.config(1.5)});
         return t1;
      }

      // ============
      // this is not working
      function animateTickRight() {
         var t1 = new TimelineMax();
         t1.staggerTo('.vertTickRight', time, {scaleX: 1, transformOrigin:'100% 0%', ease: Back.easeOut.config(1.5)});
         return t1;
      }

      // document.getElementById("sectionONE").addEventListener("click", function( event ) {
      //    main_tl.restart();
      // }, false);


      var services_tl = new TimelineMax();

      services_tl
      .add(servicesInit, 'start');

      function servicesInit() {
         var t1 = new TimelineMax();
          t1.set('.services h2', {y: '+=50'})
            .set('.services .underline', {scaleX: 0, transformOrigin:'0% 50%',})
            .to('.services .bgImg', time * 4, {opacity: 1, transformOrigin:'35% 35%', ease: Power1.easeOut}, '0')
            .to('.services h2', time * 4, {opacity: 1, y: 0 , ease: Power1.easeOut}, '0')
            .to('.services .underline', time * 4, {scaleX: 1, ease: Power1.easeOut})
            .staggerFrom(".module__services", time * 4, {scale:0.85, y: '+=50px', autoAlpha: 0, delay:0.5, ease: Power4.easeOut, force3D:true}, 0.2);
         return t1;
      }

      var quotes_tl = new TimelineMax();

      quotes_tl
      .add(quotesInit);

      function quotesInit() {
         var split = new SplitText('.quote-text', {type:'lines', position: 'relative', linesClass: 'line++'});
         var split2 = new SplitText('.quote-author', {type:'words', position: 'relative'});
         var t1 = new TimelineMax();
         t1.to('.quote-image-mask', time * 2, { ease: Back.easeOut.config(1.7), boxShadow: 'inset 0 0 0 15px #ffea00', force3D:true}, time * 2)
           .staggerFrom(split.lines, time * 4, {y:'+=110', autoAlpha: 0, ease: Back.easeOut.config(1.5)}, 0.1, 'slideIn')
           .staggerFrom(split2.words, time * 3, {autoAlpha: 0, x: 100, ease: Elastic.easeOut.config(1, 0.4)}, 0.1, 'slideIn+=0.5');
         return t1;
      }


      var ideas_tl = new TimelineMax();

      ideas_tl
      .add(ideasInit);

      function ideasInit() {
         var split = new SplitText('.ideas_msg', {type:'lines', position: 'relative', linesClass: 'line++' }),
             t1 = new TimelineMax();

          t1
            .staggerFrom('.idea_image, .ideas_category, .ideas_titles', time, {y:'+=25', autoAlpha: 0, ease: Power1.easeOut}, 0.1)
            // .staggerFrom('.ideas_category, .ideas_titles', time, {y:'+=20', autoAlpha: 0, ease: Power1.easeOut}, 0.1)
            .set('.header-message .underline', {scaleX: 0})
            .from('.ideas_header', time, {y: '+=100', autoAlpha: 0, ease: Back.easeOut.config(1.7)})
            .staggerFrom(split.lines, time, {y: '+=100', autoAlpha: 0, ease: Back.easeOut.config(1.5)}, 0.1)
            .to('.header-message .underline', time * 2, {transformOrigin: '0% 50%', scaleX: 1, autoAlpha: 1, ease: Power1.easeOut})
            .staggerFrom('.grid .grid-item', time, {y: '+=50', autoAlpha: 0, ease: Back.easeOut.config(1.5)}, 0.1);

            return t1;
      }

// Page scroll shape morphs - 01
// ============================
   // var t1 = new TimelineMax({paused: true});
   // t1.to('#transition_01', 2, {morphSVG: 'M0,84.9l1440,170v196H0V84.9z', ease: Elastic.easeOut.config(1, 0.4)});
   // t1.play();

// Page scroll shape morphs - 02
// ============================
   // var t2 = new TimelineMax({paused: true});
   // t2.to('#transition_02', 2, {morphSVG: 'M1440,63.2L0,232v116.3l1440-0.1V63.2z', ease: Elastic.easeOut.config(1, 0.4)});
   // t2.play();


// Services module stagger fading in
// ============================
   // TweenMax

// function resize() { t3.restart(); }
// window.onresize = resize;

function gsapSlider(element) {
   // crousel codepen// ========
   TweenMax.set(element,{perspective:1000});

   var slides=document.querySelectorAll(element + ' .slide'),
       tl=new TimelineMax({paused:true});

   for(var i=0;i<slides.length;i++){
       var D=document.createElement('div');
       D.className='Dot'; D.id='Dot'+i;
       D.addEventListener('click',function(){ tl.seek(this.id).pause() });
       document.querySelector(element + ' .Dots').appendChild(D);
       if(i!=0){tl.addPause('Dot'+i)};
       if(i!=slides.length-1){
         tl.to(slides[i],0.25,{scale:.97,ease:Back.easeOut})
           .to(slides[i],0.7,{xPercent:-100,rotationY:0},'L'+i) // 0.7
           .from(slides[i+1],0.7,{xPercent:100,rotationY:0},'L'+i)
           .to('#Dot'+i,0.7,{backgroundColor:'rgba(0,0,0,0.15)'},'L'+i)
           .from(slides[i+1],0.25,{scale:.97,ease:Back.easeIn})
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

//////////////////////

      // var $carousel = $("#mycarousel");
      //
      // $carousel.carousel({
      //   interval: false
      // });
      //
      // $(document).keyup(function(e) {
      //   // right arrow
      //   if(e.which === 39) {
      //     $carousel.carousel("next");
      //   // left arrow
      //   } else if(e.which === 37) {
      //     $carousel.carousel("prev");
      //   }
      // });




      //////////////////////






      // Page scroll shape morphs - 01
      // ============================
         // var t1 = new TimelineMax({paused: true});
         // t1.to('#transition_01', 2, {morphSVG: 'M0,84.9l1440,170v196H0V84.9z', ease: Elastic.easeOut.config(1, 0.4)});
         // t1.play();

      // Page scroll shape morphs - 02
      // ============================
         // var t2 = new TimelineMax({paused: true});
         // t2.to('#transition_02', 2, {morphSVG: 'M1440,63.2L0,232v116.3l1440-0.1V63.2z', ease: Elastic.easeOut.config(1, 0.4)});
         // t2.play();


      // function gsapSlider(element) {
      //    // crousel codepen// ========
      //    TweenMax.set(element,{perspective:1000});
      //
      //    var slides=document.querySelectorAll(element + ' .slide'),
      //        tl=new TimelineMax({paused:true});
      //
      //    for(var i=0;i<slides.length;i++){
      //        var D=document.createElement('div');
      //        D.className='Dot'; D.id='Dot'+i;
      //        D.addEventListener('click',function(){ tl.seek(this.id).pause() });
      //        document.querySelector(element + ' .Dots').appendChild(D);
      //        if(i!=0){tl.addPause('Dot'+i)};
      //        if(i!=slides.length-1){
      //          tl.to(slides[i],0.25,{scale:.97,ease:Back.easeOut})
      //            .to(slides[i],0.7,{xPercent:-100,rotationY:0},'L'+i) // 0.7
      //            .from(slides[i+1],0.7,{xPercent:100,rotationY:0},'L'+i)
      //            .to('#Dot'+i,0.7,{backgroundColor:'rgba(0,0,0,0.15)'},'L'+i)
      //            .from(slides[i+1],0.25,{scale:.97,ease:Back.easeIn})
      //        };
      //    };
      //
      //    function GO(e){
      //      var SD=isNaN(e)?e.wheelDelta||-e.detail:e;
      //      if(SD<0){tl.play()}else{tl.reverse()};
      //    };
      //
      //    // document.addEventListener("mousewheel",GO);
      //    // document.addEventListener("DOMMouseScroll",GO);
      //    document.querySelector(element + ' .nextBtn').addEventListener("click",function(){GO(-1)});
      //    document.querySelector(element + ' .prevtBtn').addEventListener("click",function(){GO(1)});
      //
      //    return tl;
      // }
      //
      // gsapSlider('#sectionONE');
      // gsapSlider('#sectionTWO');


      //////////////////////
