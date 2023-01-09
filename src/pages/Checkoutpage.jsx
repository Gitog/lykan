import React from 'react';
import '../css/checkoutpage.css';

const CheckoutPage = () => {
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
        <button type="submit">Place Order</button>
      </form> 
      <form className='orders'> 
      <h3>Your Orders</h3>
      <table> 
        <tr>
          <td> PRODUCT</td>
          <td> SUBTOTAL</td>

        </tr>

      </table> 
      </form>
        <button type="submit">Submit</button>
      </form> 
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
  );
};

export default CheckoutPage;
