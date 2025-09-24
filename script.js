// this is the "brain/interactions" of the website

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
	anchor.addEventListener('click', function (event) {
		event.preventDefault();
		const target = document.querySelector(this.getAttribute('href'));
		if (target) {
			target.scrollIntoView({
				behavior: 'smooth',
				block: 'start',
			});
		}
	});
});

// Keyboard navigation
let currentSection = 0;
const sections = ['home', 'about', 'projects', 'skills', 'contact'];

// prevent multiple rapid scrolls
let isScrolling = false;

function scrollToSection(index) {
	if (isScrolling) return;
	isScrolling = true;

	document.getElementById(sections[index]).scrollIntoView({
		behavior: 'smooth',
	});

	setTimeout(() => {
		isScrolling = false;
		currentSection = index;
	}, 500);
}

document.addEventListener('keydown', function (event) {
	switch (event.key) {
		case 'ArrowRight':
		case 'ArrowDown':
			event.preventDefault();
			currentSection = (currentSection + 1) % sections.length;
			document.getElementById(sections[currentSection]).scrollIntoView({
				behavior: 'smooth',
			});
			break;

		case 'ArrowLeft':
		case 'ArrowUp':
			event.preventDefault();
			currentSection = (currentSection - 1 + sections.length) % sections.length;
			document.getElementById(sections[currentSection]).scrollIntoView({
				behavior: 'smooth',
			});
			break;
	}
});
