import { styled } from "styled-components";
import { useState } from "preact/hooks";

const Figure = styled.figure`
  width: 100%;
  max-width: 460px;
  margin: 0;
  display: flex;
  flex-direction: column;

  video {
    max-width: 100%;
    width: 100%;
    border-radius: 20px;
    cursor: pointer;
  }

  figcaption {
    text-align: center; /* Centralizes the title */
    color: black;
    font-size: 18px;
    margin-top: 8px; /* Space between the video and the title */
  }
`;

const Video = ({ foto }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPause = (event) => {
    const videoElement = event.target;
    if (videoElement.paused) {
      videoElement.play();
      setIsPlaying(true);
    } else {
      videoElement.pause();
      setIsPlaying(false);
    }
  };

  return (
    <Figure>
      <Image
        src={foto.path}
        alt={foto.alt}
        controls
        onClick={handlePlayPause}
      />
      <figcaption>{foto.titulo}</figcaption>
    </Figure>
  );
};

export default Video;
