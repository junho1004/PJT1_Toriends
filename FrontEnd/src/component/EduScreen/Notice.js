import React from 'react';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import UseInterval from "../UseInterval"

function Notice () {
    const [checkTimer, setcheckTimer] = useState(0)
    const [pressButton, setpressButton] = useState("")
    const navigate = useNavigate()
    UseInterval(() => {
        console.log("123")
        if ( checkTimer === 3) {
        } else if ( checkTimer < 4 ) {
            setcheckTimer(checkTimer +1)
        }
    }, 30000)

    const readyChange = () => {
        let ws = new WebSocket("ws://i8c203.p.ssafy.io:8003/command")
        ws.onmessage = (event) => {
          if ( event.data === "OK" ) {
            navigate("/eduscreen")
          }
        }
    }
      readyChange()

    const moveEduscreen = () => {
        navigate("/eduscreen")
    }
 return (
        <div onClick={moveEduscreen}>
            <img style={{
                margin: "auto",
                marginTop: "200px",
                display: "flex",
                justifyContent: "center",

            }}
            src="img/edu/notice.png" alt="1234"/>
            <h1 style={{
                fontSize: "50px",
                color: "white"
            }}>버튼을 한번 더 눌러주세요!</h1>
        </div>
 )   
}
export default function notice() {
    return (
        <Notice></Notice>
    )
    
}