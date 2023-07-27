import React, { useEffect, useState } from 'react'
import logo from './../../assets/logo.png';
import './Navbar.css'

export const Navbar = () => {
    const list=[
        "Home", 
       "Features",
       "AR",
        'Software',
        'Members'
    
    ]
    const [active, setActive] = useState("Home");
    const [scroll,setScroll]=useState(false);
    useEffect(()=>{
      window.onscroll=function(){
        if(window.pageYOffset>0){
          setScroll(true);

        }else{
          setScroll(false);
        }
      }

    },[])
   
    
  return (
   <>
   <nav className={scroll?   "navscroller fixed-top navbar navbar-expand-lg ":" navbar navbar-expand-lg fixed-top" } >
  <div className="container">
    <a className="navbar-brand" href="#"><img src={logo} style={{width:"130px",height:"90px"}}></img></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto ">
  
        {list.map((item,index) => {
          return (
            <li
              key={index}
              onClick={() => setActive(item)}
              className={`nav-item ms-1 ${active === item && 'active'}`}
            >
             <a className="nav-link " aria-current="page" href={`#${item}`} >{item}</a>
            </li>
          )
        })}
        
      </ul>
    </div>
  </div>
</nav>
   </>
  )
}
