import createCard from "./createCard.js";
import houseToRent from "./houseToRent.js";

const cards = document.querySelector(".cards");
const availableCheckbox = document.querySelector(".available-checkbox");
const select = document.querySelector(".select");
const searchInput = document.querySelector(".search-input");

searchInput.addEventListener("change", (event) => {
  const filteredHouses = houseToRent.filter((house) => {
    const caseInsensitiveInput = event.target.value.toLowerCase();
    const caseInsensitiveName = house.name.toLowerCase();
    const caseInsensitiveDesc = house.desc.toLowerCase();

    return (
      caseInsensitiveDesc.includes(caseInsensitiveInput) ||
      caseInsensitiveName.includes(caseInsensitiveInput)
    );
  });
  renderCards(filteredHouses);
});

select.addEventListener("change", (event) => {
  const housesByType = houseToRent.filter((house) =>
    event.target.value === "All" ? true : house.type === event.target.value
  );

  renderCards(housesByType);
});

availableCheckbox.addEventListener("change", (event) => {
  const availableHouses = houseToRent.filter((house) =>
    event.target.checked ? house.available === event.target.checked : true
  );

  renderCards(availableHouses);
});

const renderCards = (array) => {
  let html = "";

  array.map((element) => {
    html += createCard(element);
  });

  cards.innerHTML = html;
};

renderCards(houseToRent);
