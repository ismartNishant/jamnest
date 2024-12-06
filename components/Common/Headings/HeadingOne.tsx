
import React from 'react';


export const HeadingOne = ({ children = "Heading Goes Here!", className = "" }) => {
  return (
    <h1 className={`font-Ubuntu text-2xl lg:text-4xl font-medium tracking-wide ${className}`}>
      {children}
    </h1>
  );
};
