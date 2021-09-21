console.log("TOGGLE SCRIPT ACTIVE");

const toggleContainer = document.querySelector("#toggle-container");
const toggleSaleBtn = document.querySelector("#toggle-sale");
const toggleRentBtn = document.querySelector("#toggle-rent");

toggleSaleBtn.addEventListener("click", function() {
  console.log('sale btn clicked');
  toggleContainer.classList.toggle("toggled");

  if (!toggleSaleBtn.classList.contains("toggle__option--active")) {
    toggleSaleBtn.classList.add("toggle__option--active");
    toggleRentBtn.classList.remove("toggle__option--active");
  }
});

toggleRentBtn.addEventListener("click", function() {
  console.log('rent btn clicked');

  toggleContainer.classList.toggle("toggled");

  if (!toggleRentBtn.classList.contains("toggle__option--active")) {
    toggleRentBtn.classList.add("toggle__option--active");
    toggleSaleBtn.classList.remove("toggle__option--active");
  }

});
