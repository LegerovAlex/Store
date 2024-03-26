import { createCard } from "./cards";
import { render } from "./render";
import { getDate } from "./store";
import { searchElement } from "./main";

searchElement.addEventListener("input", searchItems);

async function searchItems(event) {
  let searchText = event.target.value.trim().toLowerCase();
  try {
    const products = await getDate();
    const filteredProducts = products.filter((product) => {
      return product.title.toLowerCase().includes(searchText);
    });
    const productContainer = document.querySelector(".main__product-cards");
    productContainer.innerHTML = "";
    filteredProducts.forEach((data) => {
      const productCard = createCard(data);
      render(productCard, ".main__product-cards");
    });
  } catch (error) {
    console.error("There was a problem:", error);
  }
}
