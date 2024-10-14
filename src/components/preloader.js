import { createElement } from "../utils/createElement";

export const preloader = createElement(
  "div",
  [document.createTextNode("Loading...")],
  {
    cssClass: ["preloader"],
  }
);
