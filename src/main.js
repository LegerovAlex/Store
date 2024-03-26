import { createElement } from "./createElement";
import { render } from "./render";
import cart from "./assets/icons/cart.svg";

const cardsElement = createElement("div", [], {
  cssClass: ["main__product-cards"],
});

const cartImgElement = createElement("img", [], {
  cssClass: ["main-cart__img"],
  attrs: {
    src: cart,
  },
});

const cartElement = createElement("button", [cartImgElement], {
  cssClass: ["main-cart"],
});

const titleElement = createElement(
  "h2",
  [document.createTextNode("Featured")],
  {
    cssClass: ["main__title"],
  }
);

const inputElement = createElement("input", [], {
  cssClass: ["main-search__input"],
  attrs: {
    type: "text",
    placeholder: "Search...",
  },
});

export const searchElement = createElement("div", [inputElement], {
  cssClass: ["main-search"],
});

const rowElement = createElement("div", [titleElement, cartElement], {
  cssClass: ["main-row"],
});

const containerElement = createElement(
  "div",
  [rowElement, searchElement, cardsElement],
  {
    cssClass: ["container", "main-container"],
  }
);

const mainElement = createElement("div", [containerElement], {
  cssClass: ["main"],
});

render(mainElement, "#root");
