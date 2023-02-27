import "./button.scss";

export function createButton({
  root,
  after,
  text,
  type,
  width,
  height,
  click,
}) {
  let button = document.createElement("button");
  let buttonText = document.createElement("span");

  button.classList.add("button");

  width && (button.style.width = `${width}px`);
  height && (button.style.height = `${height}px`);
  button.classList.add(`button_${type}`);

  buttonText.textContent = text;
  button.onclick = click;

  button.append(buttonText);
  after ? after.after(button) : root.append(button);
}
