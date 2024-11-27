"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const ServiceFAQ = ({ faqs }) => {
  return (
    <div className="py-14 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-14">
        Frequently Asked Questions
      </h2>
      <div className="max-w-full mx-auto">
        {faqs && faqs.length > 0 ? (
          <Swiper
            slidesPerView={1}
            spaceBetween={25}
            centeredSlides={true}
            pagination={{ clickable: true }}
            breakpoints={{
              // Define breakpoints for responsive design
              100: {
                slidesPerView: 1.5,
              },

              768: {
                slidesPerView: 2,
              },

              1024: {
                slidesPerView: 3,
              },

              1440: {
                slidesPerView: 4,
              },
            }}
            className="cursor-grab"
          >
            {faqs.map((faq, index) => (
              <SwiperSlide key={index} className="flex flex-col mb-4">
                <div className="flex flex-col items-center justify-center bg-white border shadow-md border-gray-300 rounded-lg p-6 md:px-10 md:py-10 text-center xs:h-[400px] sm:h-[350px] md:h-[390px] lg:h-[450px] xl:h-[350px]">
                  <h3 className="text-xl font-semibold mb-6">{faq.question}</h3>
                  <p className="text-gray-700 flex-grow">{faq.answer}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <p className="text-center text-gray-500">No FAQs available.</p>
        )}
      </div>
    </div>
  );
};

export default ServiceFAQ;
