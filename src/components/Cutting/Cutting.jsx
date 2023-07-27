import React from "react"
import './Cutting.css'
import { NavPage } from "../NavPage";
import STL from './../../assets/stl_model.png'
import seg from './../../assets/mri.png';

import cutvideo from './../../assets/cut.gif'
import yosra from './../../assets/Yosra.jpg'
import { Link } from 'react-router-dom'

export const Cutting = () => {
    return (
        <div className="cut">
                <NavPage/>
                <div >
    <div className="container">
      <div className="row">
        <div className="card mt-5 p-3" >
          <div className="row ">
            <div className="col-md-6">
      <img className="video" src={cutvideo}/>
            </div>
            <div className="col-md-6">
              <div className="card-body">
                <h5 className="card-title">Cutting</h5>
                <p className="card-text">Our Custom Feature so that doctors can cut any
part of Oragn so using custom algorithm.....</p>
                  <div><img src={yosra}/><span>Created by Yosra Allam</span></div>
                  
                  
              </div>
           
            </div>
          </div>
        </div>
      </div>
      
    </div>
    <div className="container ">
      <div className="row">
       <h2> More Like That</h2>
      </div>
      
   
      <div className="row">
        <div className="col-sm-12  col-lg-4 mt-5">
          <div className="card" >
            <div className="card-img"> <img src={seg} className="card-img-top img_1" alt="..."/></div>
            
            <div className="card-body">
              <h5 className="card-title">Segmentation</h5>
              <p className="card-text">First import ct scan and 
                convert it to 3d model of
                any orgain of human body</p>
                <Link to='/Segmentation'>
 <a  className="btn btn-primary">View</a></Link>              </div>
          </div>
        </div>
        <div className="col-sm-12 col-lg-4 mt-5">
          <div className="card">
            <div className="card-img"><img src={STL} className="card-img-top" alt="..."/></div>
            <div className="card-body">
              <h5 className="card-title">3d Model</h5>
              <p className="card-text">Making 3d model for liver
                by using 3d slicer after
                segmentation </p>
                <Link to='/Model'>
                <a  className="btn btn-primary">View</a></Link>              </div>
          </div>
        </div>
        <div className="col-sm-12 col-lg-4 mt-5">
          <div className="card">
            <div className="card-img"><img src={STL} className="card-img-top" alt="..."/></div>
            <div className="card-body">
              <h5 className="card-title">Trangulation</h5>
              <p className="card-text">Custom Features to Process points of 3d model which have more details view now..</p>
              <Link to='/Trangulation'>
              <a  className="btn btn-primary">View</a></Link>              </div>
          </div>
        </div>
      </div>
    </div>
    
    
  </div>
</div>

  
    
      
    );}


    