"use client";
import { useState, useRef } from "react";
import Image from "next/image";
import Slider from "react-slick"; // Import react-slick

// Import slick-carousel CSS for the slider
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const BeforeAfter = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const sliderRef = useRef(null); // Create a ref for the slider to control it programmatically

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  // If no images are available, return a fallback message or empty component
  if (!images || images.length === 0) {
    return "";
    // <div>No images available</div>;
  }

  // Slider settings
  const settings = {
    infinite: true, // Allow infinite scrolling
    speed: 500, // Transition speed
    slidesToShow: 5, // Number of slides to show at once
    slidesToScroll: 1, // Number of slides to scroll per transition
    swipe: false, // Disable swipe by mouse or touch
    draggable: false, // Disable drag to move slides
    responsive: [
      {
        breakpoint: 1024, // Medium screens
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, // Smaller screens
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="py-20 px-28">
      <h1 className="text-center text-3xl font-bold mb-20">Before & After</h1>

      {/* Slider Component */}
      <div className="relative md:px-20 py-16">
        <Slider {...settings} ref={sliderRef}>
          {images.map((image, index) => (
            <div
              key={index}
              className="cursor-pointer px-3"
              onClick={() => handleImageClick(image)}
            >
              <Image
                src={`https:${image}`}
                alt={`Before & After collage ${index + 1}`}
                width={400}
                height={300}
                className="object-cover w-full h-auto rounded-lg shadow-md"
              />
            </div>
          ))}
        </Slider>

        {/* Custom Navigation Buttons */}
        <button
          className="absolute top-1/2 -left-10 left-0 md:left-6 transform -translate-y-1/2 bg-transparent rounded-full border-2 border-black/60 text-black/60 hover:bg-black hover:text-white transition duration-300 font-extrabold text-lg w-10 h-10"
          onClick={() => sliderRef.current.slickPrev()} // Go to previous slide
        >
          &#60;
        </button>
        <button
          className="absolute top-1/2 -right-10 md:right-6 transform -translate-y-1/2 bg-transparent rounded-full border-2 border-black/60 text-black/60 hover:bg-black hover:text-white transition duration-300 font-extrabold text-lg w-10 h-10"
          onClick={() => sliderRef.current.slickNext()} // Go to next slide
        >
          &#62;
        </button>
      </div>

      {/* Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
          onClick={handleCloseModal}
        >
          <div className="relative" onClick={(e) => e.stopPropagation()}>
            <Image
              src={`https:${selectedImage}`}
              alt="Selected Image"
              width={800}
              height={600}
              className="object-contain rounded-lg w-[400px] md:w-[650px]"
            />
            <button
              className="absolute top-2 right-2 bg-white p-2 rounded-full text-black"
              onClick={handleCloseModal}
            >
              X
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default BeforeAfter;
