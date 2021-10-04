console.log("SEARCH SCRIPT ACTIVE");

const formElement = document.querySelector("form");
const districtSelection = document.querySelector("#districts");
const propertyTypeSelection = document.querySelector("#property-selection");
// const priceRangeSelection = document.querySelector("#price-selection");

const toggleContainer = document.querySelector("#toggle-container");
const toggleSaleBtn = document.querySelector("#toggle-sale");
const toggleRentBtn = document.querySelector("#toggle-rent");

window.addEventListener("load", () => {
  localStorage.clear();
});

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

// BRON: https://www.w3schools.com/howto/howto_js_trigger_button_enter.asp
// Execute a function when the user releases a key on the keyboard
toggleContainer.addEventListener("keyup", function(event) {
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 13) {
    // Cancel the default action, if needed
    event.preventDefault();
    toggleContainer.classList.toggle("toggled");

    if (!toggleRentBtn.classList.contains("toggle__option--active")) {
      toggleSaleBtn.classList.toggle("toggle__option--active");
      toggleRentBtn.classList.toggle("toggle__option--active");
    } else if(!toggleSaleBtn.classList.contains("toggle__option--active")) {
      toggleSaleBtn.classList.toggle("toggle__option--active");
      toggleRentBtn.classList.toggle("toggle__option--active");

    }
  }
});

formElement.addEventListener("submit", function(event) {
  event.preventDefault();

  if (toggleRentBtn.classList.contains("toggle__option--active")) {
    localStorage.setItem("selectedType", "Rent");
  } else if (toggleSaleBtn.classList.contains("toggle__option--active")) {
    localStorage.setItem("selectedType", "Sale");
  }

  localStorage.setItem("selectedDistrict", districtSelection.value);
  localStorage.setItem("selectedPropertyType", propertyTypeSelection.value);
  // localStorage.setItem("selectedPriceRange", priceRangeSelection.value);

  window.location.href = "results.html";

});


// BRON: https://stackoverflow.com/questions/6833914/how-to-prevent-the-confirm-form-resubmission-dialog
if ( window.history.replaceState ) {
  window.history.replaceState( null, null, window.location.href );
}
