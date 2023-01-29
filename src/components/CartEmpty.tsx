import React from 'react';
import { Link } from 'react-router-dom';

import cartEmptyImg from '../assets/img/empty-cart.png';

export const CartEmpty: React.FC = () => (
  <div className="cart cart--empty">
    <h2>
      Корзина пуста <span>😕</span>
    </h2>
    <p>
      Швидше за все, ви не заказували ще піццу.
      <br />
      Для того, щоб заказати піццу, перейди на головну сторінку.
    </p>
    <img src={cartEmptyImg} alt="Empty cart" />
    <Link to="/" className="button button--black">
      <span>Вернутися назад</span>
    </Link>
  </div>
);
