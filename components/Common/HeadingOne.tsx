import { Ubuntu } from 'next/font/google';
import React from 'react';

const ubuntu = Ubuntu({
  subsets: ['latin'],
  display: 'swap',
  weight: ['300', '400', '700'],
});

export const HeadingOne = ({ children = "Heading Goes Here!", className = "" }) => {
  return (
    <h1 className={`${ubuntu.className} ${className}`}>
      {children}
    </h1>
  );
};
