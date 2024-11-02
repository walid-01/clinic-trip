import React from "react";

const AboutUs = () => {
  return (
    <div>
      <h1 className="text-3xl mb-10 text-center">Slogan</h1>
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            facilisi. Vestibulum ante ipsum primis in faucibus orci luctus et
          </p>
        </div>
      </div>

      <div className="px-6 mt-20">
        <h2 className="text-3xl mb-10">Our Vision</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
          facilisi. Vestibulum ante ipsum primis in faucibus orci luctus et
        </p>
      </div>

      <div className="px-6 mt-20">
        <h2 className="text-3xl mb-10">Our Mission</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
          facilisi. Vestibulum ante ipsum primis in faucibus orci luctus et
        </p>
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
