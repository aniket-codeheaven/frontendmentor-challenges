const toggleMenuOpen = document.querySelector("#toggle-open"),
    toggleMenuClose = document.querySelector("#toggle-close"),
    navMenu = document.querySelector("#nav-menu")

toggleMenuOpen.addEventListener("click", () => {
    navMenu.dataset.menuOpen = "true"
    document.querySelector('.overlay').style.opacity = '0.5';
})
toggleMenuClose.addEventListener("click", () => {
    navMenu.dataset.menuOpen = "false"
    document.querySelector('.overlay').style.opacity = '0';
})