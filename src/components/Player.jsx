import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

export default function Player() {
  return (
    <AudioPlayer
      className="fixed bottom-0"
      autoPlay
      volume={0.1}
      src="./player.mp3"
    />
  );
}
