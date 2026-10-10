import Image from "next/image";
import { notFound } from "next/navigation";
import styles from "./services.module.css";
import { getDictionary, hasLocale } from "../dictionaries";

const images: Record<string, string> = {
  renovations: "/anakainiseis.jpg",
  construction: "/kataskevi.jpg",
  installations: "/egkatastaseis.jpg",
  finishing: "/finishing.jpg",
  "insulation-outdoor": "/monosi.jpg",
};

export default async function ServicesPage({
  params,
}: PageProps<"/[lang]/services">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();

  const t = await getDictionary(lang);

  return (
    <main className={styles.page}>
      <div className={styles.top}></div>

      {t.services.categories.map((c, i) => (
        <section
          key={c.id}
          className={
            i % 2 === 1 ? `${styles.block} ${styles.reverse}` : styles.block
          }
        >
          <div className={styles.imageWrap}>
            <Image
              src={images[c.id]}
              alt={c.title}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              quality={75}
              priority={i === 0}
              className={styles.image}
            />
          </div>

          <div className={styles.text}>
            <h2>{c.title}</h2>
            <p>{c.text}</p>
            <ul className={styles.list}>
              {c.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </section>
      ))}
    </main>
  );
}