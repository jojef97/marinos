import Image from "next/image";
import Link from "next/link";
import styles from "./home.module.css";

export default function Home() {
  return (
    <main className={styles.hero}>
      <Image
        src="/top2.jpg"
        alt="Athens"
        fill
        priority
        className={styles.image}
      />

      <div className={styles.content}>
        <h1 className={styles.title}>
          Building & Construction <br /> Services
        </h1>
      </div>

    <div className={styles.bubble}>
  <h2>Complete Construction &amp; Renovation Solutions</h2>
  <p>
    From structural work to the final finishes, our team manages every stage
    of your project with precision and care.
  </p>
  <Link href="/contact" className={styles.bubbleButton}>
    Request a Quote
  </Link>
</div>
    </main>
  );
}