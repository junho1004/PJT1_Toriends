import React from 'react'
import { useState } from 'react'
import { useNavigate } from "react-router-dom";
import "./CatchBF.css"
import UseInterval from "../UseInterval"


export default function CatchBF() {
    let ws = new WebSocket("ws://i8c203.p.ssafy.io:8002")
    const navigate = useNavigate()
    const [timer, setTimer] = useState("00:00:00")
    const [hour, setHour] = useState("")
    const [exist, setExist] = useState("")
    const [img, setImg] = useState("")
    const [bgimg, setBgimg] = useState("")
    // const [minutes, setMinutes] = useState("")


    UseInterval (() => {
        console.log("잇런치 유스인터벌")
        const currentTimer = () => {
            const date = new Date()
            const hours = String(date.getHours()).padStart(2, "0")
            const minutes = String(date.getMinutes()).padStart(2, "0")
            // setMinutes(minutes)
            const seconds = String(date.getSeconds()).padStart(2, "0")
            if (hours === "13") {
                setTimer(`1시 ${minutes}분 ${seconds}초`)
            } else if (hours === "14") {
                setTimer(`2시 ${minutes}분 ${seconds}초`)
            } else if (hours === "15") {
                setTimer(`3시 ${minutes}분 ${seconds}초`)
            } else if (hours === "16") {
                setTimer(`4시 ${minutes}분 ${seconds}초`)
            } else if (hours === "17") {
                setTimer(`5시 ${minutes}분 ${seconds}초`)
            } else if (hours === "18") {
                setTimer(`6시 ${minutes}분 ${seconds}초`)
            } else if (hours === "19") {
                setTimer(`7시 ${minutes}분 ${seconds}초`)
            } else if (hours === "20") {
                setTimer(`8시 ${minutes}분 ${seconds}초`)
            } else if (hours === "21") {
                setTimer(`9시 ${minutes}분 ${seconds}초`)
            } else if (hours === "22") {
                setTimer(`10시 ${minutes}분 ${seconds}초`)
            } else if (hours === "23") {
                setTimer(`11시 ${minutes}분 ${seconds}초`)
            } else if (hours === "24") {
                setTimer(`12시 ${minutes}분 ${seconds}초`)
            } else if (hours === "12") {
                setTimer(`12시 ${minutes}분 ${seconds}초`)
            } else if (hours === "11") {
                setTimer(`11시 ${minutes}분 ${seconds}초`)
            } else if (hours === "10") {
                setTimer(`10시 ${minutes}분 ${seconds}초`)
            } else if (hours === "09") {
                setTimer(`9시 ${minutes}분 ${seconds}초`)
            } else if (hours === "08") {
                setTimer(`8시 ${minutes}분 ${seconds}초`)
            } else if (hours === "07") {
                setTimer(`7시 ${minutes}분 ${seconds}초`)
            } else if (hours === "06") {
                setTimer(`6시 ${minutes}분 ${seconds}초`)
            } else if (hours === "05") {
                setTimer(`5시 ${minutes}분 ${seconds}초`)
            } else if (hours === "04") {
                setTimer(`4시 ${minutes}분 ${seconds}초`)
            } else if (hours === "03") {
                setTimer(`3시 ${minutes}분 ${seconds}초`)
            } else if (hours === "02") {
                setTimer(`2시 ${minutes}분 ${seconds}초`)
            } else if (hours === "01") {
                setTimer(`1시 ${minutes}분 ${seconds}초`)
            } else if (hours === "00") {
                setTimer(`12시 ${minutes}분 ${seconds}초`)
            }
            
            setHour(`${hours}`)
        }
        currentTimer()

         if (hour === "12") {
            setImg("img/wait/EatLunch.gif")
            setBgimg("")
        }  else if (hour === "14") {
            setImg("img/wait/Sleep1.gif")
            setBgimg("")
        }   else {
            setBgimg("url(img/wait/CatchBF.gif)")
            setImg("")
        }


        ws.onmessage = (event) => {
        console.log("런치에서 넘어옴")
        setExist(event.data)
        console.log(exist)
        ws.close()
        if (exist) {
            navigate("/main")
        }
        }  
    }, 1000)

    const moveMain = () => {
        navigate("/main")
    }

    return (
        <div onClick={moveMain}>
            <div style={{
                width: "1920px",
                height: "1080px",
                backgroundImage: `${bgimg}`,
            }}>
                <h1 style={{
                    textAlign: "left",
                    padding: "50px",
                    margin: "0px",
                    color: "white"
                }}>{timer}</h1>
                <img style={{
                    paddingRight: "800px",
                    marginTop: "100px",
                }}
                    src={img} alt="" />
            </div>
        </div>
    )
}