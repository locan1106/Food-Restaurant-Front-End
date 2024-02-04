let menu = document.querySelector("#menu-bars");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
	menu.classList.toggle("fa-bars");
	menu.classList.toggle("fa-xmark");
	navbar.classList.toggle("active");
};

// Scroll
let section = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header .navbar a");

window.onscroll = () => {
	menu.classList.remove("fa-xmark");
	navbar.classList.remove("active");

	section.forEach((sec) => {
		let top = window.scrollY;
		let height = sec.offsetHeight;
		let offset = sec.offsetTop - 150;
		let id = sec.getAttribute("id");

		if (top >= offset && top < offset + height) {
			navLinks.forEach((link) => {
				link.classList.remove("active");
				document
					.querySelector("header .navbar a[href*=" + id + "]")
					.classList.add("active");
			});
		}
	});
};

let searchForm = document.querySelector("#search-form");
let searchBtn = document.querySelector("#search-icon");
searchBtn.onclick = () => {
	searchForm.classList.toggle("active");
};

let closeBtn = document.querySelector("#close");
closeBtn.onclick = () => {
	searchForm.classList.remove("active");
};

// Loader
function loader() {
	document.querySelector(".loader-container").classList.add("fade-out");
}

function fadeOut() {
	setInterval(loader, 3000);
}

window.onload = fadeOut;

// Swiper slider
var swiper = new Swiper(".home-slider", {
	spaceBetween: 30,
	centeredSlides: true,
	autoplay: {
		delay: 7500,
		disableOnInteraction: false,
	},
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
	loop: true,
});

var swiper = new Swiper(".review-slider", {
	spaceBetween: 20,
	centeredSlides: true,
	autoplay: {
		delay: 7500,
		disableOnInteraction: false,
	},
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
	loop: true,
	breakpoints: {
		0: {
			slidesPerView: 1,
		},
		640: {
			slidesPerView: 2,
		},
		991: {
			slidesPerView: 3,
		},
		1024: {
			slidesPerView: 4,
		},
	},
});
