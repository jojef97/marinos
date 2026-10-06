"use client";

import { useState } from "react";
import { Phone, Mail, Copy, Check } from "lucide-react";
import styles from "./contact.module.css";
import ContactForm from "./ContactForm";

export default function ContactPage() {
  const [copied, setCopied] = useState<string | null>(null);

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
          onClick={() => handleCopy("+302101234567")}
        >
          <Phone size={24} />
          <span>+30 210 1234567</span>
          {copied === "+302101234567" ? (
            <Check size={16} className={styles.copyIcon} />
          ) : (
            <Copy size={16} className={styles.copyIcon} />
          )}
        </div>

        <div 
          className={styles.iconBox} 
          onClick={() => handleCopy("info@karalis.com")}
        >
          <Mail size={24} />
          <span>info@karalis.com</span>
          {copied === "info@marinos.com" ? (
            <Check size={16} className={styles.copyIcon} />
          ) : (
            <Copy size={16} className={styles.copyIcon} />
          )}
        </div>
      </div>
    </main>
  );
}