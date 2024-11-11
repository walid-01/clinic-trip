import React from "react";

const AboutUs = () => {
  return (
    <div>
      <div className="relative">
        <img
          className="object-cover w-full h-[80vh] brightness-[80%]"
          src="/assets/about_us_cover.webp"
          alt="clinic"
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
          <h1 className="text-2xl text-white">With</h1>
          <h1 className="text-7xl text-white font-bold">Clinic Trip</h1>
          <h1 className="text-3xl text-white">
            Your Journey to Beauty and Wellness Starts Here
          </h1>
        </div>
      </div>
      {/* Clinic Photo goes here */}

      <div className="w-2/3 mx-auto py-20">
        <div className="text-center font-light mb-14 text-stone-500">
          <p className="mb-4">
            Excellence is the catalyst that directs all procedures and
            activities. It manifests in various forms, including the desire to
            give the patients the best possible treatment experience by working
            with world-class doctors, nurses, staff, drivers, medical equipment,
            and technology, eager to provide a medical environment that
            satisfies the patient.
          </p>
          <p>
            With a comprehensive, progressive philosophy, <b>Clinic Trip</b> is
            on the lookout for continuous improvement, motivated by becoming the
            leading force in the industry in all its aspects. Using a flexible
            and open-minded vision, constant renovations are made ideologically
            and materially, always pushing forward to ensure a positive impact.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-lg border border-gray-200">
            <h2 className="text-3xl mb-6">Our Vision</h2>
            <p>
              Clinic Trip aims to lead the health tourism sector by fostering
              patient and family satisfaction through quality accommodation and
              transportation services. Our friendly team embraces ethical values
              and strives to grow in the light of science and knowledge.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg border border-gray-200">
            <h2 className="text-3xl mb-6">Our Mission</h2>
            <p>
              We focus on connecting patients with the most advanced healthcare
              practices nationally and internationally. By leveraging
              contemporary science and technology, we ensure that dedicated and
              skilled professionals, who value human connection, are at the
              forefront of our service. Our goal is to establish Clinic Trip as
              a leading brand in health tourism, known for quality and success
              through expert teams and their experience.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg border border-gray-200">
            <h2 className="text-3xl mb-6">Our Values</h2>
            <p>
              Clinic Trip's value is unparalleled. We are the first in Turkey to
              introduce an optimal logistics coordination model aimed at
              enhancing the patient experience.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg border border-gray-200">
            <h2 className="text-3xl mb-6">Our Quality Management Policies</h2>
            <p>
              Clinic Trip operates under a Quality Management System aligned
              with ISO, TEMOS, and the Turkish Ministry of Health's Healthcare
              Quality Accreditation Standards. Our philosophy emphasizes patient
              safety and satisfaction, driving us to take pioneering steps
              toward delivering quality service.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;