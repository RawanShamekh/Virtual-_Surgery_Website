import React from 'react'
import './AR.css'
import Ar from './../../assets/AR.png'
import arrow from'./../../assets/curved-arrow-with-broken-line (1) 4.png'

const AR = () => {
  return (
<>
<div className='AR ' id='AR'>
    <div className='container'>
        <div className='AR_content'>
            <div className='AR_phones'>
                <img src={Ar}></img>
            
            </div>
            <div className='AR_desc'>
                <h2>Augmented reality (AR)</h2>   
                <p>With Augmented reality (AR) you can see 3d model around you so that doctors can interacts with Oragins that see Tumor in Orgains in case there is a Tumor just with Segal...
</p>    
<img  src={arrow}/>

     </div>

        </div>
    </div>
</div>
</>
  )
}

export default AR;