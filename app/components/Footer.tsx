import "./Footer.css";

export default function Footer() {
  const phone = process.env.NEXT_PUBLIC_CONTACT_PHONE || "";
  const email = process.env.NEXT_PUBLIC_CONTACT_EMAIL || "";

  if (process.env.NODE_ENV === "development") {
    if (!phone) {
      throw new Error("Missing NEXT_PUBLIC_CONTACT_PHONE environment variable.");
    }
    if (!email) {
      throw new Error("Missing NEXT_PUBLIC_CONTACT_EMAIL environment variable.");
    }
  }

  return (
    <footer className="footer-container">
      <div className="footer-left">2026 Marinos</div>
      {phone && email && (
        <div className="footer-center">
          <span>📞{phone}</span>
          <span>✉️{email}</span>
        </div>
      )}
    </footer>
  );
}