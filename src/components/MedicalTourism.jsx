import Image from "next/image";

const MedicalTourismSection = () => {
  return (
    <section className="lg:flex lg:flex-row items-center justify-center lg:gap-4 xl:gap-14 py-16 px-4 lg:h-[90vh]">
      {/* Left Side - Image */}
      <div className="w-full lg:w-1/2 xl:w-2/5">
        <img
          src="/assets/medical_tourism.webp" // replace with your image path
          alt="Beautiful view of Turkey"
          className="shadow-lg object-cover h-full"
        />
      </div>

      {/* Right Side - Text Content */}
      <div className="w-full lg:w-2/5 text-center lg:text-left p-4">
        <h2 className="text-[38px] font-bold pt-8 pb-8">
          Discover Medical Tourism in Turkey
        </h2>
        <p className="text-gray-700 text-lg leading-6">
          Experience top-quality aesthetic treatments while exploring the unique
          beauty and rich culture of Turkey. At{" "}
          <span className="font-semibold">Clinic Trip</span>, we specialize in
          providing a seamless medical tourism experience, combining world-class
          healthcare with the excitement of travel. Our personalized packages
          cater to every aspect of your journey, from transportation and
          accommodations to post-treatment care, ensuring a stress-free
          experience from start to finish. With skilled professionals, advanced
          technology, and stunning locations to enjoy during your recovery,
          Clinic Trip is your trusted partner in achieving both exceptional
          results and a memorable journey.
        </p>
      </div>
    </section>
  );
};

export default MedicalTourismSection;
