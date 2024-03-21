import { createElement } from "./createElement";
import cart from "./assets/images/cart.svg";
import logo from "./assets/images/logo.svg";

const cartElement = createElement("img", [], {
  cssClass: ["header__cart"],
  attrs: {
    src: cart,
  },
});

const inputElement = createElement("input", [], {
  cssClass: ["header__search-input"],
  attrs: {
    type: "text",
    placeholder: "Search...",
  },
});

const searchElement = createElement("div", [inputElement], {
  cssClass: ["header__search"],
});

const logoElement = createElement("img", [], {
  cssClass: ["header__logo"],
  attrs: {
    src: logo,
  },
});

export const headerElement = createElement(
  "div",
  [logoElement, searchElement, cartElement],
  {
    cssClass: ["header"],
  }
);
