import ReactPlayer from 'react-player';
import React, { useRef } from 'react';
import { NavPage } from '../NavPage';
// const VIDEO_PATH = "./assets/GUI.mp4";
import VIDEO_PATH from "./../../assets/GUI.mp4";

function Gui() {
   const playerRef = useRef(null);
   return (
      <div>
        <NavPage/>


         <ReactPlayer ref={playerRef} url={VIDEO_PATH}width={1380}height={450} controls={true} type="video/mp4"/>
      </div>
   )
};
export default Gui;