import "./banner.scss";
import { createButton } from "../button/button";

export function createBanner({
  root,
  prepend,
  after,
  title,
  text,
  image,
  button,
}) {
  let banner = document.createElement("div");

  banner.classList.add("banner");
  banner.innerHTML = `
    <div class="banner__text">
      <h1>${title}</h1>
      <span>${text}</span>
    </div>
    <div class="banner__image">
      <div>
        <img src="${require("assets/" + image)}" alt="banner image"/>
      </div>
    </div>
  `;

  createButton({
    root: banner.querySelector(".banner__text"),
    ...button,
  });

  prepend
    ? root.prepend(banner)
    : after
      ? root.after(banner)
      : root.append(banner);
}
