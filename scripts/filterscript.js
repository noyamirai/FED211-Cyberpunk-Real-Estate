console.log("FILTER SCRIPT ACTIVE");

const filterMenuBtn = document.querySelector("#filter-menu-btn");
const filterMenu = document.querySelector(".filters");

filterMenuBtn.addEventListener("click", () => {
    console.log('filter menu icon clicked');

    filterMenu.classList.toggle("open");
    filterMenuBtn.classList.toggle("open");
})
