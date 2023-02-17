import React from 'react';
import { useRef } from "react";
import { useEffect } from "react";
import { useInView } from "framer-motion";
import { useNavigate } from "react-router-dom";
import UseInterval from "../UseInterval"
import "./Hello.css";


function Section({ children }) {
  const navigate = useNavigate()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true,     margin: "0px 100px -50px 0px" });


    UseInterval(() => {
      navigate("/hellogif")
    }, 1100)
  

return (
    <section ref={ref}>
      
      <span
        style={{
          margin: "0px 0px 0px -500px",
          transform: isInView ? "translateX(1000px) translateY(0px)" : "translateX(1000px) translateY(-600px)",
          opacity: isInView ? 1 : 1,
          transition: "all 0.9s cubic-bezier(0.05, 0.5, 0.55, 1)",
          
        }}
      >
        <img id="image" src="img/helloele-removebg.png" alt="test"/>
      </span>

      <span
        style={{
          margin: "50px 0px 0px -500px",
          transform: isInView ? "translateX(1200px) translateY(0px)" : "translateX(1300px) translateY(-600px)",
          opacity: isInView ? 1 : 1,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1)"
        }}
      >
        <img id="image" src="img/hellocat-removebg.png" alt="test"/>
      </span>

      <span
        style={{
          margin: "-60px 0px 0px -530px",
          transform: isInView ? "translateX(350px) translateY(150px)" : "translateX(350px) translateY(-600px)",
          opacity: isInView ? 1 : 1,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1)"
        }}
      >
        <img id="image" src="img/hellolion-removebg.png" alt="test"/>
      </span>

      <span
        style={{
          margin: "-120px 0px 0px -520px",
          transform: isInView ? "translateX(-100px) translateY(100px)" : "translateX(0px) translateY(-600px)",
          opacity: isInView ? 1 : 1,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1)"
        }}
      >
        <img id="image" src="img/hellofox-removebg.png" alt="test"/>
      </span>
    </section>
  );
      }

export default function Hello() {
  return (

    <Section></Section>
  )
}