import React from 'react';

function SingleProduct() {
  return (
    <div className='singleproduct'>
      <div className='column'>
                        <div className='card'>
                            <div className='imageclass'>
                                <img src='https://cdn.pixabay.com/photo/2015/04/09/19/53/sock-715022_960_720.jpg' alt="Product image"/>
                            </div>
                            <div className='content'>
                                <h2>Socks</h2>
                                <p>Carter's 6-Pack Crew Socks Navy/White/Grey Age-4 Years & Above-3H798510</p>
                                <p className="price">Kshs 1,200</p>
                                <button>Add to Cart</button>
                            </div>
                        </div>
                    </div>
    </div>
  );
}

export default SingleProduct;
