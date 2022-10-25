import React, { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import Order from "./Order";

export default function Header({ orders, onDelete }) {
  let [cartOpen, setCartOpen] = useState(false);
  let summa = 0;
  orders.forEach((el) => (summa += Number.parseFloat(el.price)));
  const showOrders = (array) => {
    return (
      <>
        {array.map((el) => (
          <Order key={el.id} item={el} onDelete={onDelete} />
        ))}
        <p className='summa'>Сумма: {summa.toFixed(2)}$</p>
      </>
    );
  };
  const showNothing = () => {
    return (
      <div className='empty'>
        <h2>Товаров Нет</h2>
      </div>
    );
  };
  return (
    <header>
      <div>
        <span className='logo'>House Staff</span>
        <ul className='nav'>
          <li>Про нас</li>
          <li>Контакты</li>
          <li>Кабинет</li>
        </ul>
        <FaShoppingCart
          onClick={() => setCartOpen((cartOpen = !cartOpen))}
          className={`shop-cart-button ${cartOpen && "active"}`}
        />

        {cartOpen && (
          <div className='shop-cart'>
            {orders.length > 0 ? showOrders(orders) : showNothing()}
          </div>
        )}
      </div>
      <div className='presentation'></div>
    </header>
  );
}
// {orders.map((el) => (
//   <Order key={el.id} item={el} />
// ))}
