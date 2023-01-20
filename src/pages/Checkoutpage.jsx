import React, { useEffect } from 'react';
import '../css/checkoutpage.css';
import { useSelector, useDispatch } from "react-redux";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function CheckoutPage() { 

  const navigate = useNavigate();
  const items = useSelector(state => state.products.cart);
  console.log(items)

  const dispatch = useDispatch();

  const handlePlaceOrder = () => {
    const products = items.map(item => item.id);
    axios(
      {
        method: 'post',
        url: 'http://localhost:3000/orders',
        data: {
          products: products,
          status: 'pending'
        },
        headers: {
          'Content-Type': 'application/json',
        },
        withCredentials: true
      })
      .then(({data})=> {
        navigate('/')
      })
      .catch(err => console.log(err));
  };
  const renderedItems = items.map(item => (
    <div key={item.id}>
      <p>{item.name}</p>
      <p>Price: ${item.price}</p>
      </div>
  )); 

  const totalCost = items.reduce((acc, item) => acc + parseInt(item.price), 0);

  return (
    <div className="checkout">
      <h1>Checkout</h1>
      <h2>Billing Details </h2>
      <form>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" />
        <br />
        <label htmlFor="lastname">Last name(optional)</label>
        <input type="text" id="lastname" />
        <br />
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" />
        <br />
        <label htmlFor="address">Address:</label>
        <input type="text" id="address" />
        <br />
        <label htmlFor="telephone">Phone no:</label>
        <input type="text" id="telephone" />
        <br />
      </form>
     <h3> Order Summary </h3>
        {renderedItems}
        <p>Total Cost: ${totalCost}</p><button onClick={handlePlaceOrder}>Place Order</button>
    </div>
  ); 
};

export default CheckoutPage;