
import React from 'react';


export const HeadingOne = ({ children = "Heading Goes Here!", className = "" }) => {
  return (
    <h1 className={`font-Ubuntu text-xl lg:text-3xl font-medium tracking-wide ${className}`}>
      {children}
    </h1>
  );
};
