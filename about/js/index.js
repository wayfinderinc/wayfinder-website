var d = document;

TweenLite.set(['.section-2', '.section-3'], { autoAlpha: .3 });

if ( window.innerWidth <= 414 ) {
  // Draggable.create('.img-graph', { type:'x', bounds:'.graph' });
  TweenLite.set('.copyrite', { rotation:90, transformOrigin:'bottom right', x:-12, y:-55 });
  TweenLite.set('.social-icons', { rotation:-90, transformOrigin:'bottom left', x:16, y:-56 });
}

// if ( window.innerWidth => 1280 && < 1440 ) {
//
// }

if (Modernizr.cssmask) {
  // supported
  document.getElementById('processAnimation').style.display = 'block';
  document.getElementById('processImg').style.display = 'none';
  // console.log('supported');
} else {
  // not-supported
  document.getElementById('processAnimation').style.display = 'none';
  document.getElementById('processImg').style.display = 'block';
  // console.log('not supported');
}

function initMobileMenu() {
  TweenLite.to('.wf-logo-color', .4, { fill:'#ffffff', ease:Expo.easeOut });
  TweenLite.to('.hamburger-color', .4, { fill:'#ffffff', ease:Expo.easeOut });
  TweenLite.to('.top-header', .2, { background: 'rgba(255,255,255,.0)' });
  TweenLite.to('.menu-hamburger', .2, { autoAlpha:0, ease:Expo.eaeOut });
  TweenLite.fromTo(['.mobile-menu', '.mobile-close'], .2, { display: 'block', autoAlpha:0 }, { autoAlpha:1, ease:Expo.eaeOut });
  TweenLite.set(wfbody, { overflow: 'hidden' });
}

function closeMobileMenu() {
  if ( window.pageYOffset >= 460 ){
    TweenLite.to('.wf-logo-color', .4, { fill:'#121212', ease:Expo.easeOut });
    TweenLite.to('.hamburger-color', .4, { fill:'#121212', ease:Expo.easeOut });
    TweenLite.to('.top-header', .2, { background: 'rgba(255,255,255,.85)' });
  }
  TweenLite.to('.menu-hamburger', .2, { autoAlpha:1, ease:Expo.eaeOut });
  TweenLite.to(['.mobile-menu', '.mobile-close'], .2, { autoAlpha:0, ease:Expo.eaeOut });
  TweenLite.set(wfbody, { overflow: 'visible' });
}

function mvvSection(section) {
  if ( section == 'mission' ){
    TweenLite.to(['.section-1'], .6, { autoAlpha:1, ease:Expo.easeOut });
    TweenLite.to(['.section-2', '.section-3'], .6, { autoAlpha: .3, ease:Expo.easeOut });
    TweenLite.to('.c-mvv-slider', .8, { marginLeft:'200%', ease:Expo.easeOut });
  } else if ( section == 'vision' ){
    TweenLite.to(['.section-2'], .6, { autoAlpha:1, ease:Expo.easeOut });
    TweenLite.to(['.section-1', '.section-3'], .6, { autoAlpha: .3, ease:Expo.easeOut });
    TweenLite.to('.c-mvv-slider', .8, { marginLeft:'0%', ease:Expo.easeOut });
  } else if ( section == 'values' ){
    TweenLite.to(['.section-3'], .6, { autoAlpha:1, ease:Expo.easeOut });
    TweenLite.to(['.section-1', '.section-2'], .6, { autoAlpha: .3, ease:Expo.easeOut });
    TweenLite.to('.c-mvv-slider', .8, { marginLeft:'-200%', ease:Expo.easeOut });
  }
}

function initStats() {
  TweenMax.to("#factsFoundedIn", 3, {scrambleText:{text:"2004", chars:"0123456789", revealDelay:0.5, tweenLength:false, ease:Linear.easeNone}});
  TweenMax.to("#factsGlobalTeam", 3, {scrambleText:{text:"22", chars:"0123456789", revealDelay:0.6, tweenLength:false, ease:Linear.easeNone}});
  TweenMax.to("#factsFilesStored", 3, {scrambleText:{text:"32", chars:"0123456789", revealDelay:0.7, tweenLength:false, ease:Linear.easeNone}});
  TweenMax.to("#factsHappyClients", 3, {scrambleText:{text:"Yes!", chars:"lowerCase", revealDelay:0.8, tweenLength:false, ease:Linear.easeNone}});
  TweenMax.to("#factsProjects", 3, {scrambleText:{text:"843", chars:"0123456789", revealDelay:0.9, tweenLength:false, ease:Linear.easeNone}});
  TweenMax.to("#factsCortaditos", 3, {scrambleText:{text:"15,602", chars:"0123456789", revealDelay:1, tweenLength:false, ease:Linear.easeNone}});
  TweenMax.to("#factsSlackMessages", 3, {scrambleText:{text:"240", chars:"0123456789", revealDelay:1.1, tweenLength:false, ease:Linear.easeNone}});
  TweenMax.to("#factsSessions", 3, {scrambleText:{text:"2,259", chars:"0123456789", revealDelay:1.2, tweenLength:false, ease:Linear.easeNone}});
  TweenMax.to("#factsMarkers", 3, {scrambleText:{text:"527", chars:"0123456789", revealDelay:1.3, tweenLength:false, ease:Linear.easeNone}});
  TweenMax.to("#factsWireframes", 3, {scrambleText:{text:"8,560", chars:"0123456789", revealDelay:1.4, tweenLength:false, ease:Linear.easeNone}});
  TweenMax.to("#factsPizzaSlices", 3, {scrambleText:{text:"2,880", chars:"0123456789", revealDelay:1.5, tweenLength:false, ease:Linear.easeNone}});
  TweenMax.to("#factsGuitar", 3, {scrambleText:{text:"8", chars:"0123456789", revealDelay:1.6, tweenLength:false, ease:Linear.easeNone}});
  TweenMax.staggerFromTo(['#facts1', '#facts2', '#facts3', '#facts4', '#facts5', '#facts6', '#facts7', '#facts8', '#facts9', '#facts10', '#facts11', '#facts12'], .8, { scale:0 }, { scale:1, ease:Expo.easeOut }, .1);
}


function btnWorkWithUsOver() {
  TweenLite.to('.btn', .2, { backgroundColor:'#444', color:'#fff', ease:Expo.easeOut });
}

function btnWorkWithUsOut() {
  TweenLite.to('.btn', .2, { backgroundColor:'transparent', color:'#444', ease:Expo.easeOut });

}

function scrollToChallenge() {
  TweenLite.to(window, .6, {scrollTo:"#ChallengeBlock", ease:Expo.easeOut});
}

function openHome() {
  var url = '../';
  window.open(url, '_self');
}

function openAbout() {
  var url = '../about';
  window.open(url, '_self');
}

function openWork() {
  var url = '../work';
  window.open(url, '_self');
}

function openContact() {
  var url = '../contact';
  window.open(url, '_self');
}

function openLinkedin() {
  var url = 'https://www.linkedin.com/company/wayfinder-ux';
  window.open(url, '_blank');
}

function openInstagram() {
  var url = 'https://www.instagram.com/wayfinder.ux/';
  window.open(url, '_blank');
}

function openDribbble() {
  var url = 'https://dribbble.com/wayfinder';
  window.open(url, '_blank');
}

TweenLite.set(['#section-1-circle-2-red, #section-2-circle-3-red, #section-3-circle-4-red, #section-4-circle-3-red, #section-5-circle-2-red'], { transformOrigin: 'center center', rotation:-90 });
TweenLite.set(['#section-1-circle-1, #section-2-circle-1, #section-2-circle-2, #section-2-circle-4, #section-3-circle-1, #section-3-circle-2, #section-3-circle-3, #section-3-circle-5, #section-3-circle-6, #section-3-circle-7, #section-4-circle-1, #section-4-circle-2, #section-4-circle-4, #section-4-circle-5, #section-5-circle-1, #section-5-circle-3'], { transformOrigin: 'center center', rotation:-90 });
TweenLite.set('#section-5-circle-2-red-dot, #section-2-rotation, #section-2-path-3, #section-2-caret-3, #section-2-path-4, #section-3-rotation, #section-3-path-5, #section-3-caret-5, #section-3-path-6, #section-4-rotation, #section-1-path-3, #section-4-caret-3, #section-4-path-4', { autoAlpha:0 });
TweenLite.set(['#section-2-path-3, #section-2-path-4, #section-3-path-5, #section-3-path-6, #section-1-path-3, #section-4-path-4'], { autoAlpha:0, drawSVG:'99.9% 100%' });

// Timeline
var ourProcessAni = new TimelineMax({ paused:true, delay:1.5 });
ourProcessAni.fromTo('#ourProcessColored', .01, { display:'none' }, { display:'block' }, 0)
  //section 1 red
  .fromTo('#section-1-circle-2-red', .6, { drawSVG: '0%'}, { drawSVG:'100%', ease:Power1.easeOut }, 0)
  .fromTo('#section-1-circle-2-red-dot', .6, { transformOrigin:'center center', scale:0 }, { scale:1, ease:Power1.easeOut }, 0)
  .fromTo('#section-1-path-red', .6, { drawSVG: '0%'}, { drawSVG:'100%', ease:Power1.easeOut }, .6)
  .fromTo('#section-1-caret-red', .6, { autoAlpha:0, x:-228 }, { autoAlpha:1, x:0, ease:Power1.easeOut }, .6)

  //section 2 red
  .fromTo('#section-2-circle-3-red', .6, {drawSVG: '0%' }, { drawSVG:'100%', ease:Power1.easeOut }, .8)
  .fromTo('#section-2-path-red', .6, { drawSVG: '0%' }, { drawSVG:'100%', ease:Power1.easeOut }, 1.2)
  .fromTo('#section-2-caret-red', .6, { autoAlpha:0, x:-228 }, { autoAlpha:1, x:0, ease:Power1.easeOut }, 1.2)

  //section 3 red
  .fromTo('#section-3-circle-4-red', .6, { drawSVG: '0%' }, { drawSVG:'100%', ease:Power1.easeOut }, 1.4)
  .fromTo('#section-3-path-red', .6, { drawSVG: '0%' }, { drawSVG:'100%', ease:Power1.easeOut }, 1.8)
  .fromTo('#section-3-caret-red', .6, { autoAlpha:0, x:-228 }, { autoAlpha:1, x:0, ease:Power1.easeOut }, 1.8)

  //section 4 red
  .fromTo('#section-4-circle-3-red', .6, { drawSVG: '0%' }, { drawSVG:'100%', ease:Power1.easeOut }, 2)
  .fromTo('#section-4-path-red', .6, { drawSVG: '0%' }, { drawSVG:'100%', ease:Power1.easeOut }, 2.4)
  .fromTo('#section-4-caret-red', .6, { autoAlpha:0, x:-228 }, { autoAlpha:1, x:0, ease:Power1.easeOut }, 2.4)

  //section 5 red
  .fromTo('#section-5-circle-2-red', .6, { drawSVG: '0%'}, { drawSVG:'100%', ease:Power1.easeOut }, 2.6)



  //section 1 circles
  .fromTo('#section-1-circle-1', .8, {drawSVG: '0%' }, { drawSVG:'100%', ease:Power1.easeOut }, 1.2)

  //section 2 circles
  .fromTo('#section-2-circle-1', .8, {drawSVG: '0%' }, { drawSVG:'100%', ease:Power1.easeOut }, 2.7) ///////////////////////1 - 1.6
  .fromTo('#section-2-circle-4', .8, {drawSVG: '0%' }, { drawSVG:'100%', ease:Power1.easeOut }, 1.7)
  .fromTo('#section-2-circle-2', .8, {drawSVG: '0%' }, { drawSVG:'100%', ease:Power1.easeOut }, 1.8)

  //section 3 circles
  .fromTo('#section-3-circle-1', .8, {drawSVG: '0%' }, { drawSVG:'100%', ease:Power1.easeOut }, 4.3) //////////////////2 - 2
  .fromTo('#section-3-circle-3', .8, {drawSVG: '0%' }, { drawSVG:'100%', ease:Power1.easeOut }, 2)
  .fromTo('#section-3-circle-5', .8, { drawSVG: '0%' }, { drawSVG:'100%', ease:Power1.easeOut }, 2.1)
  .fromTo('#section-3-circle-6', .8, { drawSVG: '0%' }, { drawSVG:'100%', ease:Power1.easeOut }, 2.1)
  .fromTo('#section-3-circle-2', .8, { drawSVG: '0%' }, { drawSVG:'100%', ease:Power1.easeOut }, 2.2)
  .fromTo('#section-3-circle-7', .8, { drawSVG: '0%' }, { drawSVG:'100%', ease:Power1.easeOut }, 4.3) //////////////////3 - 2.2

  //section 4 circles
  .fromTo('#section-4-circle-2', .8, { drawSVG: '0%' }, { drawSVG:'100%', ease:Power1.easeOut }, 3) //////////////////4 - 2.4
  .fromTo('#section-4-circle-4', .8, { drawSVG: '0%' }, { drawSVG:'100%', ease:Power1.easeOut }, 3.1) //////////////////5 - 2.5
  .fromTo('#section-4-circle-1', .8, { drawSVG: '0%' }, { drawSVG:'100%', ease:Power1.easeOut }, 3.2) //** **// 2.5
  .fromTo('#section-4-circle-5', .8, { drawSVG: '0%' }, { drawSVG:'100%', ease:Power1.easeOut }, 3.3) //** **// 2.6

  //section 5 circles
  .fromTo('#section-5-circle-1', .8, {drawSVG: '0%' }, { drawSVG:'100%', ease:Power1.easeOut }, 4.6) //** **// 5
  .fromTo('#section-5-circle-3', .8, {drawSVG: '0%' }, { drawSVG:'100%', ease:Power1.easeOut }, 4.6) //** **// 5


//////////////////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\


  //section 1
  .fromTo('#section-1-path-1', .8, { drawSVG: '0%' }, { drawSVG:'100%', ease:Power1.easeOut }, 1.6)
  .fromTo('#section-1-path-2', .8, { drawSVG: '0%' }, { drawSVG:'100%', ease:Power1.easeOut }, 1.6)
  .fromTo('#section-1-caret-2', .6, { autoAlpha:0, x:-50 }, { autoAlpha:1, x:0, ease:Expo.easeOut }, 2.05)


  //repeat section 1
  //.fromTo('#section-2-rotation', .5, { autoAlpha:0 }, { autoAlpha:1, ease:Power1.easeOut }, 2)
  //.fromTo('#section-2-rotation', 3, { transformOrigin:'center center', rotation: 360 }, { rotation:0, ease:Power0.easeNone, onComplete:runRotation2 }, 2)


  //section 2
  .fromTo('#section-2-path-6', .8, { drawSVG: '0%' }, { drawSVG:'100%', ease:Power1.easeOut }, 2.1)
  .fromTo('#section-2-caret-6', .8, { autoAlpha:0, x:-50 }, { autoAlpha:1, x:0, ease:Expo.easeOut }, 2.55)
  .fromTo('#section-2-path-2', .8, { drawSVG: '0%' }, { drawSVG:'100%', ease:Power1.easeOut }, 2.2)
  .fromTo('#section-2-caret-2', .8, { autoAlpha:0, x:-50 }, { autoAlpha:1, x:0, ease:Expo.easeOut }, 2.65)

  .fromTo('#section-2-path-3', .8, { autoAlpha:1 }, { drawSVG:'100%', ease:Power1.easeOut }, 2.7)
  .fromTo('#section-2-path-4', .8, { autoAlpha:1 }, { drawSVG:'100%', ease:Power1.easeOut }, 2.8)
  .fromTo('#section-2-caret-3', .8, { autoAlpha:0, x:50 }, { autoAlpha:1, x:0, ease:Expo.easeOut }, 3.45)


  .fromTo('#section-2-path-1', .8, { drawSVG: '0%' }, { drawSVG:'100%', ease:Power1.easeOut }, 3.1) ////----------///1
  .fromTo('#section-2-caret-1', .8, { autoAlpha:0, x:-50 }, { autoAlpha:1, x:0, ease:Expo.easeOut }, 3.55)
  .fromTo('#section-2-path-5', .8, { drawSVG: '0%' }, { drawSVG:'100%', ease:Power1.easeOut }, 3.2)
  .fromTo('#section-2-caret-5', .8, { autoAlpha:0, x:-50 }, { autoAlpha:1, x:0, ease:Expo.easeOut }, 3.65)



  //repeat section 2
  .fromTo('#section-3-rotation', .5, { autoAlpha:0 }, { autoAlpha:1, ease:Power1.easeOut }, 2.4)
  .fromTo('#section-3-rotation', 3, { transformOrigin:'center center', rotation: 360 }, { rotation:0, ease:Power0.easeNone, onComplete:runRotation3 }, 2.4)


//////////////////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\


  //section 3
  .fromTo('#section-3-path-2', .8, { drawSVG: '0%' }, { drawSVG:'100%', ease:Power1.easeOut }, 3.6) //** **//
  .fromTo('#section-3-caret-2', .8, { autoAlpha:0, x:-50 }, { autoAlpha:1, x:0, ease:Expo.easeOut }, 4.05)
  .fromTo('#section-3-path-4', .8, { drawSVG: '0%' }, { drawSVG:'100%', ease:Power1.easeOut }, 3.6)
  .fromTo('#section-3-path-7', .8, { drawSVG: '0%' }, { drawSVG:'100%', ease:Power1.easeOut }, 3.7)
  .fromTo('#section-3-path-8', .8, { drawSVG: '0%' }, { drawSVG:'100%', ease:Power1.easeOut }, 3.7)
  .fromTo('#section-3-caret-8', .8, { autoAlpha:0, x:-50 }, { autoAlpha:1, x:0, ease:Expo.easeOut }, 4.15)

  .fromTo('#section-3-path-5', .8, { autoAlpha:1 }, { drawSVG:'100%', ease:Power1.easeOut }, 4.2)
  .fromTo('#section-3-caret-5', .8, { autoAlpha:0, x:50 }, { autoAlpha:1, x:0, ease:Expo.easeOut }, 4.65)
  .fromTo('#section-3-path-6', .8, { autoAlpha:1 }, { drawSVG:'100%', ease:Power1.easeOut }, 4.3)

  .fromTo('#section-3-path-3', .8, { drawSVG: '0%' }, { drawSVG:'100%', ease:Power1.easeOut }, 4.6)
  .fromTo('#section-3-path-1', .8, { drawSVG: '0%' }, { drawSVG:'100%', ease:Power1.easeOut }, 4.7) ////----------///2
  .fromTo('#section-3-caret-1', .8, { autoAlpha:0, x:-50 }, { autoAlpha:1, x:0, ease:Expo.easeOut }, 5.15)
  .fromTo('#section-3-path-9', .8, { drawSVG: '0%' }, { drawSVG:'100%', ease:Power1.easeOut }, 4.7) ////----------///3
  .fromTo('#section-3-caret-9', .8, { autoAlpha:0, x:-50 }, { autoAlpha:1, x:0, ease:Expo.easeOut }, 5.15)



  //////////////////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\


  //section 4
  .fromTo('#section-4-path-1', .8, { drawSVG: '0%' }, { drawSVG:'100%', ease:Power1.easeOut }, 5)
  .fromTo('#section-4-caret-1', .8, { autoAlpha:0, x:-50 }, { autoAlpha:1, x:0, ease:Expo.easeOut }, 5.45)
  .fromTo('#section-6-path-6', .8, { drawSVG: '0%' }, { drawSVG:'100%', ease:Power1.easeOut }, 5.1)
  .fromTo('#section-4-caret-6', .8, { autoAlpha:0, x:-50 }, { autoAlpha:1, x:0, ease:Expo.easeOut }, 5.55)

  .fromTo('#section-1-path-3', .8, { autoAlpha:01}, { drawSVG:'100%', ease:Power1.easeOut }, 5.6)
  .fromTo('#section-4-caret-3', .8, { autoAlpha:0, x:50 }, { autoAlpha:1, x:0, ease:Expo.easeOut }, 6.05)
  .fromTo('#section-4-path-4', .8, { autoAlpha:1 }, { drawSVG:'100%', ease:Power1.easeOut }, 5.7)

  .fromTo('#section-4-path-2', .8, { drawSVG: '0%' }, { drawSVG:'100%', ease:Power1.easeOut }, 6) ////----------///4
  .fromTo('#section-4-path-5', .8, { drawSVG: '0%' }, { drawSVG:'100%', ease:Power1.easeOut }, 6.05) ////----------///5


  //repeat section 3
  .fromTo('#section-4-rotation', .5, { autoAlpha:0 }, { autoAlpha:1, ease:Power1.easeOut }, 3.8)
  .fromTo('#section-4-rotation', 3, { transformOrigin:'center center', rotation: 360 }, { rotation:0, ease:Power0.easeNone, onComplete:runRotation4 }, 3.8)


  //reveal last dot
  .fromTo('#section-5-circle-2-red-dot', 1.2, { autoAlpha:0, scale:.8 }, { autoAlpha:1, scale:1, ease:Back.easeOut }, 6.4)

  ///.fromTo('#ourProcess', 7, { scale:.7, rotationY:-20 }, { scale:1, rotationY:0, ease:Power1.easeOut }, 0)
  ;


function runRotation2() {
  var rotate2 = new TimelineMax({ repeat:-1 });
  rotate2.fromTo('#section-2-rotation', 3, { transformOrigin:'center center', rotation: 360 }, { autoAlpha:1, rotation:0, ease:Power0.easeNone });
}

function runRotation3() {
  var rotate3 = new TimelineMax({ repeat:-1 });
  rotate3.fromTo('#section-3-rotation', 3, { transformOrigin:'center center', rotation: 360 }, { autoAlpha:1, rotation:0, ease:Power0.easeNone });
}

function runRotation4() {
  var rotate4 = new TimelineMax({ repeat:-1 });
  rotate4.fromTo('#section-4-rotation', 3, { transformOrigin:'center center', rotation: 360 }, { autoAlpha:1, rotation:0, ease:Power0.easeNone });
}

// ourProcessAni.timeScale(1.2);
// ourProcessAni.play();

function pauseAni() {
  ourProcessAni.pause();
}
