import React from 'react'
import './Footer.css'
import logo from './../../assets/logow.png'

const Footer = () => {
  return (
   <>
   <footer className='pt-3' >
<div className='container mt-4'>
  <div className='row-content'>

    <div className='img-con'>
      <img src={logo}/>


    </div>
 

    <div className='text'>
      <h4 className='mb-5' >Contact us
</h4>
<p>Computer Science , Dep(Bioinformatics)</p>
<p>Whatsapp : +124569797889</p>
<p>Gmail: Segal@gmail.com</p>
    </div>
    
</div>
<div className='icons'>
<div className='icons-con'><a href='#'><i className="fa-brands fa-facebook-f"></i></a>
<a href='#'><i className="fa-brands fa-twitter"></i></a>
<a href='#'><i className="fa-brands fa-linkedin" ></i></a></div>


</div>
<p className="copyright">Copyright © 2023 <a href="#">Segal</a></p>
</div>
  
   </footer>
 

   </>
  )
}

export default Footer;