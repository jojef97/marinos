"use client";

import { useState } from "react";
import { Phone, Mail, Copy, Check } from "lucide-react";
import styles from "./contact.module.css";
import ContactForm from "./ContactForm";

export default function ContactPage() {
  const [copied, setCopied] = useState<string | null>(null);


const phone = process.env.NEXT_PUBLIC_CONTACT_PHONE || "+300000000000";
const email = process.env.NEXT_PUBLIC_CONTACT_EMAIL || "contact@example.com";


  const handlePhoneClick = (phone: string) => {                                     //Mobile cAll
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  if (isMobile) {
    window.location.href = `tel:${phone}`;
  } else {
    handleCopy(phone);
  }
};

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(text);
    setTimeout(() => setCopied(null), 2000); // Resets the icon back to Copy after 2 seconds
  };

  return (
    <main className={styles.page}>
      <ContactForm />

      <div className={styles.contactIcons}>
        <div 
          className={styles.iconBox} 
          onClick={() => handlePhoneClick(phone)}        >
          <Phone size={24} />
          <span>{phone}</span>
          {copied ===  phone ? (
          <Check size={16} className={styles.copyIcon} />
        ) : (
          <span className={styles.copyIcon}>
            <Copy size={16} className={styles.desktopOnly} />
            <Phone size={16} className={styles.mobileOnly} />
          </span>
        )}
        </div>

        <div 
          className={styles.iconBox} 
          onClick={() => handleCopy(email)}
        >
          <Mail size={24} />
          <span>{email}</span>
          {copied ===  email ? (
            <Check size={16} className={styles.copyIcon} />
          ) : (
            <Copy size={16} className={styles.copyIcon} />
          )}
        </div>
      </div>
    </main>
  );
}