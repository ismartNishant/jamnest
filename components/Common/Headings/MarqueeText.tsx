'use client';
import React from 'react';
import { motion } from 'framer-motion';

interface MarqueeTextProps {
  children: React.ReactNode;
  className?: string;
  speed?: number; // Animation speed
}

const MarqueeText: React.FC<MarqueeTextProps> = ({ 
  children, 
  className = '', 
  speed = 50 
}) => {
  return (
    <div className="relative w-full  ">
      <motion.div
        className={`flex items-center gap-10  overflow-hidden   ${className} `}
        animate={{ x: ['0%', '-100%'] }} // Animate from 0% to -100%
        transition={{
          repeat: Infinity,
          ease: 'linear',
          duration: speed, // Adjust speed dynamically
        }}
        style={{
          willChange: 'transform', // Optimizes animation
        }}
      >
        {children}
        {children}
      </motion.div>
    </div>
  );
};

export default MarqueeText;
