import { createCard } from "./cards";
import { render } from "./render";
import { searchElement } from "./main";
import { debounce } from "./debounce";

searchElement.addEventListener("input", debounce(searchItems, 500));

async function searchItems(event) {
  const searchText = event.target.value.trim().toLowerCase();
  const productContainer = document.querySelector(".main__product-cards");
  productContainer.innerHTML = "";
  try {
    const response = await fetch(
      `https://634c0fbd317dc96a30907dcb.mockapi.io/CARDS?search=${searchText}`
    );

    if (!response.ok) {
      throw new Error("No products found with this name");
    }

    const data = await response.json();

    data.map((productData) => {
      const productCard = createCard(productData);
      render(productCard, ".main__product-cards");
    });
  } catch (error) {
    console.log("Error while executing the request:", error);
  }
}
