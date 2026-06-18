import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

export default function TiltedCard({
  imageSrc,
  altText = "Tilted card image",
  captionText,
  containerHeight = "300px",
  containerWidth = "100%",
  imageHeight = "300px",
  imageWidth = "100%",
  scaleOnHover = 1.05,
  rotateAmplitude = 12,
  showTooltip = true,
  overlayContent
}) {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], [rotateAmplitude, -rotateAmplitude]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], [-rotateAmplitude, rotateAmplitude]);

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div
      className="relative flex items-center justify-center"
      style={{ height: containerHeight, width: containerWidth }}
    >
      <motion.div
        ref={ref}
        className="relative overflow-hidden rounded-2xl bg-[#1a1817] border border-white/10 shadow-2xl cursor-pointer"
        style={{
          height: imageHeight,
          width: imageWidth,
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        whileHover={{ scale: scaleOnHover }}
      >
        <div style={{ transform: "translateZ(50px)", transformStyle: "preserve-3d" }} className="w-full h-full relative">
          <img
            src={imageSrc}
            alt={altText}
            className="w-full h-full object-cover transition-all duration-500 opacity-80 group-hover:opacity-100"
          />
          {overlayContent && (
            <div className="absolute inset-0 z-20">
              {overlayContent}
            </div>
          )}
        </div>
      </motion.div>
      {showTooltip && captionText && (
        <div 
          className="absolute bottom-6 left-6 z-30 text-white font-bold text-xl drop-shadow-lg pointer-events-none"
          style={{ transform: "translateZ(75px)" }}
        >
          {captionText}
        </div>
      )}
    </div>
  );
}
