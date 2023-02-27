import './priceCard.scss';
import { createButton } from '../button/button';

export function createPriceCard({root, name, price, image}) {
  const priceCard = document.createElement('div');

  priceCard.classList.add('price-card');
  priceCard.innerHTML = `
    <img src=${require('assets/'+image)} alt=""/>
    <span>${name}</span>
    <span>${price} ₽</span>
  `;

  createButton({
    root: priceCard,
    type: 'fill',
    text: 'Купить',
    width: 130,
    height: 35,
    click: () => {}
  })

  root.append(priceCard);
}
