import React from 'react'
import { Navbar } from './Navbar/Navbar'
import { Header } from './Header/Header'
import Features from './Features/Features'
import { Main } from './main/Main'
import AR from './AR/AR'
import Application from './Application/Application'
import Members from './Members/Members'
import arrow from './../assets/curved-arrow-with-broken-line (1) 4.png';
import Footer from './Footer/Footer';
import { Reference } from './Reference/Reference'
import {Segmentation}  from './Segmenation/Segmentation'

export const Maincomponents = () => {
  return (
   <>
   <Navbar/>
      <Header/>
    <Main/>
    <Features/>
    <AR/>
    <div className='container'>
    <img src={arrow} style={{position: 'relative',left:'40%'}}></img>
    </div>
   

    <Application/>
    <Reference/>

    <Members/>
    
    <Footer/> 

   </>
  )
}
