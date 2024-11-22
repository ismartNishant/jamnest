'use client'
import { motion } from 'framer-motion';
import React from 'react';

interface GradientHeadingProps {
    children?: React.ReactNode; // Optional, default provided
    className?: string;
    color1?: string; // First color of the gradient
    color2?: string; // Second color of the gradient
}

const GradientHeading: React.FC<GradientHeadingProps> = ({
    children = 'Gradient Heading', // Default children text
    className = '',
    color1 = '#EB1F50', // Default gradient color 1
    color2 = '#6A1B9A'  // Default gradient color 2
}) => {
    return (
        <motion.div
            animate={{ x: ['0%', '-100%'] }} // Animate from 0% to -100%
            transition={{
                repeat: Infinity,
                ease: 'linear',
                duration: 20, // Adjust speed dynamically
            }}
            >
            <h1
                className={`w-full tracking-wide text-center font-bold text-clip text-black whitespace-nowrap ${className}`}
                style={{
                    backgroundImage: `linear-gradient(to right, ${color1}, ${color2})`,
                    WebkitBackgroundClip: 'text',
                    WebkitTextStrokeColor: 'transparent',
                    WebkitTextStrokeWidth: '3px',
                }}
            >
                {children}
            </h1>
        </motion.div>
    );
};

export default GradientHeading;
