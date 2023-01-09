import React, { useState } from 'react';

function ShoppingCart() {

  const [items, setItems] = useState([]);

  const addItem = (item) => {
    setItems([...items, item]);
  }

  const removeItem = (item) => {
    setItems(items.filter((i) => i !== item));
  }
 
  return(
    <div classname='shopping-cart'>
      <h1>Shopping Cart</h1> 
      <ul>
        {items.map((item, index) => (
          <li key={item.id}>
            {item.name} 
            <button onClick={() => 
            removeItem(index)}>Remove</button>
            </li>
        ))}
      </ul>
    </div>
  );
} 

function ShoppingCartList({ items, addToCart }) {
  return (
    <div>
      <h2>Items</h2> 
      <div>
        {items.map(item => (
          <ShoppingCart key={item.id} item={item} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
}

function ShoppingCartApp() {
  //dummy data for items
  const items = [
    { id: 1, name: 'Item 1'},
    { id: 2, name: 'Item 2'},
    { id: 3, name: 'Item 3'},
  ];
  return (
    <div>
      <ShoppingCart items={items} />
      <ShoppingCartList items={items} addToCart={addItem} />
    </div>
  );
} 

export default ShoppingCart;