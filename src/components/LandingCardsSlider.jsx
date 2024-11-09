"use client";
import { useState, useEffect } from "react";
import { useSwipeable } from "react-swipeable";
import landingCards from "@/data/landing-cards.json";
import Link from "next/link";

const LandingCardsSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false); // State to control animation

  // Function to navigate slides with custom animation
  const handleSlideChange = (index) => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentSlide(index);
      setIsAnimating(false);
    }, 300); // Animation duration in milliseconds
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () =>
      handleSlideChange((currentSlide + 1) % landingCards.length),
    onSwipedRight: () =>
      handleSlideChange(
        (currentSlide - 1 + landingCards.length) % landingCards.length
      ),
    preventScrollOnSwipe: true,
    trackMouse: true,
  });

  // useEffect to handle automatic slide changes
  useEffect(() => {
    const interval = setInterval(() => {
      handleSlideChange((currentSlide + 1) % landingCards.length);
    }, 10000); // 5 seconds interval

    // Clear interval on component unmount
    return () => clearInterval(interval);
  }, [currentSlide]);

  return (
    <div
      {...swipeHandlers}
      className="flex justify-center xl:justify-normal items-center h-[100vh] relative z-0"
    >
      <img
        src="/assets/Clinic.jpg"
        className="w-full h-full object-cover absolute -z-10"
        alt="clinic"
      />
      {/* Gradient Background */}
      {/* <div
        className="absolute w-full h-full -z-10"
        style={{
          background: "linear-gradient(to bottom right, #ede9fd, #f5f3ff)",
        }}
      ></div> */}

      {/* Slide Content */}
      <div className="cursor-grab bg-white/40 backdrop-blur-sm mx-20 w-[85vw] p-5 py-20 xl:p-8 rounded-lg shadow-md max-w-4xl xl:ml-44 relative z-50">
        {/* Title and Description with animation */}
        <div
          className={`transition-all duration-300 transform ${
            isAnimating
              ? "opacity-0 translate-y-4"
              : "opacity-100 translate-y-0"
          }`}
        >
          <h2 className="text-6xl font-bold mb-6">
            {landingCards[currentSlide].title}
          </h2>
          <p className="mb-6 text-xl">
            {landingCards[currentSlide].description}
          </p>
        </div>
        <Link
          href={`/services/${landingCards[currentSlide].slug}`}
          className="btn btn-secondary rounded-none z-50 relative text-lg transition duration-200 ease-in-out hover:bg-gray-100 hover:text-black"
        >
          Learn More
        </Link>
      </div>

      {/* Centered Navigation Buttons */}
      <div className="absolute inset-y-0 left-4 right-4 flex justify-between items-center z-10">
        <button
          onClick={() =>
            handleSlideChange(
              (currentSlide - 1 + landingCards.length) % landingCards.length
            )
          }
          className="text-white bg-white p-2 lg:ml-16 rounded-full z-50"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.1795 3.26875C15.7889 2.87823 15.1558 2.87823 14.7652 3.26875L8.12078 9.91322C6.94952 11.0845 6.94916 12.9833 8.11996 14.155L14.6903 20.7304C15.0808 21.121 15.714 21.121 16.1045 20.7304C16.495 20.3399 16.495 19.7067 16.1045 19.3162L9.53246 12.7442C9.14194 12.3536 9.14194 11.7205 9.53246 11.33L16.1795 4.68297C16.57 4.29244 16.57 3.65928 16.1795 3.26875Z"
              fill="#0F0F0F"
            />
          </svg>
        </button>
        <button
          onClick={() =>
            handleSlideChange((currentSlide + 1) % landingCards.length)
          }
          className="text-white bg-white p-2 lg:mr-16 rounded-full z-50"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.82054 20.7313C8.21107 21.1218 8.84423 21.1218 9.23476 20.7313L15.8792 14.0868C17.0505 12.9155 17.0508 11.0167 15.88 9.84497L9.3097 3.26958C8.91918 2.87905 8.28601 2.87905 7.89549 3.26958C7.50497 3.6601 7.50497 4.29327 7.89549 4.68379L14.4675 11.2558C14.8581 11.6464 14.8581 12.2795 14.4675 12.67L7.82054 19.317C7.43002 19.7076 7.43002 20.3407 7.82054 20.7313Z"
              fill="#0F0F0F"
            />
          </svg>
        </button>
      </div>

      {/* Centered Dots Navigation */}
      <div className="absolute bottom-8 flex justify-center w-full z-20">
        {landingCards.map((_, index) => (
          <button
            key={index}
            onClick={() => handleSlideChange(index)}
            className={`w-3 h-3 mx-1 rounded-full ${
              index === currentSlide ? "bg-black" : "bg-black/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default LandingCardsSlider;
