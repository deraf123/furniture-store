import React, { useState } from "react";

const Categories = ({ onChooseCategory }) => {
  const [categories, setCategories] = useState([
    { key: "all", name: "Все" },
    { key: "chairs", name: "Стулья" },
    { key: "tables", name: "Столы" },
    { key: "sofa", name: "Диваны" },
    { key: "light", name: "Все" },
  ]);
  return (
    <div className='categories'>
      {categories.map((el) => (
        <div key={el.key} onClick={() => onChooseCategory(el.key)}>
          {el.name}
        </div>
      ))}
    </div>
  );
};

export default Categories;
