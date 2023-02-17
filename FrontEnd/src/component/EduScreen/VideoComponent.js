import ReactPlayer from 'react-player';

const VideoComponent = () => {
    return (
        <>
            <div 
            style={{
                marginLeft: "0px",
                marginTop: "150px",
                float: "left",
                height: "1080px",
                width: "50%",
            }}>
                <ReactPlayer
                    // "https://youtu.be/BZmdxw3owWw", "https://youtu.be/8sM0L5zFQ-Q"
                    url= {"https://youtu.be/I8elXDoMDkM"}
                    width='1100px'         // 플레이어 크기 (가로)
                    height='1000px'        // 플레이어 크기 (세로)
                    playing={true}

                    muted={false}
                    controls={true}       // 플레이어 컨트롤 노출 여부
                    onError={(error) => {console.log(error);}}
                    />
            </div>
        </>
    )
}

export default VideoComponent;