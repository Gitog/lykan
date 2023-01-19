import React from 'react';
import '../App.css'
import { removeFromCart } from '../redux/reducers/productSlice';

function CartCard({product, removeFromCart}) {
    return (
        <div className='homecolumn' key={product.id}>
            <div className='homecard'>
                <div className='imageclass'>
                    <img src={product.image} alt="Product image" />
                </div>
                <div className='content'>
                    <h2>{product.name}</h2>
                    <p>Kshs {product.price}</p>
                    <button type="button"
                        onClick={() => removeFromCart(product)}>Remove from Cart</button>
                </div>
            </div>
        </div>
    );
}

export default CartCard;

