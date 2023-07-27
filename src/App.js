
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css';

import { useEffect } from 'react';


import { Service } from './components/Service Application/Service';
import { Maincomponents } from './components/Maincomponents';
import { Route, Routes } from 'react-router-dom';
import { NavPage } from './components/NavPage';
import {Segmentation} from './components/Segmenation/Segmentation';
import Gui from './components/Gui/Gui';
import { Cutting } from './components/Cutting/Cutting';
import { Model } from './components/model/model';
import { Trangulation } from './components/trangulation/trangulation';



function App() {
  
  useEffect(()=>{
    AOS.init();
  },[])
  return (
    <div className="App">
       <Routes>
      <Route path='/' element={<Maincomponents/>}></Route>
      <Route path='/Gui' element={<Gui/>}></Route>
      <Route path='/Segmentation' element={<Segmentation/>}></Route>
      <Route path='/Trangulation' element={<Trangulation/>}></Route>
      <Route path='/Model' element={<Model/>}></Route>
      <Route path='/Cutting' element={<Cutting/>}></Route>



      

  

    </Routes>

    <Routes>
  
  
    </Routes>

    
    </div>
  );
}

export default App;
