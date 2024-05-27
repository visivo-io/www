// components/GifToVideo.js
import { useState } from 'react';
import styled from 'styled-components';

const GifToVideo = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const handleButtonClick = () => {
    setIsVideoPlaying(true);
  };

  return (
    <Container>
      {!isVideoPlaying ? (
        <img
          src="/gifs/demo.gif"
          alt="Loading GIF"
          style={{ width: '100%' }}
        />
      ) : (
        <video
          src="/videos/demo.mov"
          controls
          autoPlay
          style={{ width: '100%' }}
        />
      )}
      {!isVideoPlaying && (
        <Button
          onClick={handleButtonClick}
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            padding: '10px 20px',
            fontSize: '16px',
            cursor: 'pointer',
          }}
        >
          Watch 30-Second Demo
        </Button>
      )}
    </Container>
  );
};

export default GifToVideo;

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
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  border-radius: 5px;
`;
