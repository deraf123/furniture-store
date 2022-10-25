import React, { useState } from "react";
import Categories from "./components/Categories";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Items from "./components/Items";
import ShowFullItem from "./components/ShowFullItem";
import Product from "./Product";

function App() {
  const [items, setItems] = useState(Product);
  const [currentItems, setCurrentItems] = useState(items);
  const [orders, setOrders] = useState([]);
  const [showFullItems, setShowFullItems] = useState(false);
  const [fullItem, setFullItem] = useState();

  const addToOrder = (item) => {
    let isInArray = false;
    orders.forEach((el) => {
      if (el.id === item.id) {
        isInArray = true;
      }
    });
    if (!isInArray) setOrders((prevState) => [...prevState, item]);
  };
  const deleteOder = (id) => {
    setOrders(orders.filter((el) => el.id !== id));
  };
  const chooseCategory = (category) => {
    if (category === "all") {
      setCurrentItems(items);
      return;
    }
    setCurrentItems(() => items.filter((el) => el.category === category));
  };
  const onShowItem = (item) => {
    setFullItem(item);
    setShowFullItems(!showFullItems);
  };
  return (
    <div className='wrapper'>
      <Header orders={orders} onDelete={deleteOder} />
      <Categories onChooseCategory={chooseCategory} />
      <Items onShowItem={onShowItem} items={currentItems} onAdd={addToOrder} />
      {showFullItems && (
        <ShowFullItem
          item={fullItem}
          onAdd={addToOrder}
          onShowItem={onShowItem}
        />
      )}
      <Footer />
    </div>
  );
}

export default App;
