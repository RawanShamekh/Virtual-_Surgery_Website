import React from 'react'
import logo from './../assets/logo.png'
export const NavPage = () => {
   
  return (
    <>
    <nav className="navbar " style={{backgroundColor:"white ",boxShadow:''}}>
  <div className="container">
    <a className="navbar-brand" href="#">
      <img src={logo}alt="Logo" style={{width:"130px",height:"90px"}}/>
    </a>
  </div>
</nav>
    </>
  )
}
