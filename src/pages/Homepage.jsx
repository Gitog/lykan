import Carousel from "../components/Carousel";

export default function Homepage() {
  return (
    <div className="home">
      <div classNmae='slider'>
        <Carousel />
      </div>
      
      <div className='main'>
        <h1>EXPLORE TRENDING PRODUCTS</h1>
        
      </div>
      <div className='info'>
        
          <div className='info-details'>
           <div className='im'>
            <img src='images/delivery.png' alt='Delivery'/>
            </div>
            <div className="dt">
            <h2>Standard Shipping</h2>
            <p>On all orders</p>
            </div> 
          </div>
          <div className='info-details'>
          <div className='im'>
            <img src='images/calendar.png' alt='Join anytime'/>
            </div>
            <div className="dt">
            <h2>Join Risk Free</h2>
            <p>30 days Refund</p>
            </div>
          </div>
          <div className='info-details'>
          <div className='im'>
          <img src='images/support.png' alt='Support' />
          </div>
          <div className="dt">
            <h2>Support 24/7</h2>
            <p>Online 24 hours</p>
            </div>
          </div>
          <div className='info-details'>
          <div className='im'>
           <img src='images/padlock.png' alt='Secure'/>
           </div>
           <div className="dt">
            <h2>100% safe</h2>
            <p>Secure shopping</p>
            </div>
          </div>
        </div>
    </div>
  )
}
