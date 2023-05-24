import "./App.css";
import classse from "./BackgroundVideo.module.css";

const BackgroundVideo = () => {
  const videoSource =
    "https://www.pexels.com/video/sea-water-blue-ocean-7513671/";
  return (
    <div className={classse.Container}>
      <video autoPlay="autoplay" loop="loop" muted className={classse.Video}>
        <source src={videoSource} type="video/webm" />
        TEST
      </video>
    </div>
  );
};

export default BackgroundVideo;
