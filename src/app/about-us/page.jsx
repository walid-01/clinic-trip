import React from "react";

const AboutUs = () => {
  return (
    <div>
      <h1 className="text-3xl mb-10 text-center">
        Your Journey to Beauty and Wellness Starts Here
      </h1>
      <div className="flex items-center gap-10 px-6">
        {/* Clinic Photo goes here */}
        <div className="w-1/2 h-96">
          <img
            className="object-cover w-full h-full"
            src="/assets/default_service_thumbnail.webp"
            alt="clinic"
          />
        </div>
        <div className="w-1/2">
          <h2 className="text-3xl mb-10">Who Are We</h2>
          <p>
            Clinic Trip is a trusted platform that connects you with top-rated
            aesthetic clinics across Turkey, renowned for their world-class
            standards and cutting-edge treatments. We partner with a network of
            certified clinics, carefully vetted to ensure you receive
            exceptional care tailored to your unique beauty and wellness goals.
            Whether you're seeking cosmetic enhancements, rejuvenating skin
            treatments, or specialized surgical procedures, Clinic Trip
            simplifies your path to confidence and quality care.
          </p>
        </div>
      </div>

      <div className="px-6 mt-20">
        <h2 className="text-3xl mb-10">Our Vision</h2>
        <p>
          To be the leading gateway for global clients seeking premier aesthetic
          services in Turkey by fostering transparency, trust, and accessibility
          in the beauty and wellness industry.
        </p>
      </div>

      <div className="px-6 mt-20">
        <h2 className="text-3xl mb-10">Our Mission</h2>
        <div>
          <p>
            At Clinic Trip, our mission is to bridge the gap between individuals
            and the most reputable aesthetic clinics in Turkey. We are committed
            to:
          </p>
          <ul>
            <li>
              Providing a seamless experience for our clients, from initial
              inquiries to post-treatment support.
            </li>
            <li>
              Ensuring that all contracted clinics adhere to the highest medical
              standards and ethical practices.
            </li>
            <li>
              Empowering clients to make informed choices about their health,
              beauty, and overall well-being through reliable and comprehensive
              information.
            </li>
          </ul>
        </div>
      </div>

      <div className="px-6 mt-20">
        <h2 className="text-3xl mb-10">
          Your treatments will also be conducted at healthcare facilities with a
          health tourism authorization certificate.
        </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
          facilisi. Vestibulum ante ipsum primis in faucibus orci luctus et
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
