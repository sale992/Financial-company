// $(document).on('click', '.navigation-links .navigation-link', function(){
// 	if($(this).hasClass('active')){
// 		$(this).removeClass('active');
// 	} else {
// 		$(this).addClass('active').siblings().removeClass('active');
// 	}
// });


// let close = document.querySelector('.nav-close-icon');
// let open = document.querySelector('.navbar-open-icon')
// let menu = document.querySelector('.nav-main');
// let navbar = document.getElementById('navbar-icon');
// let sticky = navbar.offsetTop;

// close.addEventListener('click', function() {
//   menu.classList.toggle('close');
//   open.classList.toggle('nodisplay');
//   navbar.style.display = 'grid';
// });

// open.addEventListener('click', function() {
//   menu.classList.toggle('close');
//   open.classList.toggle('nodisplay');
//   navbar.style.display = 'none';
// });
// let hamburger = document.querySelector('.hamburger');
// let line1 = document.querySelector('.line1');
// let line2 = document.querySelector('.line2');
// let line3 = document.querySelector('.line3');

// hamburger.addEventListener('click', ()=> {
// 	line1.style.transform = "rotate(45deg)";
// 	line1.style.top = "10px";
// 	line2.style.opacity = "0";
// 	line3.style.transform = "rotate(-45deg)";
// });


const navSlide = () => {
	const hamburger = document.querySelector('.hamburger'); //HAMBURGER
	const nav = document.querySelector('.navigation-links'); //UL NAV links
	const navLinks = document.querySelectorAll('.navigation-links .navigation-link'); //UL LI WITH CLASS

	// tooglenav

	hamburger.addEventListener('click', () => {
		nav.classList.toggle('nav-active');
			//DELAY FOR EACH LINK
		navLinks.forEach((link, index) => {
			if(link.style.animation){
				link.style.animation = ``;
			}
			else{
				link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
			}
		});
		//ANIMATE BURGER
		hamburger.classList.toggle('toggle');
	});


}

navSlide();