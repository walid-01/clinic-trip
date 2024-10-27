"use client";

import { FloatingWhatsApp } from "react-floating-whatsapp";

const FWhatsapp = () => {
  return (
    <div>
      <FloatingWhatsApp
        phoneNumber="213540075383"
        accountName="Clinic Trip"
        // avatar="/assets/Logo_2.png"
        statusMessage="Typically replies instantly"
        chatMessage="Hello, Welcome to CLINIC TRIP. Thank you so much for contacting us. How may I help you??"
        // placeholder="Type your message..."
      />
    </div>
  );
};

export default FWhatsapp;