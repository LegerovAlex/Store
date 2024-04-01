import { createElement } from "./createElement";

export const preloader = createElement(
  "div",
  [document.createTextNode("Loading...")],
  {
    cssClass: ["preloader"],
  }
);
