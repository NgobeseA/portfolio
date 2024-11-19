function toggleMenu(){
    console.log("toggle button is clicked ------")
    const menu = document.querySelector(".menu-links")
    const icon = document.querySelector(".toggle-icon");

    menu.classList.toggle("open")
    icon.classList.toggle("open")
}