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

// ============================
   // Time var
   var time = .25;

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
      .to('#gfx_left', time, {x: 0, ease: Power1.easeOut}, 0)
      .to('#gfx_right', time * 2, {y:0, ease: Power1.easeOut}, 0);
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
   TweenMax.set('#gfx_left', {x: '-=100px'});
   TweenMax.set('#gfx_right', {y: '-=100px'});
   TweenMax.set('.slide-img img', {opacity: 0, scale: 0.97});
   TweenMax.set('#gridWrap',{opacity: 0.25});

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

var work_tl = new TimelineMax();

work_tl
.add(workInit);

function workInit() {
   var split = new SplitText('.header-message .msg', {type:'lines', position: 'relative', linesClass: 'line++' }),
      t1 = new TimelineMax();

    t1
      .staggerFrom('.idea_image, .ideas_category, .ideas_titles', time, {y:'+=25', autoAlpha: 0, ease: Power1.easeOut}, 0.1)
      // .staggerFrom('.ideas_category, .ideas_titles', time, {y:'+=20', autoAlpha: 0, ease: Power1.easeOut}, 0.1)
      .set('.header-message .underline', {scaleX: 0})
      .from('.header-message .header', time, {y: '+=100', autoAlpha: 0, ease: Back.easeOut.config(1.7)})
      .staggerFrom(split.lines, time, {y: '+=100', autoAlpha: 0, ease: Back.easeOut.config(1.5)}, 0.1)
      .to('.header-message .underline', time * 2, {transformOrigin: '0% 50%', scaleX: 1, autoAlpha: 1, ease: Power1.easeOut})
      .staggerTo('.grid .grid-item', time, {y: '-=50', autoAlpha: 1, opacity: '1', ease: Back.easeOut.config(1.5)}, 0.1);

      return t1;
}

var $ourWork = $('.ourWork'),
    $ourWorkChild = $('.ourWorkChild'),
    $body = $('body'),
    $workHdrMsg = $('.work .header-message'),
    $imgGhost = $('.img--ghost'),
    time = 0.25;

// jQuery =========================================

$(function() {
    var ink, d, x, y;

    $(".ripplelink").click(function(e) {
        if ($(this).find(".ink").length === 0) {
            $(this).prepend("<span class='ink'></span>");
        }

        ink = $(this).find(".ink");
        ink.removeClass("animate");

        if (!ink.height() && !ink.width()) {
            d = Math.max($(this).outerWidth(), $(this).outerHeight());
            ink.css({height: d, width: d});
        }

        x = e.pageX - $(this).offset().left - ink.width() / 2;
        y = e.pageY - $(this).offset().top - ink.height() / 2;

        ink.css({ top: y + 'px', left: x + 'px' }).addClass("animate");
    });
});

var $workGrid = $('.ourWork .grid').imagesLoaded( function() {
   $workGrid.packery({
      columnWidth: '.ourWork .grid-sizer',
      itemSelector: '.ourWork .grid-item',
      // gutter: 5,
      percentPosition: true
   });
});
// ===============

$workGrid.on( 'click', '.grid-item', function( event ) {

   // find img.grow element inside of the work-grid element
   var rg = event.currentTarget,
      // ripple
       r = rg.querySelector('.ripplelink'),
      //  ripple_image
       rImg = r.querySelector('.img--grow'),
       // ripple image info
       riInfo = rImg.getBoundingClientRect(),
       ri_height = riInfo.height,
       ri_width = riInfo.width,
       ri_top = riInfo.top,
       ri_left = riInfo.left,
       $body = document.body,
       dupImg = rImg.cloneNode(true);

 // get size/position of the ghost image
  var ghostImg = document.body.querySelector('.img--ghost'),
      ghostImgInfo = ghostImg.getBoundingClientRect(),
      gi_height = ghostImgInfo.height,
      gi_width = ghostImgInfo.width,
      gi_top = ghostImgInfo.top,
      gi_left = ghostImgInfo.left,
      offsetY = window.pageYOffset;

      dupImg.style.width = ri_width + 'px';
      dupImg.style.height = ri_height + 'px';
      dupImg.style.left = ri_left + 'px';
      dupImg.style.top = ri_top + 'px';
      dupImg.style.position = 'absolute';

       $body.appendChild(dupImg);

   // ==============================
   var t1 = new TimelineMax();
       t1
       .to([$workGrid, $workHdrMsg], time * 1.15, {delay: time, transformOrigin: '50% 100%', scale: .98, autoAlpha: 0, display:'none', ease: Power1.easeOut}, 0)
       .to(['svg path', 'svg g rect', '.overlay-main nav ul li a'], time * 1.15, {fill: '#fff', color: '#fff', ease: Power1.easeOut}, 0)
       .to($body, time * 1.15, {backgroundColor: '#4ba8f4', ease: Power1.easeOut}, 0)
       .set($ourWork, {display: 'none'})
       .set($ourWorkChild, {transformOrigin: '50% 100%', autoAlpha: 0, y: '+=25px', scale: .96, display: 'block'}, 0)
       .to(dupImg, time * 1.15, {width: gi_width, height: gi_height, x: gi_left - ri_left, y: gi_top - ri_top + offsetY, transformOrigin:'0% 0%', ease: Power1.easeOut}, '+=0.01')
       .to($ourWorkChild, time * 1.15 , {autoAlpha: 1, y: 0, scale: 1, ease: Power1.easeOut}, '+=0.015')
       .set(dupImg, {display: 'none'})
       .set($imgGhost, {opacity: '1'});

});
