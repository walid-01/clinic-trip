import Navbar from "@/components/Navbar";
import "./globals.css";
import ContactNavbar from "@/components/ContactNavbar";
import FloatingWhatsapp from "@/components/FWhatsapp";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="">
        <FloatingWhatsapp />
        <ContactNavbar />
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
