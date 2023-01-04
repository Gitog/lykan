import React from 'react';
import '../css/checkoutpage.css'

class CheckoutPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      address: '',
      city: '',
      state: '',
      zipCode: '',
      country: '',
      phone: '',
      paymentMethod: '',
      errors: {}
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    // validate form data
    const errors = this.validateForm();
    this.setState({ errors });
    if (Object.keys(errors).length === 0) {
      // submit form data to server
      this.submitForm();
    }
  }

  validateForm = () => {
    const errors = {};
    if (!this.state.name) {
      errors.name = 'Name is required';
    }
    if (!this.state.email) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(this.state.email)) {
      errors.email = 'Email is invalid';
    }
    if (!this.state.address) {
      errors.address = 'Address is required';
    }
    if (!this.state.city) {
      errors.city = 'City is required';
    }
    if (!this.state.state) {
      errors.state = 'State is required';
    }
    if (!this.state.zipCode) {
      errors.zipCode = 'Zip code is required';
    }
    if (!this.state.country) {
      errors.country = 'Country is required';
    }
    if (!this.state.phone) {
      errors.phone = 'Phone is required';
    }
    if (!this.state.paymentMethod) {
      errors.paymentMethod = 'Payment method is required';
    }
    return errors;
  }

  submitForm = () => {
    // submit form data to server
  }

  render() {
    return (
        <form onSubmit={this.handleSubmit}>
            {/* render a list of products in the cart */} 
            <h2>Your Order</h2> 
            <ul>
                {this.state.products.map((product) => (
                    <li key={product.id}>{product.name}</li>
                ))}
            </ul>
            {/* render the shipping address form*/}
            <h2>Shipping address</h2> 
            <label htmlFor='shipping-address'>
                Address:
                <input 
                  type="text" 
                  id="shipping-address" 
                  name="shippingAddress"
                  value={this.state.shippingAddress}
                  onChange={this.handleChange} 
                  />
            </label>
            {/* render the payment method form */}
            <h2>Payment Method</h2> 
            <label htmlFor="payment-method">
                Payment Method: 
                <select 
                  id="payment-method" 
                  name="paymentMethod" 
                  value={this.state.paymentMethod} 
                  onChange={this.handleChange} 
                  >
                    <option value="">Select a payment method</option> 
                    <option value="creditCard">Credit Card</option>
                    <option value="paypal">Paypal</option>
                  </select>
            </label>
            {/* render the submit button */} 
            <button type="submit">Place Order</button>
        </form>
    );
   }
}
 
export default CheckoutPage;
