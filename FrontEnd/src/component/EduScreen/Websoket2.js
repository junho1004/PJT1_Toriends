import React from 'react';
import { useState } from "react";
import "./WebSoket.css"

function WebSoket2() {
    const [img1, setImg1] = useState("img/edu/bling1.gif")
    const [img2, setImg2] = useState("img/edu/bling2.gif")
    const [img3, setImg3] = useState("img/edu/bling3.gif")
    let ws = new WebSocket("ws://i8c203.p.ssafy.io:8002")
    ws.onmessage = (event) => {
        let datas = JSON.parse(event.data)
        console.log(event.data)
        let UpperLibNum = datas['upperLib'].split(',')
        let LeftEyeNum = datas['leftEye'].split(',')
        let UpperLib1_img = document.querySelector('#virus1')
        UpperLib1_img.style.top = ((parseInt(UpperLibNum[1])) *1.2 ) + 'px'
        UpperLib1_img.style.left = ((parseInt(UpperLibNum[0])) / 2 + 1020) + 'px'

        let UpperLib2_img = document.querySelector('#virus2')
        UpperLib2_img.style.top = ((parseInt(UpperLibNum[1])) *1.2 + 150) + 'px'
        UpperLib2_img.style.left = ((parseInt(UpperLibNum[0])) / 2 + 880) + 'px'

        let UpperLib3_img = document.querySelector('#virus3')
        UpperLib3_img.style.top = ((parseInt(UpperLibNum[1])) *1.2) + 'px'
        UpperLib3_img.style.left = ((parseInt(UpperLibNum[0])) / 2 + 680) + 'px'

        let LeftEye_img = document.querySelector('#sunglass')
        LeftEye_img.style.top = ((parseInt(LeftEyeNum[1])) *1.2 - 150) + 'px'
        LeftEye_img.style.left = ((parseInt(LeftEyeNum[0])) / 2 + 780) + 'px'
      }
    return (
      <div>
        <div
          style={{
            height: "1080px",
            width: "50%",
            float: "right",

          }}
        >
            <img id="virus1" style={{ 
              position: "absolute",
              width: "200px",
              height: "150px"

            }} src={img1} alt="img/edu/virus1.gif"/>
            <img id="virus2" style={{ 
              position: "absolute",
              width: "200px",
              height: "150px"

            }} src={img2} alt="img/edu/virus2.gif"/>
            <img id="virus3" style={{ 
              position: "absolute",
              width: "200px",
              height: "150px"
            }} src={img3} alt="img/edu/virus3.gif"/>
            <img id="sunglass" style={{ 
              position: "absolute",
              width: "400px",
              height: "300px"
            }} src="img/edu/sunglass.png" alt="img/edu/virus3.gif"/>
        </div>
      </div>
    );
  }

export default WebSoket2;