(function ($){
	$.fn.slider = function(options){

		//default options
		var settings = $.extend($.fn.slider.defaultOptions, options);

		var init = function() {
			var $that = $(this);
			var $width = $that.width();
			var $firstWidth = Math.floor(100 * settings.initialPosition);
			$that.find('.compare img').width($width + 'px');
			$that.find('.compare:first-child').width($firstWidth + '%');
			if(settings.showInstruction) {
				var $instrDiv = $("<div></div>").addClass("instruction");
				$that.append($instrDiv);
			}
		}

		var resizeSlider = function() {
			var $that = $(this);
			var $width = $that.width();
			var $firstWidth = Math.floor(100 * settings.initialPosition);
			$that.find('.compare img').width($width + 'px');
			$that.find('.compare:first-child').width($firstWidth + '%');
			$that.find('.instruction').css('left', ($firstWidth - 10) + 'px');
		}

		var slideResize = function(e) {
			e.preventDefault();
			var width = e.offsetX==undefined ? e.pageX-e.currentTarget.offsetLeft : e.offsetX;
			$(this).find('.compare:first-child').width(width + 'px');
			$(e.currentTarget).children(".instruction").css('left', (width - 10) + 'px');
		}

		var enableSliderDrag = function(e) {
			e.preventDefault();
			$(this).css('cursor' , 'ew-resize').on('mousemove', slideResize).on('touchmove', slideResize);
		}

		var disableSliderDrag = function(e) {
			e.preventDefault();
			$(this).css('cursor', 'normal').off('mousemove').off('touchmove');
		}

		var redrawSlider = function(e) {
			return $('.comparison.responsive').each(resizeSlider);
		}
		
		$(window).on('resize', redrawSlider);
		return this.each(init).on(settings.triggerEvents,slideResize).on("mousedown", enableSliderDrag).on("mouseup", disableSliderDrag);
			
	};

	$.fn.slider.defaultOptions = {
			triggerEvents: "tap click",
			initialPosition: .5,
			showInstruction: true,
			instructionText: "Click and Drag"
	};	

}(jQuery));