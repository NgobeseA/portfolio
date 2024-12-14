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

const hiddenElement = document.querySelectorAll(".hidden");
hiddenElement.forEach((el) => observer.observe(el))