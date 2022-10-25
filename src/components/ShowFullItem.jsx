import React from "react";

const ShowFullItem = ({ item, onAdd, onShowItem }) => {
  console.log(item);
  return (
    <div className='full-item' onClick={() => onShowItem(item)}>
      <div>
        <img
          src={`./img/${item.img}`}
          alt={item.img}
          onClick={() => onShowItem(item)}
        />
        <h2>{item.title}</h2>
        <p>{item.desc}</p>
        <b>{item.price}$</b>
        <div className='add-to-cart' onClick={() => onAdd(item)}>
          +
        </div>
      </div>
    </div>
  );
};

export default ShowFullItem;
