var modal = (function () {
	var 
	method = {},
	$modal,
	$header,
	$loader,
	$content,
	$divstohideshow,
	$carousels,
	$maincontent,
	$scrollposition,
	$isotopes,
	$title,
	$close;
	
	$divstohideshow = $('#main-header-container, #main-content-container, #main-footer-container, #secondary-footer-container');
	$maincontent = $divstohideshow.filter('#main-content-container');

	// Open the modal
	method.open = function (settings) {
		$scrollposition = $(window).scrollTop();
		$carousels = $maincontent.find('.carousel');
		$isotopes = $maincontent.find('#iso-content');
		$content.empty().append(settings.content);
		$title.empty().append(settings.title);
		$modal.fadeIn('fast', function() {
            $divstohideshow.hide();
			if ($carousels.hasClass('slick-initialized')) {
				$carousels.slick('unslick');
			}
			if ($isotopes) {
				$isotopes.packery('destroy');
			}
        });
	};

	// Close the modal
	method.close = function () {
        $divstohideshow.show();
		$carousels = $maincontent.find('.carousel');
		$isotopes = $maincontent.find('#iso-content');
		if ($carousels) {
			$carousels.slick({
				adaptiveHeight: true,
				arrows: false,
				autoplay: true,
				autoplaySpeed: 5000,
				dots: true,
				infinite: true
			});
		}
		if ($isotopes) {
			$isotopes.packery({
				itemSelector: '.entry',
				gutter: '.gutter-sizer',
				columnWidth: '.grid-sizer',
				percentPosition: true
			});
		}
		$('html, body').scrollTop($scrollposition);
		$modal.fadeOut('fast', function () {
			$content.empty();
			$title.empty();
		});
	};

	// Generate the HTML and add it to the document
	$modal = $('<div id="modal"></div>');
	$content = $('<div id="modal-content"></div>');
	$header = $('<div id="modal-header"></div>');
	$loader = $('<div id="modal-loader"></div>');
	$headerwrap = $('<header class="wrapper clearfix"></header>');
	$title = $('<h1 id="modal-title">Title Here</h1>');
	$close = $('<a id="modal-close" href="#"></a>');

	$modal.hide();
	$headerwrap.append($title, $close);
	$header.append($headerwrap);
	$modal.append($loader, $header, $content);

	$(document).ready(function () {
		$('body').append($modal);
	});

	$close.click(function (e) {
		e.preventDefault();

		var URL = window.location.href;
		var newLocation = '';
		var newTitle = '';
		var newPageName = '';
		// console.log(currentLocation);

		switch (true) {
			case ((URL.indexOf('articles') >= 0) && (URL.indexOf('home') === -1) && (URL.indexOf('about') === -1)):
				if (URL.indexOf('tag') >= 0) {
					var arrTempTag = URL.split('articles/tag/');
					var arrTagStr = arrTempTag[1].split('/detail');
					var strTag = arrTagStr[0];
					newLocation = '/articles/tag/' + strTag;
				} else if (URL.indexOf('category') >= 0) {
					var arrTempCat = URL.split('articles/category/');
					var arrCatStr = arrTempCat[1].split('/detail');
					var strCat = arrCatStr[0];
					newLocation = '/articles/category/' + strCat;
				} else {
					newLocation = '/articles';
				}
				newTitle = 'Articles';
				newPageName = 'articles';
				break;
			case ((URL.indexOf('portfolio') >= 0) && (URL.indexOf('home') === -1) && (URL.indexOf('about') === -1)):
				if (URL.indexOf('tag') >= 0) {
					var arrTempTag = URL.split('portfolio/tag/');
					var arrTagStr = arrTempTag[1].split('/detail');
					var strTag = arrTagStr[0];
					newLocation = '/portfolio/tag/' + strTag;
				} else if (URL.indexOf('category') >= 0) {
					var arrTempCat = URL.split('portfolio/category/');
					var arrCatStr = arrTempCat[1].split('/detail');
					var strCat = arrCatStr[0];
					newLocation = '/portfolio/category/' + strCat;
				} else {
					newLocation = '/portfolio';
				}
				newTitle = 'Portfolio';
				newPageName = 'portfolio';
				break;
			case ((URL.indexOf('about') >= 0) && (URL.indexOf('team') === -1)):
				newLocation = '/about';
				newTitle = 'About';
				newPageName = 'about';
				break;
			case (URL.indexOf('team') >= 0):
				var arrTemp = URL.split('team/');
				var arrMember = arrTemp[1].split('/articles/detail');
				var teamMember = arrMember[0];
				newLocation = '/about/team/' + teamMember;
				newTitle = 'Team';
				newPageName = 'team';
				break;
			case (URL.indexOf('home') >= 0):
				newLocation = '/';
				newTitle = 'Home';
				newPageName = 'home';
				break;
			default:
				newLocation = '/';
				newTitle = 'Home';
				newPageName = 'home';
				break;
		}

		setTitle(newLocation);
		var stateObj = { newPage: newPageName };
		history.pushState(stateObj, newTitle, newLocation);

		method.close();
	});

	return method;
}());