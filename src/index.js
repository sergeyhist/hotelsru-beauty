import "./index.scss";
import { createButton } from "./components/button/button";
import { createLogo } from "./components/logo/logo";
import { createBanner } from "./components/banner/banner";
import { createPriceCard } from "./components/priceCard/priceCard";
import { createInfoCard } from "./components/infoCard/infoCard";

const header = document.querySelector(".page__header");
const main = document.querySelector(".page__main");
const footer = document.querySelector(".page__footer");
const favicon = document.querySelector("link[rel~='icon']");
const priceList = [
  {
    name: "Парикмахерское кресло «Норм» гидравлическое",
    price: "9 900",
    image: "images/goods/chair_1.png",
  },
  {
    name: "Парикмахерское кресло «Норм» гидравлическое",
    price: "9 900",
    image: "images/goods/chair_1.png",
  },
  {
    name: "Парикмахерское кресло «Норм» гидравлическое",
    price: "9 900",
    image: "images/goods/chair_1.png",
  },
  {
    name: "Парикмахерское кресло «Норм» гидравлическое",
    price: "9 900",
    image: "images/goods/chair_1.png",
  },
];
const socialList = [
  {
    name: "youtube",
    icon: "icons/youtube.svg",
    link: "#",
  },
  {
    name: "vk",
    icon: "icons/vk.svg",
    link: "#",
  },
  {
    name: "facebook",
    icon: "icons/facebook.svg",
    link: "#",
  },
  {
    name: "instagram",
    icon: "icons/instagram.svg",
    link: "#",
  },
];

favicon.href = require('assets/favicon.ico');
main.querySelector(".page__title img").src = require("assets/images/car.png");

createLogo({
  root: header.querySelector(".page__logo"),
  text: "BEAUTY",
  image: "images/logo.png",
});

document.querySelectorAll('.page__feedback').forEach(element => {
  createButton({
    root: element,
    width: 170,
    type: "transparent",
    text: "Обратный звонок",
    click: () => {},
  })
})


createBanner({
  root: main,
  prepend: true,
  title: "Супер кресло",
  text: "Текст акции всегда отражает суть, а не просто болтовню, поэтому внимательнее",
  image: "images/chair.png",
  button: {
    text: "Подробнее",
    type: "white",
    width: 170,
    click: () => {},
  },
});

priceList.forEach((item) => {
  createPriceCard({
    root: main.querySelectorAll(".page__cards")[0],
    ...item,
  });
});

createInfoCard({
  root: main.querySelectorAll(".page__wrapper")[1],
  title: "Получайте бонусы и подарки",
  text: "Каждый месяц разыгрываем <br> 10 000 рублей для наших клиентов",
  type: "email",
  image: "images/email.png",
});

createInfoCard({
  root: main.querySelectorAll(".page__wrapper")[1],
  title: "Заходите к нам",
  text: "Более 300 магазинов <br> по всей России",
  type: "button",
  button: {
    type: "white",
    text: "Карта магазинов",
    width: 170,
    height: 35,
    click: () => {},
  },
});

socialList.forEach((item) => {
  const socialLink = document.createElement("a");

  socialLink.href = item.link;
  socialLink.innerHTML = `<img src="${require("assets/" + item.icon)}" />`;

  footer.querySelector(".page__social").append(socialLink);
});
