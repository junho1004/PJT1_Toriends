import React from 'react';
import { useRef } from "react";
import { useEffect } from "react";
import { useInView } from "framer-motion";
import { useNavigate } from "react-router-dom";
import UseInterval from "../UseInterval"
import Audio from "./audioAppear"
import "./Main.css";


function Section({ children }) {

  const navigate = useNavigate()
  UseInterval(() => {
    navigate("/next")
  }, 3000)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true,     margin: "0px 100px -50px 0px" });
  // const goToNext = () => {
  //   navigate("/next")
  // }

  

  return (
    <section ref={ref}>
      
      <span
        style={{
          margin: "150px 0px 0px -50px",
          transform: isInView ? "none" : "translateX(-100px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
        }}
      >
        <img id="image" src="img/코끼리.png" alt="test"/>
      </span>

      <span
        style={{
          margin: "50px 0px 0px -523px",
          transform: isInView ? "none" : "translateX(-100px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 1s"
        }}
      >
        <img id="image" src="img/곰돌이.png" alt="test"/>
      </span>

      <span
        style={{
          margin: "-60px 0px 0px -520px",
          transform: isInView ? "none" : "translateX(-100px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 1.5s"
        }}
      >
        <img id="image" src="img/사자.png" alt="test"/>
      </span>

      <span
        style={{
          margin: "-120px 0px 0px -520px",
          transform: isInView ? "none" : "translateX(-100px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 2s"
        }}
      >
        <img id="image" src="img/선생님.png" alt="test"/>
      </span>

      {/* <img style={{ position: "absolute", }} src="img/123.png"/> */}
      <div style={{marginLeft: "4000px"}}>
      <Audio style={{ float:"right", position: "absolute", zIndex:"-3" }}></Audio>
      </div>
    </section>
  );
}

export default function Main() {
  return (

    <Section></Section>
  )
}