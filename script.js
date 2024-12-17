function toggleMenu(){
    console.log("toggle button is clicked ------")
    const menu = document.querySelector(".menu-links")
    const icon = document.querySelector(".toggle-icon");

    menu.classList.toggle("open")
    icon.classList.toggle("open")
}

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting)
            entry.target.classList.add("show")
        else
            entry.target.classList.remove("show")

        console.log(entry)
    })
})

const navBar = document.querySelector('header');
const heroSection = document.querySelector('.hero')

let lastScrollPosition = 0;
let isNavHidden = false;

window.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY;
  const heroSectionHeight = heroSection.offsetHeight;

  // Check if nav bar should be hidden or shown
  if (scrollPosition >= heroSectionHeight) {
    if (!isNavHidden) {
      navBar.classList.add('hide');
      isNavHidden = true;
    }
  } else {
    if (isNavHidden) {
      navBar.classList.remove('hide');
      isNavHidden = false;
    }
  }

  // Check scroll direction
  if (scrollPosition < lastScrollPosition) {
    // Scrolling up, show nav bar
    navBar.classList.remove('hide');
  } else if (scrollPosition > lastScrollPosition && scrollPosition >= heroSectionHeight) {
    // Scrolling down, hide nav bar
    navBar.classList.add('hide');
  }

  lastScrollPosition = scrollPosition;
});

const hiddenElement = document.querySelectorAll(".hidden");
hiddenElement.forEach((el) => observer.observe(el))