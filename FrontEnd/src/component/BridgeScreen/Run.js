import React from 'react';
import { useRef } from "react";
import { useEffect } from "react";
import { useInView } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "./Next.css";
import UseInterval from "../UseInterval"
import Audio from "./audioRun"

function Section({ children }) {
  const navigate = useNavigate()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true,     margin: "0px 100px -50px 0px" });



    // console.log('Runpage변경')
    UseInterval(() => {
      navigate("/hello")
    }, 2000)
  


  return (
    <section ref={ref}>
      
      <span
        style={{
          margin: "0px 0px 0px -500px",
          transform: isInView ? "translateX(1500px) translateY(-500px)" : "translateX(100px) translateY(600px)",
          opacity: isInView ? 1 : 1,
          transition: "all 0.9s cubic-bezier(0.05, 0.02, 0.55, 1) 0.7s"
        }}
      >
        <img id="image" src="img/runele.png" alt="test"/>
      </span>

      <span
        style={{
          margin: "50px 0px 0px -500px",
          transform: isInView ? "translateX(1500px) translateY(100px)" : "translateX(-500px) translateY(0px)",
          opacity: isInView ? 1 : 1,
          transition: "all 0.9s cubic-bezier(0.17, 0.02, 0.55, 1) 0.5s"
        }}
      >
        <img id="image" src="img/runcat.png" alt="test"/>
      </span>

      <span
        style={{
          margin: "-60px 0px 0px -530px",
          transform: isInView ? "translateX(350px) translateY(-350px)" : "translateX(-500px) translateY(700px)",
          opacity: isInView ? 1 : 1,
          transition: "all 0.9s cubic-bezier(0.17, 0.02, 0.55, 1) 0.9s"
        }}
      >
        <img id="image" src="img/runlion.png" alt="test"/>
      </span>

      <span
        style={{
          margin: "-120px 0px 0px -520px",
          transform: isInView ? "translateX(-200px) translateY(-500px)" : "translateX(-1000px) translateY(200px)",
          opacity: isInView ? 1 : 1,
          transition: "all 0.9s cubic-bezier(0.17, 0.02, 0.55, 1) 1.1s"
        }}
      >
        <img id="image" src="img/runfox.png" alt="test"/>
      </span>
      <div style={{marginLeft: "4000px"}}>
      <Audio style={{ float:"right", position: "absolute", zIndex:"-3" }}></Audio>
      </div>
    </section>
  );
}

export default function Run() {
  return (

    <Section></Section>
  )
}