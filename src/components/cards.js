import { getDate } from "../utils/store";
import { createElement } from "../utils/createElement";
import { render } from "../utils/render";

export const createCard = ({ id, title, priceLast, img }) => {
  const cardButtonElement = createElement(
    "button",
    [document.createTextNode("BUY")],
    {
      cssClass: ["product-card__button"],
      attrs: {
        id: Number(id),
      },
    }
  );

  const cardPriceElement = createElement(
    "div",
    [document.createTextNode(`${priceLast} $`)],
    {
      cssClass: ["product-card__price"],
    }
  );

  const cardNameElement = createElement(
    "div",
    [document.createTextNode(title)],
    {
      cssClass: ["product-card__name"],
    }
  );

  const cardImgElement = createElement("img", [], {
    cssClass: ["product-card__img"],
    attrs: {
      src: img,
      alt: title,
    },
  });

  const productCardElement = createElement(
    "div",
    [cardImgElement, cardNameElement, cardPriceElement, cardButtonElement],
    {
      cssClass: ["product-card"],
      attrs: {
        id: Number(id),
      },
    }
  );

  return productCardElement;
};

getDate()
  .then((data) => {
    data.map((productData) => {
      const productCard = createCard(productData);
      render(productCard, ".main__product-cards");
    });
  })
  .catch((error) => {
    console.error("An error occurred while fetching the data:", error);
  });
