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
          className="bg-transparent rounded-full border-2 border-black/60 text-black/60 hover:bg-black hover:text-white transition duration-300 fixed bottom-28 right-10 z-10 font-bold w-10 h-10"
          onClick={scrollToTop}
        >
          &#x25B2;
        </button>
      )}
    </>
  );
};

export default ScrollToTop;
