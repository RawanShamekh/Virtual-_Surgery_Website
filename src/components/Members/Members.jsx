import React from 'react'
import './Members.css'


import slide_image_1 from './../../assets/Rawan.jpg';
import slide_image_2 from './../../assets/Nada.jpg';
import slide_image_3 from './../../assets/Reem.jpg';
import slide_image_4 from './../../assets/Yosra.jpg';
import slide_image_5 from './../../assets/youssef.jpg';
import slide_image_6 from './../../assets/mostafa.jpg';



const Members = () => {


  return (
    <div className='members ' id='Members'>
        <div className
        ="testimonials">
          <div className='overlay'></div>
          <h3>Team Members </h3>
    
        <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className='container'>
    <div className="carousel-item active" data-bs-interval="5000">
      <div className='row'>
     
      
      <div className='col-6'>
<div className='img-container'></div>
        <img src={slide_image_1} className="d-block" alt="..."/>
    
 
        <h5>Rawan Shamekh</h5>

   
      </div>

      
      <div className='col-6'>
      <div className='img-container'></div>
        <img src={slide_image_2} className="d-block " alt="..."/>
      
        <h5>Nada Hesham</h5>
  
      </div>
    
    </div>
  
   
    
  </div>
  <div className="carousel-item " data-bs-interval="5000">
      <div className='row'>
     
      
      <div className='col-6'>
      <div className='img-container'></div>
        <img src={slide_image_3} className="d-block" alt="..."/>
 
        <h5>Reem Atwa</h5>

   
      </div>

      
      <div className='col-6'>
      <div className='img-container'></div>
        <img src={slide_image_4} className="d-block " alt="..."/>
      
        <h5>Yosra Allam</h5>
  
      </div>
    </div>
  
   
    
  </div>
  <div className="carousel-item" data-bs-interval="5000">
      <div className='row'>
     
      
      <div className='col-6'>
      <div className='img-container'></div>
        <img src={slide_image_5} className="d-block" alt="..."/>
 
        <h5>Youssef Elkorashy</h5>

   
      </div>

      
      <div className='col-6'>
      <div className='img-container'></div>
        <img src={slide_image_6} className="d-block " alt="..."/>
      
        <h5>Mostafa Helal</h5>
  
      </div>
    </div>
  
   
    
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>

        
    </div>
  </div>
    </div>

</div>

    
  





  );
}

export default Members