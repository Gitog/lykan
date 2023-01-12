import React from 'react';

function ProductsCard({product, addToCart}) {
    return (
        <div className='homecolumn' key={product.id}>
            <div className='homecard'>
                <div className='homeimageclass'>
                    <img src={product.img_url} alt="Product image" />
                </div>
                <div className='homecontent'>
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

