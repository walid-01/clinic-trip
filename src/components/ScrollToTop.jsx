"use client";
import { useState, useEffect } from "react";

const ScrollToTop = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
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
    <>
      {showButton && (
        <button
          className="fixed bottom-28 right-10 z-10 bg-gray-400 hover:bg-gray-700 text-white font-bold w-10 h-10 rounded-full"
          onClick={scrollToTop}
        >
          &#x25B2;
        </button>
      )}
    </>
  );
};

export default ScrollToTop;
