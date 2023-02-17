import React from 'react';
import { useRef } from "react";
import { useEffect } from "react";
import { useInView } from "framer-motion";
import { useNavigate } from "react-router-dom";
import UseInterval from "../UseInterval"
import Audio from "./audioDisappear"
import "./Next.css";


function Section({ children }) {
  const navigate = useNavigate()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true,     margin: "0px 100px -50px 0px" });
  // const goToNext = () => {
  //   navigate("/next")
  // }
  // const changePage = setTimeout(() => {
  //   navigate("/next")
  // }, 5000)


    // console.log('Runpage변경')
    UseInterval(() => {
      navigate("/run")
    }, 1500)
  


  return (
    <section ref={ref}>
      
      <span
        style={{
          margin: "150px 0px 0px -90px",
          transform: isInView ? "translateX(-50px)" : "translateX(40px)",
          opacity: isInView ? 1 : 1,
          transition: "all 0.9s cubic-bezier(0.17, 0.5, 0.55, 1)"
        }}
      >
        <img id="image" src="img/코끼리.png" alt="test"/>
      </span>

      <span
        style={{
          margin: "50px 0px 0px -500px",
          transform: isInView ? "translateX(-50px)" : "translateX(30px)",
          opacity: isInView ? 1 : 1,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1)"
        }}
      >
        <img id="image" src="img/곰돌이.png" alt="test"/>
      </span>

      <span
        style={{
          margin: "-60px 0px 0px -530px",
          transform: isInView ? "translateX(-80px)" : "translateX(40px)",
          opacity: isInView ? 1 : 1,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1)"
        }}
      >
        <img id="image" src="img/사자.png" alt="test"/>
      </span>

      <span
        style={{
          margin: "-120px 0px 0px -520px",
          transform: isInView ? "translateX(-50px)" : "translateX(30px)",
          opacity: isInView ? 1 : 1,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1)"
        }}
      >
        <img id="image" src="img/선생님.png" alt="test"/>
      </span>
      <div style={{marginLeft: "4000px"}}>
      <Audio style={{ float:"right", position: "absolute", zIndex:"-3" }}></Audio>
      </div>
    </section>
  );
}

export default function Next() {
  return (

    <Section></Section>
  )
}