import { createElement } from "../utils/createElement";
import { render } from "../utils/render";

export const modalButtonOrderElement = createElement(
  "div",
  [document.createTextNode("Remove all")],
  {
    cssClass: ["order-button"],
  }
);

export const cartAmountElement = createElement(
  "div",
  [document.createTextNode("0 $")],
  {
    cssClass: ["cart-total__amount"],
  }
);

const cartLabelElement = createElement(
  "div",
  [document.createTextNode("Amount:")],
  {
    cssClass: ["cart-total__label"],
  }
);

const cartTotalElement = createElement(
  "div",
  [cartLabelElement, cartAmountElement],
  {
    cssClass: ["cart-total"],
  }
);

const modalFotterElement = createElement(
  "div",
  [cartTotalElement, modalButtonOrderElement],
  {
    cssClass: ["modal__footer"],
  }
);

export const modalContentElement = createElement("div", [], {
  cssClass: ["modal__content"],
});

export const modalButtonElement = createElement(
  "button",
  [document.createTextNode("X")],
  {
    cssClass: ["modal__close"],
  }
);

const modalTitleElement = createElement(
  "h2",
  [document.createTextNode("Cart")],
  {
    cssClass: ["modal__title"],
  }
);

const modalHeaderElement = createElement(
  "div",
  [modalTitleElement, modalButtonElement],
  {
    cssClass: ["modal__header"],
  }
);

const modalInnerElement = createElement(
  "div",
  [modalHeaderElement, modalContentElement, modalFotterElement],
  {
    cssClass: ["modal__inner"],
  }
);

export const modalElement = createElement("div", [modalInnerElement], {
  cssClass: ["modal"],
});

render(modalElement, ".main");
