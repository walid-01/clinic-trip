import Navbar from "@/components/Navbar";
import "./globals.css";
import Footer from "@/components/Footer";
import FloatingWhatsapp from "@/components/FWhatsapp";
import ContactForm from "@/components/ContactForm";
import ScrollToTop from "@/components/ScrollToTop";
import ContactNavbar from "@/components/ContactNavbar";
import FloatingSocials from "@/components/FloatingSocials";

export const metadata = {
  title: "Clinic Trip",
  icons: {
    icon: "/assets/Icon.png",
  },
  // description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="">
        <FloatingWhatsapp />
        <ContactNavbar />
        <Navbar />
        <main>{children}</main>
        {/* <ContactForm /> */}
        <Footer />
        <ScrollToTop />
        <FloatingSocials />
      </body>
    </html>
  );
}
