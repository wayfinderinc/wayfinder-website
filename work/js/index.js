var d = document;

if ( window.innerWidth <= 414 ) {
  //Draggable.create('.img-graph', { type:'x', bounds:'.graph' });
  // TweenLite.set('.copyrite', { rotation:90, transformOrigin:'bottom right', x:-10.5, y:-5 });
  // TweenLite.set('.social-icons', { rotation:-90, transformOrigin:'bottom left', x:15, y:-6 });
  TweenLite.set('.copyrite', { rotation:90, transformOrigin:'bottom right', x:-12, y:-55 });
  TweenLite.set('.social-icons', { rotation:-90, transformOrigin:'bottom left', x:16, y:-56 });
}

// if ( window.innerWidth => 1280 && < 1440 ) {
//
// }

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

function btnWorkWithUsOver() {
  TweenLite.to('.btn', .2, { backgroundColor:'#444', color:'#fff', ease:Expo.easeOut });
}

function btnWorkWithUsOut() {
  TweenLite.to('.btn', .2, { backgroundColor:'transparent', color:'#444', ease:Expo.easeOut });

}

function ulVerifyCaseStudy() {
  var url = 'case-study/ul-verify.html';
  window.open(url, '_self');
}

function parkjockeyCaseStudy() {
  var url = 'case-study/parkjockey.html';
  window.open(url, '_self');
}

function ulMedicalCaseStudy() {
  var url = 'case-study/ul-medicalSolutions.html';
  window.open(url, '_self');
}

function tudorCaseStudy() {
  var url = 'case-study/tudor-ice.html';
  window.open(url, '_self');
}

function chabadCaseStudy() {
  var url = 'case-study/chabad.html';
  window.open(url, '_self');
}

function fedexCaseStudy() {
  var url = 'case-study/fedex.html';
  window.open(url, '_self');
}

function celebrityCaseStudy() {
  var url = 'case-study/celebrity.html';
  window.open(url, '_self');
}

function ulPortalCaseStudy() {
  var url = 'case-study/ul-customer-portal.html';
  window.open(url, '_self');
}

function walgreensCaseStudy() {
  var url = 'https://wayfinder-ux.com/case-study/walgreens/';
  window.open(url, '_self');
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

if ( window.innerWidth >= 1280 ) {

  function ULVerifyOver() {
    TweenLite.to('.case-study-1-bg', .6, { scale:.94, ease:Expo.easeOut });
    TweenLite.to('.case-study-1 .client-info', .8, { x:20, y:8, ease:Expo.easeOut });
  }
  function ULVerifyOut() {
    TweenLite.to('.case-study-1-bg', .4, { scale:1, ease:Expo.easeOut });
    TweenLite.to('.case-study-1 .client-info', .8, { x:0, y:0, ease:Expo.easeOut });
  }

  function parkjockeyOver() {
    TweenLite.to('.case-study-2-bg', .6, { scale:.94, ease:Expo.easeOut });
    TweenLite.to('.case-study-2 .client-info', .8, { x:8, y:16, ease:Expo.easeOut });
  }
  function parkjockeyOut() {
    TweenLite.to('.case-study-2-bg', .4, { scale:1, ease:Expo.easeOut });
    TweenLite.to('.case-study-2 .client-info', .8, { x:0, y:0, ease:Expo.easeOut });
  }

  function ULMedicalOver() {
    TweenLite.to('.case-study-3-bg', .6, { scale:.94, ease:Expo.easeOut });
    TweenLite.to('.case-study-3 .client-info', .8, { x:4, y:8, ease:Expo.easeOut });
  }
  function ULMedicalOut() {
    TweenLite.to('.case-study-3-bg', .4, { scale:1, ease:Expo.easeOut });
    TweenLite.to('.case-study-3 .client-info', .8, { x:0, y:0, ease:Expo.easeOut });
  }

  function tudorOver() {
    TweenLite.to('.case-study-4-bg', .6, { scale:.94, ease:Expo.easeOut });
    TweenLite.to('.case-study-4 .client-info', .8, { x:4, y:8, ease:Expo.easeOut });
  }
  function tudorOut() {
    TweenLite.to('.case-study-4-bg', .4, { scale:1, ease:Expo.easeOut });
    TweenLite.to('.case-study-4 .client-info', .8, { x:0, y:0, ease:Expo.easeOut });
  }

  function chabadOver() {
    TweenLite.to('.case-study-5-bg', .6, { scale:.94, ease:Expo.easeOut });
    TweenLite.to('.case-study-5 .client-info', .8, { x:12, y:16, ease:Expo.easeOut });
  }
  function chabadOut() {
    TweenLite.to('.case-study-5-bg', .4, { scale:1, ease:Expo.easeOut });
    TweenLite.to('.case-study-5 .client-info', .8, { x:0, y:0, ease:Expo.easeOut });
  }

  function walgreensOver() {
    TweenLite.to('.case-study-9-bg', .6, { scale:.94, ease:Expo.easeOut });
    TweenLite.to('.case-study-9 .client-info', .8, { x:8, y:8, ease:Expo.easeOut });
  }
  function walgreensOut() {
    TweenLite.to('.case-study-9-bg', .4, { scale:1, ease:Expo.easeOut });
    TweenLite.to('.case-study-9 .client-info', .8, { x:0, y:0, ease:Expo.easeOut });
  }

  function fedexOver() {
    TweenLite.to('.case-study-6-bg', .6, { scale:.94, ease:Expo.easeOut });
    TweenLite.to('.case-study-6 .client-info', .8, { x:4, y:16, ease:Expo.easeOut });
  }
  function fedexOut() {
    TweenLite.to('.case-study-6-bg', .4, { scale:1, ease:Expo.easeOut });
    TweenLite.to('.case-study-6 .client-info', .8, { x:0, y:0, ease:Expo.easeOut });
  }

  function celebrityOver() {
    TweenLite.to('.case-study-7-bg', .6, { scale:.94, ease:Expo.easeOut });
    TweenLite.to('.case-study-7 .client-info', .8, { x:20, y:8, ease:Expo.easeOut });
  }
  function celebrityOut() {
    TweenLite.to('.case-study-7-bg', .4, { scale:1, ease:Expo.easeOut });
    TweenLite.to('.case-study-7 .client-info', .8, { x:0, y:0, ease:Expo.easeOut });
  }

  function ULPortalOver() {
    TweenLite.to('.case-study-8-bg', .6, { scale:.94, ease:Expo.easeOut });
    TweenLite.to('.case-study-8 .client-info', .8, { x:4, y:8, ease:Expo.easeOut });
  }
  function ULPortalOut() {
    TweenLite.to('.case-study-8-bg', .4, { scale:1, ease:Expo.easeOut });
    TweenLite.to('.case-study-8 .client-info', .8, { x:0, y:0, ease:Expo.easeOut });
  }

  // function initShades() {
  //   TweenLite.to('.glasses', 1, { scale:1.3, ease:Expo.easeOut } );
  //   TweenLite.to('.glasses', .8, { scale:1, ease:Elastic.easeOut.config(1.5, 0.3), delay:.9 } );
  // }

  // function initPlane()
  //   TweenMax.to('.plane', 5, {
  //     bezier:{
  //       type:"soft", values:[{x:0, y:0}, {x:300, y:-300}, {x:600, y:0}, {x:300, y:300}, {x:0, y:0}],
  //       autoRotate:true },
  //       ease:Power1.easeInOut
  //     });
  // }

}
