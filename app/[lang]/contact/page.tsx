import { getDictionary, hasLocale } from "../dictionaries";
import styles from "./contact.module.css";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";

interface PageProps {
  params: Promise<{ lang: string }>;
}

export default async function ContactPage({ params }: PageProps) {
  const { lang } = await params;
  const locale = hasLocale(lang) ? lang : "en";
  const dict = await getDictionary(locale);

  return (
    <main className={styles.page}>
      <ContactForm labels={dict.contact.form} />
      <ContactInfo />
    </main>
  );
}