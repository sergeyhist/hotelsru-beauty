import { createButton } from "../button/button";
import "./infoCard.scss";

export function createInfoCard({
  root,
  prepend,
  after,
  title,
  text,
  image,
  type,
  button,
}) {
  const infoCard = document.createElement("div");

  infoCard.classList.add("info-card");
  infoCard.innerHTML = `
    <div class="info-card__left">
      <h3 class="info-card__title">${title}</h3>
      <p class="info-card__text">${text}</p>
    </div>
    <div class="info-card__right"></div>
  `;

  switch (type) {
    case "email":
      infoCard.querySelector(".info-card__left").innerHTML += `
        <input type="email" class="info-card__input" placeholder="Введите e-mail">
      `;
      break;
    case "button":
      createButton({
        root: infoCard.querySelector(".info-card__left"),
        ...button,
      });
  }

  image &&
    (infoCard.querySelector(
      ".info-card__right"
    ).innerHTML += `<img src="${require("assets/" + image)}">`);

  prepend
    ? root.prepend(infoCard)
    : after
      ? root.after(infoCard)
      : root.append(infoCard);
}
