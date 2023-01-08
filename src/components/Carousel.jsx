import React, {useState} from 'react';
import './Carousel.css'
import {images} from './CarouselData'

function Carousel() {

  const [index, setIndex] = useState(0)

  return (
    <div className='carousel'>
       <div  className="carouselInner" style ={{backgroundImage: `url(${images[index].img})`}}>
        <div className='left' onClick={()=>{index > 0 && setIndex(index -1)}}>👈</div>
        <div className='center'>
          <h1>{images[index].title}</h1>
          <p>{images[index].subtitle}</p>
        </div>
        <div className='right' onClick={()=>{index < images.length-1 && setIndex(index +1)}}>👉</div>
       </div>
    </div>
  );
}

export default Carousel;
