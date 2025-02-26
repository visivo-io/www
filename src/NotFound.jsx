import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  const containerRef = useRef(null);
  const logoRef = useRef(null);
  const velocityRef = useRef({ x: 2, y: 2 });
  const positionRef = useRef({ x: 0, y: 0 });
  const animationFrameRef = useRef();
  const [, forceRender] = useState({});

  useEffect(() => {
    const updateDimensions = () => {
      if (!containerRef.current || !logoRef.current) return;
      
      const container = containerRef.current;
      const logo = logoRef.current;
      
      const animate = () => {
        const containerWidth = container.offsetWidth;
        const containerHeight = container.offsetHeight;
        const logoWidth = logo.offsetWidth;
        const logoHeight = logo.offsetHeight;

        let newX = positionRef.current.x + velocityRef.current.x;
        let newY = positionRef.current.y + velocityRef.current.y;

        // Bounce off walls
        if (newX + logoWidth > containerWidth || newX < 0) {
          velocityRef.current.x = -velocityRef.current.x;
        }
        if (newY + logoHeight > containerHeight || newY < 0) {
          velocityRef.current.y = -velocityRef.current.y;
        }

        // Keep logo within bounds
        newX = Math.max(0, Math.min(containerWidth - logoWidth, newX));
        newY = Math.max(0, Math.min(containerHeight - logoHeight, newY));

        positionRef.current = { x: newX, y: newY };
        forceRender({});
        animationFrameRef.current = requestAnimationFrame(animate);
      };

      animate();
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);

    return () => {
      window.removeEventListener('resize', updateDimensions);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    
    <div className="flex flex-col items-center justify-center min-h-[94vh] text-center px-4 -mt-16">
      <p className="mb-8 text-xl text-gray-600 dark:text-gray-400">
        Oops! This page doesn't exist 😬... at least you could see a corner hit!
      </p>
      <div 
        ref={containerRef} 
        className="relative w-full h-[60vh] mb-8 border border-gray-300 rounded-lg overflow-hidden bg-gray-50"
      >
        {/* Background 404 Text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
          <h1 className="text-[12rem] md:text-[20rem] font-bold text-gray-200 dark:text-gray-800/50">
            404
          </h1>
          <Link to="/" className="text-blue-300 hover:text-blue-400 font-medium pointer-events-auto -mt-8">
            Return to Home
          </Link>
        </div>
        
        <div
          ref={logoRef}
          className="absolute z-10"
          style={{
            left: `${positionRef.current.x}px`,
            top: `${positionRef.current.y}px`,
          }}
        >
          <img 
            src="/images/big-logo.webp" 
            alt="Visivo Logo" 
            className="h-16 w-auto"
          />
        </div>
      </div>
      
    </div>
  );
}

export default NotFound; 