import React from 'react'
import slicer from './../../assets/3DSlicerLogo.png';
import matlab from './../../assets/matlab.png';
import python from './../../assets/python.png';
import './Reference.css'
import arrow from './../../assets/curved-arrow-with-broken-line (1) 4.png'

export const Reference = () => {
  return (
    <>
    <div className='reference'> 
    <div className='container'>
      <div className='row'>
        <h3>Technologies Used in SEGAL </h3>

      </div>
      <div className='row'>
        <div className=' col-12 col-lg-3'>
          <a href='https://www.slicer.org/'><img src={slicer}/> </a> 
          
        </div>
        <div className=' col-12 col-lg-3'>
          <a href='https://www.mathworks.com/?s_tid=gn_logo'><img src={matlab}/> </a> 
          
        </div>
        <div className=' col-12 col-lg-3'>
          <a href='https://www.python.org/'><img src={python}/> </a> 
          
        </div>
      </div>

    </div>
    </div>
    </>
  )
}
