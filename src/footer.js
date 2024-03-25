import { createElement } from "./createElement";
import { render } from "./render";

const emailElement = createElement(
  "div",
  [document.createTextNode("email: example@example.com")],
  {
    cssClass: ["footer__email"],
  }
);

const phoneElement = createElement(
  "div",
  [document.createTextNode("tel: +123456789")],
  {
    cssClass: ["footer__phone"],
  }
);

const contactsElement = createElement("div", [phoneElement, emailElement], {
  cssClass: ["footer__contacts"],
});

const textElement = createElement(
  "p",
  [document.createTextNode("*only for the same region")],
  {
    cssClass: ["footer__text"],
  }
);
const titleElement = createElement(
  "h2",
  [document.createTextNode("Free Shipping Services")],
  {
    cssClass: ["footer__title"],
  }
);

const containerElement = createElement(
  "div",
  [titleElement, textElement, contactsElement],
  {
    cssClass: ["container", "footer-container"],
  }
);

const footerElement = createElement("div", [containerElement], {
  cssClass: ["footer"],
});

render(footerElement, "#root");
