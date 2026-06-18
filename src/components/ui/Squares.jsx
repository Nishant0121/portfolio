import { useRef, useEffect, useState } from 'react';

const Squares = ({
  direction = 'right',
  speed = 1,
  borderColor = '#333',
  squareSize = 40,
  hoverFillColor = '#222',
}) => {
  const canvasRef = useRef(null);
  const requestRef = useRef();
  const numSquaresX = useRef(0);
  const numSquaresY = useRef(0);
  const gridOffset = useRef({ x: 0, y: 0 });
  const [hoveredSquare, setHoveredSquare] = useState(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      numSquaresX.current = Math.ceil(canvas.width / squareSize) + 1;
      numSquaresY.current = Math.ceil(canvas.height / squareSize) + 1;
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const effectiveSpeed = speed * 0.5;
      switch (direction) {
        case 'diagonal':
          gridOffset.current.x = (gridOffset.current.x - effectiveSpeed + squareSize) % squareSize;
          gridOffset.current.y = (gridOffset.current.y - effectiveSpeed + squareSize) % squareSize;
          break;
        case 'up':
          gridOffset.current.y = (gridOffset.current.y - effectiveSpeed + squareSize) % squareSize;
          break;
        case 'right':
          gridOffset.current.x = (gridOffset.current.x + effectiveSpeed) % squareSize;
          break;
        case 'down':
          gridOffset.current.y = (gridOffset.current.y + effectiveSpeed) % squareSize;
          break;
        case 'left':
          gridOffset.current.x = (gridOffset.current.x - effectiveSpeed + squareSize) % squareSize;
          break;
      }

      ctx.strokeStyle = borderColor;
      ctx.lineWidth = 0.5;

      for (let x = 0; x < numSquaresX.current; x++) {
        for (let y = 0; y < numSquaresY.current; y++) {
          const posX = x * squareSize + (gridOffset.current.x - squareSize);
          const posY = y * squareSize + (gridOffset.current.y - squareSize);

          if (hoveredSquare && hoveredSquare.x === x && hoveredSquare.y === y) {
            ctx.fillStyle = hoverFillColor;
            ctx.fillRect(posX, posY, squareSize, squareSize);
          }

          ctx.strokeRect(posX, posY, squareSize, squareSize);
        }
      }

      requestRef.current = requestAnimationFrame(draw);
    };

    requestRef.current = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, [direction, speed, borderColor, squareSize, hoverFillColor, hoveredSquare]);

  const handleMouseMove = (event) => {
    const rect = canvasRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = Math.floor((event.clientX - rect.left - (gridOffset.current.x - squareSize)) / squareSize);
    const y = Math.floor((event.clientY - rect.top - (gridOffset.current.y - squareSize)) / squareSize);
    setHoveredSquare({ x, y });
  };

  const handleMouseLeave = () => setHoveredSquare(null);

  return (
    <canvas
      ref={canvasRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="w-full h-full border-none block"
    />
  );
};

export default Squares;
