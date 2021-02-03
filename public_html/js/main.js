function init(el,loaderEl) {
	$(loaderEl).show();
    var carousels = el.find('.carousel');
    var dots = el.find('.dots');
    var codes = el.find('code');
    var comparables = el.find('.comparable');
	var selects = el.find('.select .selected');
	var pictures = el.find('.hero-full, .tile-photo, .client-contact li, figure img, .carousel img, .footer-photo, .compare img');
	var isodiv = el.find('#iso-content');
    var newHref = location.pathname;
    
	$(carousels).on('init', function(slick){
		pictures = pictures.add('.slick-cloned');
	});
	
    $(carousels).slick({
        adaptiveHeight: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 5000,
        dots: true,
		infinite: true
    });

    $(dots).on('click', '.dot', function(e) {
        e.preventDefault();
    });
    
    $(codes).each(function(i, block) {
		hljs.highlightBlock(block);
	});
	
	$(selects).each(function(i, block) {
		var selectEl = $(this);
		var newLabel = selectEl.attr('title');
		selectEl.closest('header').find('.select-trigger').text(newLabel);
	});
    
    $(comparables).slider();

	$('#rating').rating();

	isodiv.packery({
		itemSelector: '.entry',
		gutter: '.gutter-sizer',
		columnWidth: '.grid-sizer',
		percentPosition: true
	});
    
    processSlides(el);
    scrollContent(el);
    buildMap();
	resetImages(pictures, loaderEl);
    hideShowFooter(newHref);
}

function processSlides(el) {
    var strLi = '';
    var processSections = el.find('.our-process section');
    var processDots = el.find('.process-dots');
    var processContainer = el.find('.our-process');
    
    $(processSections).each(function(index, element) {
        strLi += '<li class="process-dot"><a href="#' + $(this).attr('id') + '"></a></li>';
    }).waypoint(function(direction) {
        if (direction === 'down') {
            var section = $(this).attr('id');
            resetDots(section);
        }
	},{offset: 60}).waypoint(function(direction) {
		if (direction === 'up') {
            var section = $(this).attr('id');
            resetDots(section);
        }
	},{offset:function() {return -$(this).height() + 450;}}).find('footer').on('click', 'a', function(e) {
		e.preventDefault();
		var nextSection = $(this).closest('section').next('section');
		console.log(nextSection.attr('class'));
		$('html,body').scrollTo(nextSection, nextSection);
	});

    $(processDots).append(strLi).on('click', 'a', function(e) {
        e.preventDefault();
        $('html,body').scrollTo(this.hash, this.hash);
    });
    
    $(processContainer).waypoint(function(direction) {
        if (direction === 'down') {
            $(processDots).fadeIn('fast');
        } else {
            $(processDots).fadeOut('fast');
        }
    },{offset: '50%'}).waypoint(function(direction) {
        if (direction === 'up') {
            $(processDots).fadeIn('fast');
        } else {
            $(processDots).fadeOut('fast');
        }
    },{offset:function() {return -$(this).height() + 500;}});
}

function resetDots(selectedSection) {
    $('.process-dots a').removeClass('selected');
    $('.process-dots a[href=#' + selectedSection + ']').addClass('selected');
}

function scrollContent(el) {
    var elementId = el.attr('id');
    if (elementId === 'content-main') {
        $('html, body').scrollTo('0px', 800);
    } else {
        $(el).scrollTo('0px', 800);
    }
}

function resetImages(els, loaderEl) {
	var imageSrc = "data-image-l"
	
	if (Modernizr.mq('all and (min-width: 1024px)')) {
		imageSrc = "data-image-h";
	}

	els.each(function(){
		var bkgdImg = new Image();
		var el = $(this);
		var isImg = el.is('img');
		var newBkgd = el.attr(imageSrc);

		bkgdImg.onload = function() {
			if (isImg) {
				replaceImageSrc(el, newBkgd);
                console.log('image! ' + newBkgd);
			} else {
				replaceElementBackground(el, newBkgd);
                console.log('div! ' + newBkgd);
			}
		}

		bkgdImg.src = newBkgd;
	});
	
	$(loaderEl).fadeOut('fast');
}

function replaceImageSrc(el, newSrc) {
	el.attr('src', newSrc);
}

function replaceElementBackground(el, newSrc) {
	el.css('background-image','url(' + newSrc + ')');
}

function buildMap() {
    var mapEl = document.getElementById("map-canvas");
    
    var styles = [
        {
            featureType: "all",
            stylers: [
                { hue: "#ff4a4f" },
                { saturation: -100 },
                { lightness: -30 }
            ]
        },{
            featureType: "poi.business",
            elementType: "labels",
            stylers: [
                { visibility: "off" }
            ]
        }
    ];

    var mapOptions = {
        center: {lat: 25.842310, lng: -80.184541},
        zoom: 15,
        scrollwheel: false,
        panControl: true,
        zoomControl: true,
        mapTypeControl: false,
        scaleControl: false,
        streetViewControl: false,
        overviewMapControl: false,
        styles: styles
    };
    
    if (mapEl) {
        var map = new google.maps.Map(mapEl,mapOptions);
    }
}

function isExternal(URL) {
    if (URL.indexOf('wayfinder.ws') >= 0 || URL.charAt(0) === '/') {
        return false;
    } else {
        return true;
    }
}

function showLoc() {
  var oLocation = location, aLog = ["Property (Typeof): Value", "location (" + (typeof oLocation) + "): " + oLocation ];
  for (var sProp in oLocation){
    aLog.push(sProp + " (" + (typeof oLocation[sProp]) + "): " +  (oLocation[sProp] || "n/a"));
  }
  console.log(aLog.join("\n"));
}

function isMain(URL) {
    switch (URL) {
        case 'http://www.wayfinder.ws/':
        case 'http://www.wayfinder.ws':
        case '/':
        case 'http://www.wayfinder.ws/portfolio':
        case '/portfolio':
        case 'http://www.wayfinder.ws/articles':
        case '/articles':
        case 'http://www.wayfinder.ws/about':
        case '/about':
        case 'http://www.wayfinder.ws/contact':
        case '/contact':
            return true;
            break;
        default:
            if ((URL.indexOf('tag') >= 0 && URL.indexOf('detail') === -1) || (URL.indexOf('category') >= 0 && URL.indexOf('detail') === -1) || (URL.indexOf('team') >= 0 && URL.indexOf('detail') === -1) ) {
                return true;
                break;
            } else {
                return false;
                break;
            }
    }
}

function setTitle(URL) {
	var sectionTitle = $('#main-header-container .title-section');
	var logoText = $('#main-header-container .logo-text');
    var footerDiv = $('#main-footer-container');

	switch (true) {
		case (URL.indexOf('articles') >= 0):
			logoText.css('display', 'none');
			sectionTitle.text('Articles').css('display', 'inline-block');
            $(document).attr("title", "Articles - Wayfinder");
			break;
		case (URL.indexOf('portfolio') >= 0):
			logoText.css('display', 'none');
			sectionTitle.text('Portfolio').css('display', 'inline-block');
            $(document).attr("title", "Portfolio - Wayfinder");
			break;
		case ((URL.indexOf('about') >= 0) && (URL.indexOf('team') === -1)):
			logoText.css('display', 'none');
			sectionTitle.text('About').css('display', 'inline-block');
            $(document).attr("title", "About - Wayfinder");
			break;
        case (URL.indexOf('team') >= 0):
            logoText.css('display', 'none');
            sectionTitle.text('Team').css('display', 'inline-block');
            $(document).attr("title", "Team - Wayfinder");
            break;
		case (URL.indexOf('contact') >= 0):
			logoText.css('display', 'none');
			sectionTitle.text('Contact').css('display', 'inline-block');
            $(document).attr("title", "Contact - Wayfinder");
			break;
        case (URL.indexOf('home') >= 0):
            sectionTitle.css('display', 'none').text('Home');
            logoText.css('display', 'inline-block');
            $(document).attr("title", "Home - Wayfinder");
            break;
		default:
			sectionTitle.css('display', 'none').text('Home');
			logoText.css('display', 'inline-block');
            $(document).attr("title", "Home - Wayfinder");
			break;
	}
}

function hideShowFooter(URL) {
    var footerDiv = $('#main-footer-container');

    if (URL.indexOf('contact') >= 0) {
        footerDiv.addClass('footer-contact');
    } else {
        footerDiv.removeClass('footer-contact');
    }
}

$(document).ready(function() {
    var targetEl = $('#content-main');
	var loaderEl = $('#loader');
    
    window.onload = function () {
        var newHref = location.pathname;
		// console.log('onload!');
        
        if (isMain(newHref) === false) {
            $("#content-temp").load(newHref, function() {
                var that = $(this);
                var newTitle = that.find('#modal-title-span').text();
                var newContent = that.find('#ajax');
                modal.open({content: newContent, title: newTitle});
            });
        }
		setTitle(newHref);
    };
    
    window.onpopstate = function() {
        var newHref = location.pathname;
		// console.log('popstate!');
        
        if (isMain(newHref) === false) {
            $("#content-temp").load(newHref, function() {
                var that = $(this);
                var newTitle = that.find('#modal-title-span').text();
                var newContent = that.find('#ajax');
                modal.open({content: newContent, title: newTitle});
            });
        } else {
            modal.close();
            $("#content-main").load(newHref);
        }
		setTitle(newHref);
    };
    
    $('body').on('click', 'a:not(.menu):not([href^=\'mailto\']):not([href=\'#\'])', function(e) {
        var theLink = $(this);
        var currentHref = location.href;
        var newHref = theLink.attr('href');
        var linkID = theLink.attr('id');
        
        if (isExternal(newHref) === false || linkID === 'link-next' || linkID === 'link-prev' || linkID === 'link-entry-next') {
            e.preventDefault();
			
			if (newHref !== currentHref) {
				history.pushState('', 'New URL: ' + newHref, newHref);
			}
            
            if (isMain(newHref) === false) {
                $("#content-temp").load(newHref, function() {
                    var that = $(this);
                    var newTitle = that.find('#modal-title-span').text();
                    var newContent = that.find('#ajax');
                    modal.open({content: newContent, title: newTitle});
                });
            } else {
                modal.close();
				if (newHref !== currentHref) {
                	$("#content-main").load(newHref);
				}
            }
			setTitle(newHref);
        }
	});

	$('a.menu').click(function(e) {
        e.preventDefault();
		$('#main-navigation-container').fadeToggle();
		$('#main-header-container').toggleClass('menu-open');
	});
    
    $('#main-navigation-container').on('click', 'a', function(e) {
        $('#main-navigation-container').fadeToggle();
		$('#main-header-container').toggleClass('menu-open');
    });
	
	$('body').on('click', '.select a', function(e) {
        e.preventDefault();
		$('.select ul').fadeToggle();
	});
    
    $('body').on('mouseenter', '.xd-image, .xd-chooser', function() {
        $('.capabilities-list li, .id-image, .id-chooser').not('.xd, .xd-id').css({'opacity': 0.2});
    }).on('mouseleave', '.xd-image, .xd-chooser', function() {
        $('.capabilities-list li, .id-image, .id-chooser').not('.xd, .xd-id').css({'opacity': 1.0});
    });
    
    $('body').on('mouseenter', '.id-image, .id-chooser', function() {
        $('.capabilities-list li, .xd-image, .xd-chooser').not('.id, .xd-id').css({'opacity': 0.2});
    }).on('mouseleave', '.id-image, .id-chooser', function() {
        $('.capabilities-list li, .xd-image, .xd-chooser').not('.id, .xd-id').css({'opacity': 1.0});
    });
    
    $('body').on('click', 'span.chooser', function(e) {
        var chooser = $(this);
        chooser.next('input[type=file]').click();
    });
    
    $('body').on('change', 'input[type=file]', function(e) {
        var fileField = $(this);
        var fileValue = fileField.val();
        fileField.prev('span.chooser').text(fileValue).parent().addClass('okay');
    });
    
    $('body').on('submit', '.contact form', function(e) {
        e.preventDefault();

        var formURL = '/';
        var formData = new FormData(this);
        $.ajax({
            url: formURL,
            type: 'POST',
            data: formData,
            contentType: false,
            cache: false,
            processData:false,
            error: function(jqXHR, textStatus, errorThrown) {
                var objError = textStatus + ': ' + errorThrown;
                $('#contact-error').text(objError).fadeIn('slow');
            },
            success: function(response, textStatus, jqXHR) {
                if (response.success) {
                    $('#contact-thanks').fadeIn('slow').next('#contact-error').fadeOut('fast').next('#contact-form').fadeOut('fast');
                } else {
                    var objError = response.error;

                    for (obj in objError) {
                        var errorField = '#' + obj;
                        $(errorField).next('.errors').fadeIn('slow').find('span').text(objError[obj]).closest('li').addClass('error');
                    }

                    $('#contact-error').fadeIn('slow');
                }
            }
        });
        return false;
    });

    init(targetEl, loaderEl);
});

$(document).ajaxComplete(function() {
    var newHref = location.pathname;
    
    if (isMain(newHref) === false) {
        var targetEl = $('#modal');
		var loaderEl = $('#modal-loader');
    } else {
        var targetEl = $('#content-main');
		var loaderEl = $('#loader');
    }
    
    init(targetEl, loaderEl);
});