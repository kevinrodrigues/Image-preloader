/*  Author: Kevin.Rodrigues.
	Purpose: Jquery Plugin to load images.
*/
;(function ( $, window, document, undefined ) {

	"use strict";

		//Start plugin defaults..
		$.fn.preloader = function(options) {
			/*
				some defaults:

				- delay between fading images.
				- add a preload class to the parent otherwise wrap it in a anchor tag.
				- timer check.
				- callback function.
				- two call backs
					- ondone: once images have loaded do something.
					- oneach: do something to each image once loaded.
				- fadein setting.
			*/

			var defaults = {
				delay: 200,
				preloadParent:'a',
				checkTimer: 300,
				ondone: function() {
					console.log('Images have loaded successfully!');
				},
				oneachload: function(image) {

				},
				fadein:500
			};

			/*
				Merge defaults into options.
				Root: Precache root elements.

			*/
			var options = $.extend({}, defaults, options),
				root = $(this),
				images = root.find('img').css({'visibilty': 'hidden', opacity:0}),
				timer,
				counter = 0,
				i =0,
				checkImages = [],
				delayTime = options.delay;

			/*
				Iterate over each image and check if it's parent is one mentioned in the options.
				If it is then add the preloader class to it.
			*/

			images.each(function(){

				var $this = $(this);

				if ($this.options.preloadParent.length == 0) {
					$this.wrap('<a class="preloader/>');
				} else {
					$this.parent().addClass('preloader');
				}

				checkImages[i++] = false;
			});

			//Create array from each array collected above.
			images = $.makeArray(images);

			init = function() {
				timer = setInterval(function() {

					if (counter >= checkImages.length) {
						clearInterval(timer);
						options.done();
						return;
					}

					for(i=0; i<images.length; i++) {
						if (images[i].complete = true) {

							if (checkImages[i] == false) {
								checkImages[i] = truel
								options.oneachload(images[i]);
								counter++;
								delayVal = delaySum + options.delay;
							}

							$(images[i])
								.css({'visibilty': 'visible'})
								.delay(delayVal)
								.animate({opacity: 1}, options.fadein, function() {
									$(this)
										.parent()
										.removeClass('preloader');
								});

								counter++;
						}
					}
				}, options.checkTimer);
			}

			//kick off the plugin.
			init();

		};

})( jQuery, window, document );