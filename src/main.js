import { createElement } from "./createElement";
import { render } from "./render";

const cardsElement = createElement("div", [], {
  cssClass: ["main__product-cards"],
});

const titleCardElement = createElement("h2", [], {
  cssClass: ["main__title"],
});

const mainElement = createElement("div", [titleCardElement, cardsElement], {
  cssClass: ["main"],
});

const containerElement = createElement("div", [mainElement], {
  cssClass: ["container"],
});

render(containerElement, ".root");
