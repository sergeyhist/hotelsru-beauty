import "./logo.scss";

export function createLogo(options) {
  options.root.innerHTML = `
    <div class='logo'>
      <img src="${require("assets/" + options.image)}" alt="logo" />
      <span class="unselectable">${options.text}</span>
    </div>
  `;
}
