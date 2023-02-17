import React from 'react';
import "./WebSoket.css"
import UseInterval from "../UseInterval"
import { useNavigate } from "react-router-dom";
import WebSoket2 from './Websoket2';


function Stamp() {
    const navigate = useNavigate()
    const readyChange = () => {
        let ws = new WebSocket("ws://i8c203.p.ssafy.io:8003/command")
        ws.onmessage = (event) => {
          if ( event.data === "OK" ) {
            navigate("/")
          }
          console.log(event.data)
        }
    }
      readyChange()
      UseInterval(() => {
        console.log("스탬프 화면")
        navigate("/")
      }, 6000)
    return (
        <>        
          <div
          style={{
              marginLeft: "0px",
              marginTop: "150px",
              float: "left",
              height: "1080px",
              width: "50%",
              zIndex: "-2"
          }}
          >
              <img style={{
                  height: "80%",
                  width: "150%",
              }} 
              src="img/edu/stamp1.gif" alt="dd"/>
          </div>
          <WebSoket2 style={{zIndex: "-1"}}/>
        </>
        )
    }
export default Stamp;