const header = document.querySelector("nav");

window.onscroll = function () {
    const top = window.scrollY;

    if (top >= 100) {
        header.classList.add("navbarPink");
    } else {
        header.classList.remove("navbarPink");
    }
};

var typed = new Typed('#typed', {
    strings: ['UofT 2021 HBSc Graduate', 'Intern @ Zurich Canada', 'Beginner in Web Development', 'Social Media Content Creator', 'Dementia Research Assistant'],
    typeSpeed: 30,
    loop: true,
    backSpeed: 50
  })

var glide = new Glide('.glide', {
  type: "carousel",
  perView: 4,
  gap: 0,
  startAt: 0,
  focusAt: 'center',
})

glide.mount()