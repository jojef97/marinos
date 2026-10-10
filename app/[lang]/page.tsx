import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import styles from "./home.module.css";
import { getDictionary, hasLocale } from "./dictionaries";

export default async function Home({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();

  const t = await getDictionary(lang);

  return (
    <main className={styles.hero}>
      <Image
        src="/top2.jpg"
        alt={t.home.heroAlt}
        fill
        priority
        className={styles.image}
      />

      <div className={styles.content}>
        <h1 className={styles.title}>
          {t.home.titleLine1} <br /> {t.home.titleLine2}
        </h1>
      </div>

      <div className={styles.bubble}>
        <h2>{t.home.bubbleHeading}</h2>
        <p>{t.home.bubbleText}</p>
        <Link href={`/${lang}/contact`} className={styles.bubbleButton}>
          {t.home.bubbleButton}
        </Link>
      </div>
    </main>
  );
}