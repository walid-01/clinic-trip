// components/FloatingSocials.js
import Link from "next/link"; // Import Link from Next.js
import { FaFacebookF, FaWhatsapp, FaInstagram } from "react-icons/fa"; // Import social icons

const FloatingSocials = () => {
  return (
    <div className="hidden lg:fixed top-1/2 left-6 transform -translate-y-1/2 lg:flex lg:flex-col space-y-4 z-50">
      {/* Facebook Icon */}
      <Link
        href="https://facebook.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="bg-transparent p-2 rounded-full border-2 border-gray-800 text-gray-800 hover:bg-black hover:text-white transition duration-300">
          <FaFacebookF size={24} />
        </div>
      </Link>

      {/* WhatsApp Icon */}
      <Link
        href="https://wa.me/yourphonenumber"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="bg-transparent p-2 rounded-full border-2 border-gray-800 text-gray-800 hover:bg-black hover:text-white transition duration-300">
          <FaWhatsapp size={24} />
        </div>
      </Link>

      {/* Instagram Icon */}
      <Link
        href="https://instagram.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="bg-transparent p-2 rounded-full border-2 border-gray-800 text-gray-800 hover:bg-black hover:text-white transition duration-300">
          <FaInstagram size={24} />
        </div>
      </Link>
    </div>
  );
};

export default FloatingSocials;
