import React, { FC, ReactNode } from 'react';

type OutlinedHeadingProps = {
  children: ReactNode;
  className?: string;
};

const OutlinedHeading: FC<OutlinedHeadingProps> = ({ children, className = '' }) => {
  return (
    <h1
      className={` tracking-wide font-bold text-clip text-black leading-normal ${className}`}
      style={{
        backgroundImage: 'linear-gradient(to right, #FF2883, #4C24C1)',
        WebkitBackgroundClip: 'text',
        WebkitTextStrokeColor: 'transparent',
        WebkitTextStrokeWidth: '3px'
      }}

    >
      {children}
    </h1>
  );
};

export default OutlinedHeading;