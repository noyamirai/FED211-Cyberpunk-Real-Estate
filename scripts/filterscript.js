console.log("FILTER SCRIPT ACTIVE");

const hamburgerMenu = document.querySelector("#hamburger-menu");
const filterMenu = document.querySelector("#filter-section");

const cards = document.querySelector("#card-results");
const bodyElement = document.querySelector("body");
let newCard;

hamburgerMenu.addEventListener("click", () => {
    hamburgerMenu.classList.toggle("open");
    filterMenu.classList.toggle("open");
});

const nightCityProperties = [{id: 1,
                            imageUrl: "dummy-building.png",
                            title: "Family Test Home",
                            type: "Rent",
                            propertyType: "Apartment",
                            price: 1500,
                            status: "Unfurnished, Immediately Available",
                            city: "Santo Domingo",
                            district: "Arroyo",
                            bedroomAmount: "2",
                            bathroomAmount: "1",
                            garageAmount: "1"
                            },
                            {id: 2,
                            imageUrl: "dummy-building.png",
                            title: "Family Test Home 2",
                            type: "Rent",
                            propertyType: "Apartment",
                            price: 1500,
                            status: "Unfurnished, Immediately Available",
                            city: "Santo Domingo",
                            district: "Arroyo",
                            bedroomAmount: "2",
                            bathroomAmount: "1",
                            garageAmount: "1"
                            }];

window.addEventListener("load", () => {
  createCards();

  // GET SELECTIONS
  var selectedDistrict = localStorage.getItem("selectedDistrict");
  var selectedType = localStorage.getItem("selectedType");
  var selectedPropertyType = localStorage.getItem("selectedPropertyType");

});

let arrayItem = [];

function createCards() {
  let property;
  let count = 0;

  for (let i = 0; i < nightCityProperties.length; i++) {
    count++;
    property = nightCityProperties[i];

    newCard = document.createElement("li");
    newCard.id = property.id;
    cards.appendChild(newCard);

    // createElement("li", cards);
    // createElement("a", arrayItem[0]);
    // createElement("figure", arrayItem[1]);

    // createElement("a", arrayItem[0]);

    // createElement("figure", arrayItem[count - 1]);
    // createElement("picture", arrayItem[count - 1]);

    let cardAnchor = document.createElement("a");
    newCard.appendChild(cardAnchor);

    let cardWrapper = document.createElement("figure");
    cardAnchor.appendChild(cardWrapper);

    let cardPicture = document.createElement("picture");
    cardWrapper.appendChild(cardPicture);

    //check if object has image, if not then dont display
    if (property.imageUrl !== "") {
      let cardImage = document.createElement("img");
      cardImage.src = "./images/" + property.imageUrl;
      cardPicture.appendChild(cardImage);
    }

    let cardPriceMobile = document.createElement("p");
    cardPriceMobile.classList.add("price");
    cardPriceMobile.innerHTML = "€$" + property.price + "<span>/ Month</span>";
    cardWrapper.appendChild(cardPriceMobile);

    let cardContent = document.createElement("figcaption");
    cardWrapper.appendChild(cardContent);

    if (bodyElement.classList.contains("results")) {
      let cardTitleWrapper = document.createElement("div");
      cardContent.appendChild(cardTitleWrapper);

      let cardTitle = document.createElement("h4");
      cardTitle.textContent = property.title;
      cardTitleWrapper.appendChild(cardTitle);

      let cardSubTitle = document.createElement("p");
      cardSubTitle.textContent = property.city + ", " + property.district;
      cardTitleWrapper.appendChild(cardSubTitle);

      let cardPriceDesktop = document.createElement("p");
      cardPriceDesktop.classList.add("price");
      cardPriceDesktop.innerHTML = "€$" + property.price + "<span>/ Month</span>";
      cardTitleWrapper.appendChild(cardPriceDesktop);

      let cardStatus = document.createElement("p");
      cardStatus.classList.add("status");
      cardStatus.textContent = property.status;
      cardContent.appendChild(cardStatus);

      let detailList = document.createElement("ul");
      cardContent.appendChild(detailList);

      if (property.bedroomAmount > 0 || property.bedroomAmount !== "") {
        let detailListItem = document.createElement("li");
        detailList.appendChild(detailListItem);

        let bedroomImage = document.createElement("img");
        bedroomImage.src = "./images/icons/bedroom-icon.svg";
        detailListItem.appendChild(bedroomImage);

        let bedroomAmount = document.createElement("p");

        if (property.bedroomAmount > 1) {
          bedroomAmount.textContent = property.bedroomAmount + " bedrooms";
        } else {
          bedroomAmount.textContent = property.bedroomAmount + " bedroom";
        }

        detailListItem.appendChild(bedroomAmount);
      }

      if (property.bathroomAmount > 0 || property.bathroomAmount !== "") {
        let detailListItem = document.createElement("li");
        detailList.appendChild(detailListItem);

        let bathroomImage = document.createElement("img");
        bathroomImage.src = "./images/icons/bathroom-icon.svg";
        detailListItem.appendChild(bathroomImage);

        let bathroomAmount = document.createElement("p");

        if (property.bathroomAmount > 1) {
          bathroomAmount.textContent = property.bathroomAmount + " bathrooms";
        } else {
          bathroomAmount.textContent = property.bathroomAmount + " bathroom";
        }

        detailListItem.appendChild(bathroomAmount);
      }

      if (property.garageAmount > 0 || property.garageAmount !== "") {
        let detailListItem = document.createElement("li");
        detailList.appendChild(detailListItem);

        let garageImage = document.createElement("img");
        garageImage.src = "./images/icons/garage-icon.svg";
        detailListItem.appendChild(garageImage);

        let garageAmount = document.createElement("p");

        if (property.garageAmount > 1) {
          garageAmount.textContent = property.garageAmount + " garages";
        } else {
          garageAmount.textContent = property.garageAmount + " garage";
        }

        detailListItem.appendChild(garageAmount);
      }
    }
  }
}

function createElement(type, parent) {
  let element = document.createElement(type);
  parent.appendChild(element);
  arrayItem.push(element);
}
