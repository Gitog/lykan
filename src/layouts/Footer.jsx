import React from 'react';
import '../css/footer.css'

function Footer() {
  return (
    <div className="footer">
      <div className='majordivs'>
         <div className="firstdiv">
            <h1>Lykans Men's Boutique</h1>
            <p>At Lykan we have curated the latest and the coolest menswear for you to update your go-to wardrobe with better-fitting outfits.</p>
         </div>
         <div className="middlediv">
            <h1>Products Categories</h1>
            <div className='tags'>
            <p>Suits</p>
            <p>Jeans</p>
            <p>Blazers</p>
            <p>Trousers</p>
            <p>Socks</p>
            </div>
         </div>
         <div className="lastdiv">
            <h1>Contact Details</h1>
            <p>Address: Jamal Building Eastleigh</p>
            <p>Mobile: 0712345678</p>
            <p>E-mail: buy@lykanshop.co.ke</p>
         </div>
      </div>
      <div className='copyright'>
        <p>Copyright©Lykan Shop. All Rights Reserved</p>
      </div>
      <div></div>
    </div>
  );
}

export default Footer;
