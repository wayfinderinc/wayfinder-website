var controller = new ScrollMagic.Controller();

var sceneNavTween = new TimelineMax();

if ( window.innerWidth >= 1280 ) {
  sceneNavTween.to('.wf-logo-color', .4, { fill:'#444444', ease:Expo.easeOut })
    .to('.menu ul', .4, { color:'#444444', ease:Expo.easeOut }, 0)
    .to('.top-header', .4, { background: 'rgba(255,255,255,.85)' }, 0)
    .to('.top-header .navigation', .8, { padding:'24px 40px', ease:Power1.easeOut }, 0)
    .to('.top-header .menu', .8, { padding:'24px 40px', ease:Power1.easeOut }, 0);
} else if ( window.innerWidth >= 768 ) {
  sceneNavTween.to('.wf-logo-color', .4, { fill:'#444444', ease:Expo.easeOut })
    .to('.menu ul', .4, { color:'#444444', ease:Expo.easeOut }, 0)
    .to('.top-header', .4, { background: 'rgba(255,255,255,.85)' }, 0)
    .to('.top-header .navigation', .8, { padding:'24px 30px', ease:Power1.easeOut }, 0)
    .to('.top-header .menu', .8, { padding:'24px 30px', ease:Power1.easeOut }, 0);
} else {
  sceneNavTween.to('.wf-logo-color', .4, { fill:'#121212', ease:Expo.easeOut }, 0)
    .to('.hamburger-color', .4, { fill:'#121212', ease:Expo.easeOut }, 0)
    .to('.top-header', .4, { background: 'rgba(255,255,255,.85)' }, 0);
}

var sceneNav = new ScrollMagic.Scene({triggerElement:'.container', duration:100})
    						.setTween(sceneNavTween)
								// .addIndicators(true)
    						.addTo(controller);

// var setfLiveTween = TweenLite.to('.setf-screenshot', 1, { bottom:'0px', ease:Linear.easeNone });
// var sceneSS = new ScrollMagic.Scene({triggerElement:'.img-challenge', duration:320})
//     						.setTween(setfLiveTween)
//     						//.setPin(".logo", {pushFollowers: true})
// 								//.addIndicators(true)
//     						.addTo(controller);
//
// var setfSketch = TweenLite.to('.setf-sketch', 1, { bottom:'0px', ease:Linear.easeNone });
// var sceneSketch = new ScrollMagic.Scene({triggerElement:'.img-strategy', duration:320})
//     						.setTween(setfSketch)
//     						//.setPin(".logo", {pushFollowers: true})
// 								//.addIndicators(true)
//     						.addTo(controller);

var revealElements = document.getElementsByClassName("row");
		for (var i=0; i<revealElements.length; i++) { // create a scene for each element
			new ScrollMagic.Scene({
								triggerElement: revealElements[i], // y value not modified, so we can use element as trigger as well
								offset: 50,												 // start a little later
								triggerHook: 0.9,
                reverse: false
							})
							.setClassToggle(revealElements[i], "visible") // add class toggle
							//.addIndicators({name: "row " + (i+1) }) // add indicators (requires plugin)
							.addTo(controller);
		}



if ( window.innerWidth >= 1280 ) {
  sceneNav.triggerHook(0.055);
  //sceneSS.triggerHook(0.4);
  //sceneSketch.triggerHook(0.4);
} else {
  sceneNav.triggerHook(0.04);
  //sceneSS.triggerHook(0.56);
  //sceneSketch.triggerHook(0.56);
}
