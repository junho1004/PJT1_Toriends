import { createRef, useEffect, useRef } from 'react';
import AudioPlayer from 'react-h5-audio-player';
import { useState } from "react"

// import 'react-h5-audio-player/lib/styles.less' Use LESS
// import 'react-h5-audio-player/src/styles.scss' Use SASS

export default function Player() {
  const [visible, setVisible] = useState(false)

  return (
      <AudioPlayer
        src="sounds/달려가는소리.mp3"

        autoPlay={true}
        volume={0.5}
        hidePlayer={true}
        showJumpControls={false}
        showDownloadProgress={false}
        showFilledProgress={false}
        showFilledVolume={false}
        showSkipControls={false}

      />

  );
}