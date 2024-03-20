import { getDate } from "./store";
import { createElement } from "./createElement";
import { render } from "./render";

const createCard = ({ id, title, priceLast, img }) => {
  const cardButtonElement = createElement("button", [], {
    cssClass: ["product-card__button"],
    id: Number(id),
  });

  const cardPriceElement = createElement(
    "div",
    [document.createTextNode(priceLast)],
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
    console.error("Произошла ошибка при получении данных:", error);
  });
