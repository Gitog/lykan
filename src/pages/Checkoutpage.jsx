import React from 'react';
import '../css/checkoutpage.css';

const CheckoutPage = () => {
  return (
    <div>
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
        <button type="submit">Place Order</button>
      </form>
    </div>
  );
};

export default CheckoutPage;
