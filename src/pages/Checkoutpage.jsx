import React from 'react';
import '../css/checkoutpage.css';

const CheckoutPage = () => {
  return (
    <div className="checkout">
      <div className="details">
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
      </div>

      <div className="orders">
        <h2> Order Summary</h2>
        <div className='order'>
          <div>Product 1</div>
          <div>$10</div>
        </div>
        <div className='order'>
          <div>Product 2</div>
          <div>$20</div>
        </div>
        <div className='order'>
          <div>Total:</div>
          <div>$30</div>
        </div>
        <button type="submit">Place Order</button>
      </div>

    </div>


  );
};

export default CheckoutPage;