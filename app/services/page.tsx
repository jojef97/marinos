import Image from "next/image";
import styles from "./services.module.css";

const categories = [
  {
    id: "renovations",
    title: "Renovations",
    text: "From small repairs to a full renovation of your space.",
    image: "/anakainiseis.jpg",
    items: ["Full renovation", "Partial renovation", "Minor repairs"],
  },
  {
    id: "construction",
    title: "Construction",
    text: "New builds and site preparation from the ground up.",
    image: "/kataskevi.jpg",
    items: ["Building from the foundations", "Demolition and stripping"],
  },
  {
    id: "installations",
    title: "Installations",
    text: "Safe, modern installations for your home or business.",
    image: "/egkatastaseis.jpg",
    items: ["Electrical", "Plumbing"],
  },
  {
    id: "finishing",
    title: "Finishing",
    text: "The final work that gives a space its look.",
    image: "/finishing.jpg",
    items: ["Drywall", "Tiling", "Painting", "Marble polishing and mosaics"],
  },
  {
    id: "insulation-outdoor",
    title: "Insulation & Outdoor",
    text: "Energy savings and care for your outdoor spaces.",
    image: "/monosi.jpg",
    items: ["External wall insulation", "Thermal insulation", "Gardening"],
  },
];

export default function ServicesPage() {
  console.log(styles);

  return (
    <main className={styles.page}>

      <div className={styles.top}></div>
      

      {categories.map((c, i) => (
        <section
          key={c.id}
          className={i % 2 === 1 ? `${styles.block} ${styles.reverse}` : styles.block}  //Μονο αριθμο= block+reverse. Ζυγος= block
        >
          <div className={styles.imageWrap}>
            <Image
              src={c.image}
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