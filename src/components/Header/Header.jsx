import React from 'react';

import './Header.css'
import arrow from './../../assets/curved-arrow-with-broken-line (1) 4.png'

export const Header = () => {
  return (
    <>
  
    <header className='head' id='Home'>
      <div className=' intro' data-aos="fade-right"   data-aos-duration="1300">
        <h2>Custom Features For Digital Surgeries.
</h2>
<p>Just With Segal.you can do digital surgery on organs and learn new Features to help you on your Study..</p>

<button className="button">
See More <i className="fa-solid fa-angle-up fa-rotate-90" style={{marginLeft:"8px"}}></i>


</button>

<img src={arrow} style={{paddingBottom:"20px"}} ></img>
      </div>

   

    </header>
    
    </>
   
  );
}
