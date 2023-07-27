import React from 'react'
import './Features.css'
import segment from './../../assets/mri.png'
import model from './../../assets/liver.png'
import cutting from './../../assets/microsurgery .png'
import tringle from './../../assets/trigangulation.png'
import arrow from './../../assets/curved-arrow-with-broken-line (1) 4.png'
import { Link } from 'react-router-dom'

const Features = () => {
  return (
   <>
   <div className='features'  id='Features'>
    <div className='container'>
      <div className='features_content'>
        <div className='our_features'>
          <h2>Our Features</h2>
          <p>With Segal , you can Chosse any Feature and do it just you need to dowload our platform , join with us ...</p>
          <img src={arrow}></img>
        </div>
        <div className='features_cards  row '>
          <div className='col-6'>
          <div className="card p-4 first" data-aos="fade-up-right"   data-aos-duration="1500" >
  <img src={segment} className="card-img-top segment" alt="..."/>
  <div className="card-body  text-center">
    <h5 className="card-title ">Segmentation</h5>
    <p className="card-text">First import ct scan and segment the target organ from the whole body using Deep Learning
</p>
<Link to='/Segmentation'>
 <a  className="btn ">View</a></Link>  </div>
</div>

<div className="card p-4 mt-3" >


<img src={tringle} className="card-img-top" alt="..."/>
  <div className="card-body  text-center">
    <h5 className="card-title ">Triangulation</h5>
    <p className="card-text">After that We Can Convert 
points of  3d model of orgain 
to set of Triangulations
</p>
<Link to='/Trangulation'>
 <a  className="btn ">View</a></Link>
  </div>



</div>

          </div>
          
<div className='col-6'>
  
<div className="card p-4" >
  <img src={model} className="card-img-top" alt="..."/>
  <div className="card-body  text-center">
    <h5 className="card-title ">3D Model</h5>
    <p className="card-text">Then we convert segmented organ
to 3d model that contain of set
of points
</p>
<Link to='/Model'>
 <a  className="btn ">View</a></Link>  </div>
</div>
<div className="card p-4 mt-3"data-aos="fade-up-left" data-aos-duration="1200" >
   
<img src={cutting} className="card-img-top" alt="..."/>
  <div className="card-body  text-center">
    <h5 className="card-title ">Cutting</h5>
    <p className="card-text">Then, Cut any part of 3d 
model and perform basic
surgery in our platform.
</p>
<Link to='/Cutting'>
 <a  className="btn  ">View</a></Link>  </div>
</div>
</div>
       


        </div>

      </div>
      </div>
      </div>
   
  
 
   </>
  )
}

export default Features;