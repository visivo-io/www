// components/GifToVideo.js
import { useState, useEffect } from 'react';
import { FaPlay } from 'react-icons/fa';

const GifToVideo = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [isWebmLoaded, setIsWebmLoaded] = useState(false);

  const handleButtonClick = () => {
    setIsVideoPlaying(true);
  };

  useEffect(() => {
    // Preload the webm video in the background
    const video = document.createElement('video');
    video.src = '/gifs/visivo-demo.webm';
    video.onloadeddata = () => {
      setIsWebmLoaded(true);
    };
  }, []);

  return (
    <div className="w-[95%] relative mx-auto max-w-[120rem] overflow-hidden rounded-[35px] md:rounded-[15px]">
      {!isVideoPlaying ? (
        isWebmLoaded ? (
          <video
            src="/gifs/visivo-demo.webm"
            style={{ width: '100%' }}
            muted
            loop
            autoPlay
            currentTime={2}
          />
        ) : (
          <img
            src="/images/visivo-demo-placeholder.webp"
            alt="Visivo Demo"
            style={{ width: '100%' }}
            loading="eager"
          />
        )
      ) : (
        <video
          src="/videos/visivo-demo.mp4"
          controls
          autoPlay
          style={{ width: '100%' }}
        />
      )}
      {!isVideoPlaying && (
        <button
          onClick={handleButtonClick}
          className="absolute flex justify-center items-center top-1/2 left-1/2 max-w-[20rem] transform -translate-x-1/2 -translate-y-1/2 px-5 py-2.5 text-base cursor-pointer bg-[rgba(113,59,87,0.95)] text-white border-none rounded-[5px] md:p-0 md:rounded-[5px] md:w-10 md:h-10 md:max-w-none"
        >
          <FaPlay className="w-[1.7em] h-[1.7em] mr-0 text-white z-[1] md:w-[1.7em] md:h-[1.7em]" />
          <span className="md:hidden ml-2">Watch 86<br />Second Demo</span>
        </button>
      )}
    </div>
  );
};

export default GifToVideo;
