"use client";

import { FloatingWhatsApp } from "react-floating-whatsapp";
import logoIcon from "../../public/assets/Logo_2.svg";

const FWhatsapp = () => {
  return (
    <div>
      <FloatingWhatsApp
        phoneNumber="1234567890"
        accountName="Clinic Trip"
        avatar={logoIcon}
        statusMessage="Typically replies instantly"
        chatMessage="Hello, Welcome to CLINIC TRIP. Thank you so much for contacting us. How may I help you??"
        // placeholder="Type your message..."
      />
    </div>
  );
};

export default FWhatsapp;
