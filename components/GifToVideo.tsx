// components/GifToVideo.js
import { useState } from 'react';
import styled from 'styled-components';
import { media } from 'utils/media';
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
      />
      ) : (
        <video
          src="/videos/visivo-demo.mov"
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
          Watch 150-Second Demo
        </Button>
      )}
    </Container>
  );
};

export default GifToVideo;


const Icon = styled(FontAwesomeIcon)`
    width: 2.5em;
    height: 3em;
    margin-right: 5px;
    position: center;
    color: white ;

    ${media('<=desktop')} {
        width: 1.66em;
        height: 2.8em;
      }
`;

const Container = styled.div`
    width: 90%;
    position: relative;
    margin: 0 auto;
    max-width: 120rem;
    overflow: hidden;
    border-radius: 12px;
    `
  
const Button = styled.button`
  position: absolute;
  display: flex;
  justify-content: center;
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
  ${media('<=desktop')} {
    font-size: 12px;
    max-width: 17rem;
    background-color: rgba(113, 59, 87, 0.75);
  }
`;
