"use client";
import { useEffect, useState } from "react";
import { createClient } from "contentful";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

const FAQ = () => {
  const [faqs, setFaqs] = useState([]);

  useEffect(() => {
    const client = createClient({
      space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
      accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_KEY,
    });

    const fetchFaqs = async () => {
      try {
        const res = await client.getEntries({
          content_type: "frequentlyAskedQuestions",
        });

        // Map the fetched items to the desired format
        const formattedFaqs = res.items.map((faq) => ({
          question: faq.fields.question,
          answer: faq.fields.answer,
        }));

        // console.log(formattedFaqs);
        setFaqs(formattedFaqs);
      } catch (error) {
        console.error("Error fetching FAQs:", error);
      }
    };

    fetchFaqs();
  }, []);

  return (
    <div className="py-10 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-6">
        Frequently Asked Questions
      </h2>
      <div className="max-w-full mx-auto">
        {faqs.length > 0 ? (
          <Swiper
            slidesPerView={1} // Default for mobile
            spaceBetween={35} // Space between slides
            centeredSlides={true} // Enable centered slides
            pagination={{ clickable: true }} // Enable pagination
            breakpoints={{
              // Define breakpoints for responsive design
              100: {
                slidesPerView: 1.5, // 2 slides on small screens
              },

              640: {
                slidesPerView: 2.5, // 2 slides on small screens
              },

              1440: {
                slidesPerView: 4.5, // 4.5 slides on large screens
              },
            }}
            className="cursor-grab"
          >
            {faqs.map((faq, index) => (
              <SwiperSlide key={index} className="flex flex-col mb-4">
                <div className="bg-white rounded-lg shadow-lg p-4 md:px-8 md:py-10 text-center flex flex-col h-full">
                  <h3 className="text-xl font-semibold mb-2">{faq.question}</h3>
                  <p className="text-gray-700 flex-grow">
                    {documentToReactComponents(faq.answer)}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <p className="text-center text-gray-500">Loading FAQs...</p>
        )}
      </div>
    </div>
  );
};

export default FAQ;
