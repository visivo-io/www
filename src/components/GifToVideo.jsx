// components/GifToVideo.js
import { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

const GifToVideo = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const handleButtonClick = () => {
    setIsVideoPlaying(true);
  };

  return (
    <Container>
      {!isVideoPlaying ? (
        <video
          src="/gifs/visivo-demo.webm" // Use the WebM file for initial display
          style={{ width: '100%' }}
          muted
          loop
          autoPlay
          currentTime={2}
          preload="metadata"
          loading="lazy"
        />
      ) : (
        <video
          src="/videos/visivo-demo.mp4"
          controls
          autoPlay
          style={{ width: '100%' }}
        />
      )}
      {!isVideoPlaying && (
        <Button
          onClick={handleButtonClick}
        >
          <Icon icon={faPlay} />
          <ButtonText>Watch 86<br />Second Demo</ButtonText>
        </Button>
      )}
    </Container>
  );
};

export default GifToVideo;


const Icon = styled(FontAwesomeIcon)`
    width: 1.7em;
    height: 1.7em;
    margin-right: 0;
    color: white;
    z-index: 1;
    @media (max-width: 768px) {
        width: 1.7em;
        height: 1.7em;
    }
`;

const ButtonText = styled.span`
    @media (max-width: 768px) {
        display: none;
    }
`;

const Container = styled.div`
    width: 95%;
    position: relative;
    margin: 0 auto;
    max-width: 120rem;
    overflow: hidden;
    border-radius: 35px;
    @media (max-width: 768px) {
      border-radius: 15px;
    }
    `

const Button = styled.button`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 50%;
  left: 50%;
  max-width: 20rem;
  transform: translate(-50%, -50%);
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  background-color: rgba(113, 59, 87, 0.95);
  color: white;
  border: none;
  border-radius: 5px;
  
  @media (max-width: 768px) {
    padding: 0;
    border-radius: 5px;
    width: 40px;
    height: 40px;
    max-width: none;
    font-size: inherit; /* Don't set to 0, so icon remains visible */
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
