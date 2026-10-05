import Image from "next/image";

export default function Home() {
  return (
    <main className="relative flex-1">
      <Image
        src="/top2.jpg"
        alt="Athens"
        fill
        priority
        className="object-cover"
      />

      <div className="relative z-10 p-30 pt-40">
        <h1
          className={[
            "text-6xl",
            "font-black",
            "tracking-tight",
            "text-white",
            "drop-shadow-lg",
          ].join(" ")}
        >Building & Construction <br /> Services</h1>
      </div>
    </main>
  
  );
}





  