"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const ServiceFAQ = ({ faqs }) => {
  return (
    <div className="py-10 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-6">
        Frequently Asked Questions
      </h2>
      <div className="max-w-full mx-auto">
        {faqs && faqs.length > 0 ? (
          <Swiper
            slidesPerView={1}
            spaceBetween={35}
            centeredSlides={true}
            pagination={{ clickable: true }}
            breakpoints={{
              100: { slidesPerView: 1.5 },
              640: { slidesPerView: 2.5 },
              1440: { slidesPerView: 4.5 },
            }}
            className="cursor-grab"
          >
            {faqs.map((faq, index) => (
              <SwiperSlide key={index} className="flex flex-col mb-4">
                <div className="bg-white rounded-lg shadow-lg p-4 md:px-8 md:py-10 text-center flex flex-col h-full">
                  <h3 className="text-xl font-semibold mb-2">{faq.question}</h3>
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
