import React from 'react';
import '../App.css'

function ProductsCard({product, addToCart}) {
    return (
        <div className='homecolumn' key={product.id}>
            <div className='homecard'>
                <div className='imageclass'>
                    <img src={product.img_url} alt="Product image" />
                </div>
                <div className='content'>
                    <h2>{product.name}</h2>
                    <p>Kshs {product.price}</p>
                    <button type="button"
                        onClick={() => addToCart(product)}>Add to Cart</button>
                </div>
            </div>
        </div>
    );
}

export default ProductsCard;

