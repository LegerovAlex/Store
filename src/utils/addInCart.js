import { updateCartNotification } from "../components/сartItems";

async function addToCart(event) {
  if (event.target.closest(".product-card__button")) {
    event.preventDefault();
    const buttonId = event.target.getAttribute("id");
    try {
      const responce = await fetch(
        `https://634c0fbd317dc96a30907dcb.mockapi.io/CARDS/${buttonId}`
      );
      if (!responce.ok) {
        throw new Error("Whoops");
      }
      const productData = await responce.json();
      const uniqueKey = `${buttonId}_${Date.now()}`;
      const productInfo = JSON.stringify({
        id: productData.id,
        title: productData.title,
        priceLast: productData.priceLast,
      });
      localStorage.setItem(uniqueKey, productInfo);
    } catch (error) {
      console.log("Error while fetching product data:", error);
    }
  }
  updateCartNotification();
}

const productCardsContainer = document.querySelector(".main__product-cards");
productCardsContainer.addEventListener("click", addToCart);
