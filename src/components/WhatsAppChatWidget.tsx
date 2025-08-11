import React from 'react';
import { FloatingWhatsApp } from 'react-floating-whatsapp';

const WhatsAppChatWidget = () => {
  return (
    <FloatingWhatsApp
      phoneNumber="919962457539"
      accountName="TAF Support"
      avatar="https://thearchitecturefirm.in/images/PORTFOLIO.png"
      chatMessage="Hi there! How can we help you?"
      statusMessage="Typically replies within an hour"
      placeholder="Type your message..."
      allowClickAway
      darkMode={false}
    />
  );
};

export default WhatsAppChatWidget;