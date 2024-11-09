"use client";
import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTopWithProgress = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.body.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;

      if (totalHeight > 0) {
        setScrollProgress((currentScroll / totalHeight) * 100);
      } else {
        setScrollProgress(0);
      }

      setIsVisible(currentScroll > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      className={` z-30 fixed hover:scale-110 duration-200 ease-in rounded-full h-12 w-12 md:w-14 md:h-14 right-2 bottom-4 md:right-4 flex justify-center items-center  ${isVisible ? "block" : "hidden"}`}
      style={{
        background: `conic-gradient(#FF2883 ${scrollProgress}%, transparent ${scrollProgress}% 100%)`,
      }}
    >
      <button
        onClick={scrollToTop}
        className="bg-black  text-white  flex justify-center items-center rounded-full shadow-md  focus:outline-none relative"
      >
        <FaArrowUp className="bg-white/15 hover:bg-primary/50 h-10 w-10 md:w-12 md:h-12   hover:backdrop-blur-md rounded-full text-sm p-2 md:p-3" />
      </button>
    </div>
  );
};

export default ScrollToTopWithProgress;
