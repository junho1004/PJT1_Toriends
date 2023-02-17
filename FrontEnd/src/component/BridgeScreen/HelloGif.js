import React from 'react';
import { useRef } from "react";
import { useState } from "react";
// import { useInterval } from "react";
import { useEffect } from "react";
// import { useCallback } from "react"
import { useInView } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "./Hello.css";
import useInterval from '../UseInterval';
import Audio from "./audioTts"
// const idleTimeout = 1000
function Section({ children }) {
    const [checkTimer, setcheckTimer] = useState(0)
    const [pressButton, setpressButton] = useState("")
    const navigate = useNavigate()
    
    useInterval(() => {
        if ( checkTimer === 3 ) {
          navigate("/")
        } else if ( checkTimer < 4 ) {
          setcheckTimer(checkTimer + 1)
        }
        console.log(checkTimer)
      }, 30000)
        // console.log(hour)

    const readyChange = () => {
      let ws = new WebSocket("ws://i8c203.p.ssafy.io:8003/command")
      ws.onmessage = (event) => {
        // setpressButton(event.data)
        if ( event.data === "OK" ) {
          navigate("/notice")
        }
        console.log(pressButton)
        console.log(event.data)
      }
  }
    readyChange()
    // goHomeTimer()
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true,     margin: "0px 100px -50px 0px" });
    const moveNotice = () => {
      navigate("/notice")
  }
          return (
            <section ref={ref} onClick={moveNotice}>
      
      <span
        style={{
          margin: "0px 0px 0px -500px",
          transform: isInView ? "translateX(1000px) translateY(0px)" : "translateX(1000px) translateY(0px)",
          opacity: isInView ? 1 : 1,
          transition: "all 0.9s cubic-bezier(0.05, 0.5, 0.55, 1)",
          
        }}
      >
        <img id="image" src="img/코끼리움짤.gif" alt="test"/>
      </span>

      <span
        style={{
          margin: "50px 0px 0px -500px",
          transform: isInView ? "translateX(1200px) translateY(0px)" : "translateX(1200px) translateY(0px)",
          opacity: isInView ? 1 : 1,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1)"
        }}
      >
        <img id="image" src="img/고양이움짤.gif" alt="test"/>
      </span>

      <span
        style={{
          margin: "-60px 0px 0px -530px",
          transform: isInView ? "translateX(350px) translateY(150px)" : "translateX(350px) translateY(150px)",
          opacity: isInView ? 1 : 1,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1)"
        }}
      >
        <img id="image" src="img/사자움짤.gif" alt="test"/>
      </span>

      <span
        style={{
          margin: "-120px 0px 0px -520px",
          transform: isInView ? "translateX(-100px) translateY(100px)" : "translateX(-100px) translateY(100px)",
          opacity: isInView ? 1 : 1,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1)"
        }}
      >
        <img id="image" src="img/여우움짤.gif" alt="test"/>
      </span>
      <span
        style={{
          margin: "420px 0px 0px -920px",
          transform: isInView ? "translateX(400px) translateY(100px)" : "translateX(-200px) translateY(100px)",
          opacity: isInView ? 1 : 1,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1)"
        }}
      >
        <img id="image" src="img/토렌즈마크.png" alt="test"/>
      </span>
      <div style={{marginLeft: "4000px"}}>
      <Audio style={{ float:"right", position: "absolute", zIndex:"-3" }}></Audio>
      </div>
      {/* <div style={{position: "absolute", float: "left",}}>
        <img style={{
          width: "300px",
          height: "140px",
          align: "left",
          marginTop: "550px",
          marginLeft: "50px"
          }} 
          src="img/토렌즈마크.png" alt="1234"/>
        </div> */}
    </section>
  )}
export default function HelloGif() {
  return (

    <Section></Section>
  )
}