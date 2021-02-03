var controller = new ScrollMagic.Controller();

var sceneNavTween = new TimelineMax();

if ( window.innerWidth >= 1280 ) {
  sceneNavTween.to('.wf-logo-color', .4, { fill:'#444444', ease:Expo.easeOut })
    .to('.menu ul', .4, { color:'#444444', ease:Expo.easeOut }, 0)
    .to('.top-header', .4, { background: 'rgba(255,255,255,.85)' }, 0)
    // .to('.top-header .navigation', .8, { padding:'24px 40px', ease:Power1.easeOut }, 0)
    // .to('.top-header .menu', .8, { padding:'24px 40px', ease:Power1.easeOut }, 0);
} else if ( window.innerWidth >= 768 ) {
  sceneNavTween.to('.wf-logo-color', .4, { fill:'#444444', ease:Expo.easeOut })
    .to('.menu ul', .4, { color:'#444444', ease:Expo.easeOut }, 0)
    .to('.top-header', .4, { background: 'rgba(255,255,255,.85)' }, 0)
    // .to('.top-header .navigation', .8, { padding:'24px 30px', ease:Power1.easeOut }, 0)
    // .to('.top-header .menu', .8, { padding:'24px 30px', ease:Power1.easeOut }, 0);
} else {
  sceneNavTween.to('.wf-logo-color', .4, { fill:'#121212', ease:Expo.easeOut }, 0)
    .to('.hamburger-color', .4, { fill:'#121212', ease:Expo.easeOut }, 0)
    .to('.top-header', .4, { background: 'rgba(255,255,255,.85)' }, 0);
}

var sceneNav = new ScrollMagic.Scene({triggerElement:'.container', duration:100})
    						.setTween(sceneNavTween)
								//.addIndicators(true)
    						.addTo(controller);


if ( window.innerWidth >= 1280 ) {
  sceneNav.triggerHook(0.055);
} else {
  sceneNav.triggerHook(0.04);
}
