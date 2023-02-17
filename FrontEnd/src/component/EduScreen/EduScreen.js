import React from 'react';
import "./WebSoket.css"
import Video from "./VideoComponent"
import Websoket from "./WebSoket"
import UseInterval from '../UseInterval';
import { useNavigate } from "react-router-dom";


export default function EduScreen () {
    const navigate = useNavigate()
    UseInterval(() => {
        navigate("/stamp")
      }, 122000)

      
    return (
        <>        
          <div style={{position: "absolute", }}>
            <img 
              style={{
                position: "absolute",
                height:"500px",
                width: "700px",
                left : "700px"
              }}
              src="img/edu/toothfox.gif" />
            </div>
            <div style={{position: "absolute", }}>
            <img 
              style={{
                position: "absolute",
                height:"500px",
                width: "700px",
                left: "250px"
              }}
              src="img/edu/toothcat.gif" />
            </div>
            <div style={{position: "absolute", }}>
            <img 
              style={{
                position: "absolute",
                height:"500px",
                width: "700px",
                left: "-200px"
              }}
              src="img/edu/toothlion.gif" />
            </div>


          <Video style={{marginTop : "200px", zIndex:"-4"}}/>
          <Websoket/>  
        </>
        )
    }