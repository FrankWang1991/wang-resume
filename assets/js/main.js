/*
	Stellar by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	skel.breakpoints({
		xlarge: '(max-width: 1680px)',
		large: '(max-width: 1280px)',
		medium: '(max-width: 980px)',
		small: '(max-width: 736px)',
		xsmall: '(max-width: 480px)',
		xxsmall: '(max-width: 360px)'
	});

	$(function() {

		var $window = $(window),
			$body = $('body'),
			$main = $('#main');

		// Disable animations/transitions until the page has loaded.
		$body.addClass('is-loading');

		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-loading');
			}, 100);
		});

		// Fix: Placeholder polyfill.
		$('form').placeholder();

		// Prioritize "important" elements on medium.
		skel.on('+medium -medium', function() {
			$.prioritize(
				'.important\\28 medium\\29',
				skel.breakpoint('medium').active
			);
		});

		// Nav.
		var $nav = $('#nav');

		if ($nav.length > 0) {

			// Shrink effect.
			$main
				.scrollex({
					mode: 'top',
					enter: function() {
						$nav.addClass('alt');
					},
					leave: function() {
						$nav.removeClass('alt');
					},
				});

			// Links.
			var $nav_a = $nav.find('a');

			$nav_a
				.scrolly({
					speed: 1000,
					offset: function() {
						return $nav.height();
					}
				})
				.on('click', function() {

					var $this = $(this);

					// External link? Bail.
					if ($this.attr('href').charAt(0) != '#')
						return;

					// Deactivate all links.
					$nav_a
						.removeClass('active')
						.removeClass('active-locked');

					// Activate link *and* lock it (so Scrollex doesn't try to activate other links as we're scrolling to this one's section).
					$this
						.addClass('active')
						.addClass('active-locked');

				})
				.each(function() {

					var $this = $(this),
						id = $this.attr('href'),
						$section = $(id);

					// No section for this link? Bail.
					if ($section.length < 1)
						return;

					// Scrollex.
					$section.scrollex({
						mode: 'middle',
						initialize: function() {

							// Deactivate section.
							if (skel.canUse('transition'))
								$section.addClass('inactive');

						},
						enter: function() {

							// Activate section.
							$section.removeClass('inactive');

							// No locked links? Deactivate all links and activate this section's one.
							if ($nav_a.filter('.active-locked').length == 0) {

								$nav_a.removeClass('active');
								$this.addClass('active');

							}

							// Otherwise, if this section's link is the one that's locked, unlock it.
							else if ($this.hasClass('active-locked'))
								$this.removeClass('active-locked');

						}
					});

				});

		}

		// Scrolly.
		$('.scrolly').scrolly({
			speed: 1000
		});
		$('#span_plane').on('mouseover', function() {
			$(this).addClass('animated bounceOutRU')
		}).on('mouseout', function() {
			$(this).removeClass('animated bounceOutRU')
		});
		$('#span_keyboard').on('mouseover', function() {
			$(this).addClass('animated jackInTheBox')
		}).on('mouseout', function() {
			$(this).removeClass('animated jackInTheBox')
		});
		$('#span_pc').on('mouseover', function() {
			$(this).addClass('animated bounceInDown')
		}).on('mouseout', function() {
			$(this).removeClass('animated bounceInDown')
		});
		// get some analyse
		var _hmt = _hmt || [];
		(function() {
			var hm = document.createElement("script");
			hm.src = "https://hm.baidu.com/hm.js?7d03a5e160f418189e8ad884c78b40dc";
			var s = document.getElementsByTagName("script")[0];
			s.parentNode.insertBefore(hm, s);
		})();

		console.log('%cwang sen ', 'background-image:-webkit-gradient( linear, left top, right top, color-stop(0, #f22), color-stop(0.15, #f2f), color-stop(0.3, #22f), color-stop(0.45, #2ff), color-stop(0.6, #2f2),color-stop(0.75, #2f2), color-stop(0.9, #ff2), color-stop(1, #f22) );color:transparent;-webkit-background-clip: text;font-size:5em;');
	});

})(jQuery);
