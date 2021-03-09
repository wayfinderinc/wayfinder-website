var d = document;

if ( window.innerWidth <= 414 ) {
  // Draggable.create('.img-graph', { type:'x', bounds:'.graph' });
  // TweenLite.set('.copyrite', { rotation:90, transformOrigin:'bottom right', x:-10.5, y:-5 });
  // TweenLite.set('.social-icons', { rotation:-90, transformOrigin:'bottom left', x:15, y:-6 });
  TweenLite.set('.copyrite', { rotation:90, transformOrigin:'bottom right', x:-10.5, y:-55 });
  TweenLite.set('.social-icons', { rotation:-90, transformOrigin:'bottom left', x:15, y:-56 });
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

function btnWorkWithUsOver() {
  TweenLite.to('.btn', .2, { backgroundColor:'#444', color:'#fff', ease:Expo.easeOut });
}

function btnWorkWithUsOut() {
  TweenLite.to('.btn', .2, { backgroundColor:'transparent', color:'#444', ease:Expo.easeOut });

}

function openHome() {
  var url = '../../';
  window.open(url, '_self');
}

function openAbout() {
  var url = '../../about.html';
  window.open(url, '_self');
}

function openWork() {
  var url = '../../work.html';
  window.open(url, '_self');
}

function openContact() {
  var url = '../../contact.html';
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
