import { cartElement, cartNotificationElement } from "./main";
import {
  modalButtonElement,
  modalElement,
  modalContentElement,
  modalButtonOrderElement,
} from "./cart";
import { createElement } from "../utils/createElement";
import { render } from "../utils/render";

modalButtonOrderElement.addEventListener("click", () => {
  modalContentElement.innerHTML = "";
  localStorage.clear();
  retrieveCartData();
  calcAmountPrice();
  updateCartNotification();
});

cartElement.addEventListener("click", () => {
  modalElement.classList.add("modal--active");
});

modalButtonElement.addEventListener("click", () => {
  modalElement.classList.remove("modal--active");
});

modalElement.addEventListener("click", (event) => {
  if (event.target === modalElement) {
    modalElement.classList.remove("modal--active");
  }
});

cartElement.addEventListener("click", retrieveCartData);

const createCartItems = ({ id, title, priceLast }) => {
  const itemPriceElement = createElement(
    "div",
    [document.createTextNode(`${priceLast} $`)],
    {
      cssClass: ["cart-item__price"],
    }
  );

  const itemNameElement = createElement(
    "div",
    [document.createTextNode(title)],
    {
      cssClass: ["cart-item__name"],
    }
  );

  const cartElement = createElement(
    "div",
    [itemNameElement, itemPriceElement],
    {
      cssClass: ["cart-item"],
      attrs: {
        id: Number(id),
      },
    }
  );

  return cartElement;
};

function retrieveCartData() {
  const keys = Object.keys(localStorage);
  if (keys.length == 0) {
    modalContentElement.innerHTML = "Cart is empty...";
  } else {
    modalContentElement.innerHTML = "";
    keys.forEach((key) => {
      const productInfo = localStorage.getItem(key);
      const productData = JSON.parse(productInfo);
      const cartItems = createCartItems(productData);
      render(cartItems, ".modal__content");
    });
    calcAmountPrice();
  }
}

function calcAmountPrice() {
  const cartItems = document.querySelectorAll(".cart-item__price");
  let totalPrice = 0;
  cartItems.forEach((price) => {
    totalPrice += parseFloat(price.textContent);
  });
  const cartAmountElement = document.querySelector(".cart-total__amount");
  cartAmountElement.textContent = totalPrice + " $";
}

export function updateCartNotification() {
  if (localStorage.length > 0) {
    cartNotificationElement.classList.add("notification-circle--active");
  } else {
    cartNotificationElement.classList.remove("notification-circle--active");
  }
}
