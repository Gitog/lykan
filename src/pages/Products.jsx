import React from 'react'
import '../css/products.css'
import { useSelector, useDispatch } from 'react-redux'
// import { decrement, increment } from './redux/reducers/counterSlice'


export default function Products() {
    return (
        <div className="productspage">

            <div className="productssidebar">
                <h1>Sale is Live</h1>
                <div className='sidecolumn'>
                    <div className='sidecard'>
                        <div className='sideimageclass'>
                            <img src='https://cdn.pixabay.com/photo/2015/04/09/19/53/sock-715022_960_720.jpg' alt="Product image"/>
                        </div>
                        <div className='sidecontent'>
                            <h2>Socks</h2>
                            <p>Kshs 1,200</p>
                        </div>
                    </div>
                </div>
                <div className='sidecolumn'>
                    <div className='sidecard'>
                        <div className='sideimageclass'>
                            <img src='https://cdn.pixabay.com/photo/2015/04/09/19/53/sock-715022_960_720.jpg' alt="Product image"/>
                        </div>
                        <div className='sidecontent'>
                            <h2>Socks</h2>
                            <p>Kshs 1,200</p>
                        </div>
                    </div>
                </div>
                <div className='sidecolumn'>
                    <div className='sidecard'>
                        <div className='sideimageclass'>
                            <img src='https://cdn.pixabay.com/photo/2015/04/09/19/53/sock-715022_960_720.jpg' alt="Product image"/>
                        </div>
                        <div className='sidecontent'>
                            <h2>Socks</h2>
                            <p>Kshs 1,200</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="majorshop">
                <div className='row'>
                 <div className="rowheader">
                 <div className="majorshoptitle">
                        <h1>Shop</h1>
                    </div>
                    <div className="majorshopselector">
                        <select name="categories" id="categories">
                            <option value="Suits">Suits</option>
                            <option value="Jans">Jeans</option>
                            <option value="Blazers">Blazers</option>
                            <option value="Trousers">Trousers</option>
                            <option value="Socks">Socks</option>
                        </select>
                    </div>
                 </div>
                 <div className="productsdiv">
                    <div className='column'>
                        <div className='card'>
                            <div className='imageclass'>
                                <img src='https://cdn.pixabay.com/photo/2015/04/09/19/53/sock-715022_960_720.jpg' alt="Product image"/>
                            </div>
                            <div className='content'>
                                <h2>Socks</h2>
                                <p>Carter's 6-Pack Crew Socks Navy/White/Grey Age-4 Years & Above-3H798510</p>
                                <p className="price">Kshs 1,200</p>
                                <button type='submit'>Add to Cart</button>
                            </div>
                        </div>
                    </div>

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
            </div>
            </div>
        </div>
    )
}
