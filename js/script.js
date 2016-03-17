var $document = $(document);

$document.ready(function() {
	// set up the nav bar dropdown
	$('.ui-nav-dropdown').dropdown({});


	// do the cool scrolly thingy
	var $navBar = $('.ui-navbar');
	var originalNavBarOffsetTop = $navBar.offset().top;

	$document.scroll(function() {
		if ($document.scrollTop() >= originalNavBarOffsetTop) {
			$navBar.addClass("fixed");
		} else {
			$navBar.removeClass("fixed");
		}
	});

	$('.ui-rocket').click(function() {
		alert("Hi Mum");
	});

});