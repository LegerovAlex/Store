import { createElement } from "../utils/createElement";
import { render } from "../utils/render";
import logo from "../assets/icons/logo.svg";

const subTitileElement = createElement(
  "p",
  [
    document.createTextNode(
      "Our environment, the world in which we live and work, is a mirror of our attitudes and expectations"
    ),
  ],
  {
    cssClass: ["header-content__subtitle"],
  }
);

const titleElement = createElement(
  "h1",
  [document.createTextNode("Happiness blooms from within")],
  {
    cssClass: ["header-content__title"],
  }
);

const contentElement = createElement("div", [titleElement, subTitileElement], {
  cssClass: ["header-content"],
});

const rowElement = createElement("div", [contentElement], {
  cssClass: ["header-row"],
});

const logoImgElement = createElement("img", [], {
  cssClass: ["hedaer-logo__img"],
  attrs: {
    src: logo,
  },
});

const logoElement = createElement("div", [logoImgElement], {
  cssClass: ["header-logo"],
});

const containerElement = createElement("div", [logoElement, rowElement], {
  cssClass: ["container", "header-container"],
});

const headerElement = createElement("div", [containerElement], {
  cssClass: ["header"],
});

render(headerElement, "#root");
