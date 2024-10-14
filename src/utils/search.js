import { createCard } from "../components/cards";
import { render } from "./render";
import { searchElement } from "../components/main";
import { debounce } from "./debounce";
import { preloader } from "../components/preloader";
import { notFoundMessageElement } from "../components/main";

searchElement.addEventListener("input", debounce(searchItems, 500));

async function searchItems(event) {
  const searchText = event.target.value.trim().toLowerCase();
  const productContainer = document.querySelector(".main__product-cards");
  productContainer.innerHTML = "";
  preloader.classList.add("preloader--active");
  try {
    const response = await fetch(
      `https://634c0fbd317dc96a30907dcb.mockapi.io/CARDS?search=${searchText}`
    );

    if (!response.ok) {
      render(notFoundMessageElement, ".main__product-cards");
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
  preloader.classList.remove("preloader--active");
}
