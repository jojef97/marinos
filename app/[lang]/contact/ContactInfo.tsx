"use client";

import { useState } from "react";
import { Phone, Mail, Copy, Check } from "lucide-react";
import styles from "./contact.module.css";

export default function ContactInfo() {
  const [copied, setCopied] = useState<string | null>(null);

  const phone = process.env.NEXT_PUBLIC_CONTACT_PHONE || "";
  const email = process.env.NEXT_PUBLIC_CONTACT_EMAIL || "";

  if (process.env.NODE_ENV === "development") {
    if (!phone){
    throw new Error ("Missing NEXT_PUBLIC_CONTACT_PHONE environment variable.");
    }

    if (!email){
      throw new Error ("Missing NEXT_PUBLIC_CONTACT_EMAIL environment variable.");
      
    }
  }

  if (!phone || !email) return null;

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(text);
    setTimeout(() => setCopied(null), 2000);
  };

  const handlePhoneClick = (number: string) => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    if (isMobile) {
      window.location.href = `tel:${number}`;
    } else {
      handleCopy(number);
    }
  };

  return (
    <div className={styles.contactIcons}>
      <div className={styles.iconBox} onClick={() => handlePhoneClick(phone)}>
        <Phone size={24} />
        <span>{phone}</span>
        {copied === phone ? (
          <Check size={16} className={styles.copyIcon} />
        ) : (
          <span className={styles.copyIcon}>
            <Copy size={16} className={styles.desktopOnly} />
            <Phone size={16} className={styles.mobileOnly} />
          </span>
        )}
      </div>

      <div className={styles.iconBox} onClick={() => handleCopy(email)}>
        <Mail size={24} />
        <span>{email}</span>
        {copied === email ? (
          <Check size={16} className={styles.copyIcon} />
        ) : (
          <Copy size={16} className={styles.copyIcon} />
        )}
      </div>
    </div>
  );
}