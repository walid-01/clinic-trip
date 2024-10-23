import OurTreatments from "@/components/OurTreatments";
import WhyUs from "@/components/WhyUs";

export default function Home() {
  return (
    <div>
      <div className="flex items-center justify-center h-[85vh] relative">
        <img
          src="/assets/Clinic.jpg"
          className="w-full h-full object-cover absolute -z-10"
          alt="clinic"
        />
        <button type="button" className="btn btn-secondary rounded-none">
          Free Consultation
        </button>
      </div>
      <WhyUs />
      <OurTreatments />
    </div>
  );
}
