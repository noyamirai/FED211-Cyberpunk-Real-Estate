console.log("FILTER SCRIPT ACTIVE");

const hamburgerMenu = document.querySelector("#hamburger-menu");
const filterMenu = document.querySelector("#filter-section");

hamburgerMenu.addEventListener("click", () => {
    hamburgerMenu.classList.toggle("open");
    filterMenu.classList.toggle("open");
})
