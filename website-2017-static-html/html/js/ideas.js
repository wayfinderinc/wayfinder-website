
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


   function animateHeader() {
      var t1 = new TimelineMax();
      t1
      .to('#logo', time, {opacity: 1}, time)
      .staggerFrom('#mainNav li a', time, {opacity: 0, x: '+=50', ease: Back.easeOut.config(1.5)}, time / 2);
      return t1;
   }

   function animateFooter() {
      var t1 = new TimelineMax();
      t1.to('.footer-main', time * 2, {opacity: 1, y: 0, ease: Power1.easeOut});
      return t1;
   }

   function animateGFX() {
      var t1 = new TimelineMax();
      t1.to('.slide-img img', time, {opacity: 1, scale: 1, transformOrigin:'35% 35%', ease: Power1.easeOut}, 0)
      .staggerFrom('#gfx_right rect', time * 2 , {opacity: 1, scaleY:0, transformOrigin:'center top', ease: Power1.easeOut}, 0)
      .to('#gfx_left', time, {opacity: 0.2, x: 0, ease: Power1.easeOut}, 0)
      .to('#gfx_right', time * 2, {opacity: 0.2, y:0, ease: Power1.easeOut}, 0);
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
   /// ============

   // Setting up init values of el's
   TweenMax.set('#logo, .services-area span, .services-area b', {opacity: 0});
   TweenMax.set('.vertSticks',{scaleY: 0, transformOrigin:'0% 50%'});
   TweenMax.set('.vertTickLeft', {scaleX: 0, transformOrigin:'0% 0%'});
   TweenMax.set('.vertTickMid', {scaleX: 0, transformOrigin:'50% 0%'});
   TweenMax.set('.vertTickRight', {scaleX: 0, transformOrigin:'100% 0%'});
   TweenMax.set('.services-area b', {scaleX: 0.75, scaleY: 0});
   TweenMax.set('.footer-main', {opacity: 0, y: '+=100px'});
   TweenMax.set('#gfx_left', {opacity: 0, x: '-=100px'});
   TweenMax.set('#gfx_right', {opacity: 0, y: '-=100px'});
   TweenMax.set('.slide-img img', {opacity: 0, scale: 0.97});
   TweenMax.set('.grid-wrap', {opacity: 0.35});


   // Initial tl animations
   var main_tl = new TimelineMax();

   main_tl
   .add(animateHeader, 'start')
   .add(animateFooter, 'start')
   .add(animateGFX, 'start')
   .add(animateGridVert, 'ticks+=' + time)
   .add(animateTickLeft, 'ticks+=' + time * 3.5)
   .add(animateTickMid, 'ticks+=' + time * 3.5)
   .add(animateTickRight, 'ticks=+' + time * 3.5);
///===========



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
      TweenMax.set('#gfx_left', {opacity: 0, x: '-=100px'});
      TweenMax.set('#gfx_right', {opacity: 0, y: '-=100px'});
      TweenMax.set('.slide-img img', {opacity: 0, scale: 0.97});

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
            .staggerFrom('.ideasPage p > a', time, {y: '+=100', autoAlpha: 0, ease: Back.easeOut.config(1.5)}, 0.1)
            .to('.header-message .underline', time * 2, {transformOrigin: '0% 50%', scaleX: 1, autoAlpha: 1, ease: Power1.easeOut})
            .staggerTo('.grid .grid-item', time, {y: '-=50', autoAlpha: 1, opacity: '1', ease: Back.easeOut.config(1.5)}, 0.1);

            return t1;
      }

/// =========================================

function scrollTop() {
   window.scrollTo(0,0);
}

var $ideasGrid = $('.ideasPage .grid').imagesLoaded( function() {
   $ideasGrid.packery({
      columnWidth: '.ideasPage .grid-sizer',
      itemSelector: '.ideasPage .grid-item',
      percentPosition: true
   });
});


$ideasGrid.on( 'click', '.grid-item', function( event ) {

   var $grid_item = event.currentTarget,
       $img_color = $grid_item.querySelectorAll('.img-color'),
       hex_value = $('#testColor1').data('hex-color');

      console.log(hex_value);

      var t1 = new TimelineMax();
          t1
          .to('.covers__top', time * 1.15, {backgroundColor: '#4ba8f4', height: '60vh', transformOrigin: '50% 0', ease: Power1.easeOut}, 0)
          .to('.covers__bottom', time * 1.15, {backgroundColor: '#fff', height: '40vh', transformOrigin: '100% 100%', ease: Power1.easeOut}, 0)
          .set('.ideasChild', {visibility: 'visible', onComplete: function(){window.scrollTo(0,0)}})
          .to('.covers__top', time * 1.15, {backgroundColor: '#4ba8f4', height: '0vh', transformOrigin: '50% 0', ease: Power1.easeOut}, 0.75)
          .to('.covers__bottom', time * 1.15, {backgroundColor: '#fff', height: '0vh', transformOrigin: '100% 100%', ease: Power1.easeOut}, 0.75);

}); // end $ideasGrid click event
