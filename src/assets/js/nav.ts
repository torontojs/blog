const navLinks = document.querySelectorAll('[data-navLink]');

// Will assign ONLY if the user is on the route

navLinks.forEach((link) => {
	if (link.getAttribute('href') === window.location.pathname) {
		link.setAttribute('aria-current', 'page');
	}
});
