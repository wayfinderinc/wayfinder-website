var d = document,
    menuStatus = 'closed',
    wfPath = null;

function menuToggle() {
    if ( menuStatus === 'closed' ) {
        gsap.to('.wf-logo-color', { duration:.4, fill:'#ffffff', ease:'expo.out' })
        gsap.to('.mobile-nav', { duration:.4, background:'#ef4f53', ease:'expo.out' });
        if ( wfPath === 'home' ) {
            gsap.to('.hero .learn-more', { duration:.4, autoAlpha:0, ease:'expo.out' });
        }
        gsap.to('#lineTop', { duration:.4, background:'#ffffff', transformOrigin:'top left', rotation:45, x:5, y:-1.5, ease:'expo.out' });
        gsap.to('#lineBttm', { duration:.4, background:'#ffffff', transformOrigin:'bottom left', rotation:-45, x:5, y:1.5, ease:'expo.out' });
        gsap.to('#lineMid', { duration:.2, background:'#ffffff', autoAlpha:0, ease:'expo.out' });
        menuStatus = 'open';
        openMobileMenu();
    } else {
        if (headerStatus === 'inhero') {
            gsap.to('.mobile-nav', { duration:.2, background:'transparent', ease:'expo.out' });
            gsap.to('.wf-logo-color', { duration:.2, fill:'#ffffff', ease:'expo.out' });
            gsap.to('#lineTop', { duration:.2, background:'#ffffff', transformOrigin:'top left', rotation:0, x:0, y:0, ease:'expo.out' });
            gsap.to('#lineBttm', { duration:.2, background:'#ffffff', transformOrigin:'bottom left', rotation:0, x:0, y:0, ease:'expo.out' });
            gsap.to('#lineMid', { duration:.1, background:'#ffffff', autoAlpha:1, ease:'expo.out' });
        } else {
            gsap.to('.mobile-nav', { duration:.2, background:'rgba(255,255,255,.85)', ease:'expo.out' });
            gsap.to('.wf-logo-color', { duration:.2, fill:'#444444', ease:'expo.out' });
            gsap.to('#lineTop', { duration:.2, background:'#444444', transformOrigin:'top left', rotation:0, x:0, y:0, ease:'expo.out' });
            gsap.to('#lineBttm', { duration:.2, background:'#444444', transformOrigin:'bottom left', rotation:0, x:0, y:0, ease:'expo.out' });
            gsap.to('#lineMid', { duration:.1, background:'#444444', autoAlpha:1, ease:'expo.out' });
        }
        if ( wfPath === 'home' ) {
            gsap.to('.hero .learn-more', { duration:.4, autoAlpha:1, ease:'expo.out' });
        }
        menuStatus = 'closed';
        closeMobileMenu();
    }
}

function openMobileMenu() {
    gsap.fromTo('.nav-menu', { display:'block', autoAlpha:0 }, { duration: .4, autoAlpha:1, ease:'expo.out' });
}

function closeMobileMenu() {
    if (headerStatus === 'inhero') {
        gsap.to('.nav-menu', { duration: .2, autoAlpha:0, ease:'expo.out', onComplete:function() {
            gsap.set('.nav-menu', { display:'none' });
        } });
    } else {
        gsap.set('.nav-menu', { display:'none' });
    }
}

var headings = document.getElementsByTagName('h2');
for ( var i=0; i<headings.length; i++ ) {
  var h2s = headings[i].innerHTML.split( ' ' );
  h2s[h2s.length-2] += "&nbsp;" + h2s[h2s.length-1];
  h2s.pop();
  headings[i].innerHTML = h2s.join( ' ' );
}

$('.social-icons .linkedin').click(function(e) {
    window.open('https://www.linkedin.com/company/wayfinder-ux', '_blank');
});

$('.social-icons .instagram').click(function(e) {
    window.open('https://www.instagram.com/wayfinder.ux/', '_blank');
});

$('.social-icons .dribbble').click(function(e) {
    window.open('https://dribbble.com/wayfinder', '_blank');
});