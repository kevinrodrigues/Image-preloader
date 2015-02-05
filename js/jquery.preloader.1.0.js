/*  Author: Kevin.Rodrigues.
	Purpose: Jquery Plugin to load images.
*/
;(function ( $, window, document, undefined ) {

	"use strict";

		//Start plugin defaults..
		$.fn.preloader = function(options) {
			// some defaults
			var defaults = {
				delay: 200,
				preloadParent:'a',
				checkTimer: 300,
				ondone: function() {
					//callback once images have loaded.
				}

			};
		};

})( jQuery, window, document );