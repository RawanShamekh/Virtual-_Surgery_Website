import React from 'react'
import imgs from './../../assets/Application.png'
import './Application.css'
import arrow from './../../assets/curved-arrow-with-broken-line (1) 4.png'
import { Link } from 'react-router-dom'

const Application = () => {
  return (
 <div className='application ' id='Application'>
    <div className='container application_container'>
        <div className='app_img'>
            <div className='img_contain'>
            <div className='img_border'></div>
            <img src={imgs}/>
            </div>
            

        </div>
        <div className='app_content' data-aos="fade-left" data-aos-duration="1100">
        <h2> Our Software </h2>   
                <p>Segal Project is  a desktop platform for help doctors to intractive with human organs  and learn how to do basic operations on organs just througth our platform 
</p>    
<Link to='/Gui'>
<button className="button" >
Application <i className="fa-solid fa-angle-up fa-rotate-90" style={{marginLeft:"8px"}}></i>
</button>
<br></br></Link>

<img src={arrow}></img>

        </div>
    </div>


 </div>
  )
}

export default Application