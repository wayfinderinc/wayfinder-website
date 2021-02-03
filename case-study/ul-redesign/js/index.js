var d = document;

if ( window.innerWidth < 414 ) {
  Draggable.create('.img-graph', { type:'x', bounds:'.graph' });
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
  var url = 'https://wayfinder-ux.com/';
  window.open(url, '_blank');
}

function openAbout() {
  var url = 'https://wayfinder-ux.com/#/about';
  window.open(url, '_blank');
}

function openWork() {
  var url = 'https://wayfinder-ux.com/#/work';
  window.open(url, '_blank');
}

function openContact() {
  var url = 'https://wayfinder-ux.com/#/contact';
  window.open(url, '_blank');
}
