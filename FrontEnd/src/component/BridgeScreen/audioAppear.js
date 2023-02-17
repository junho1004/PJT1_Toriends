import AudioPlayer from 'react-h5-audio-player'

export default function Player() {

  return (
      <AudioPlayer
        src="sounds/빼꼼소리_1.mp3"
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