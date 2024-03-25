import { createElement } from "./createElement";
import { render } from "./render";

const cardsElement = createElement("div", [], {
  cssClass: ["main__product-cards"],
});

const titleElement = createElement(
  "h2",
  [document.createTextNode("Featured")],
  {
    cssClass: ["main__title"],
  }
);
const containerElement = createElement("div", [titleElement, cardsElement], {
  cssClass: ["container", "main-container"],
});

const mainElement = createElement("div", [containerElement], {
  cssClass: ["main"],
});

render(mainElement, "#root");
