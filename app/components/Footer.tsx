import './Footer.css';

export default function Footer() {
    const phone = process.env.NEXT_PUBLIC_CONTACT_PHONE || "+30 210 0000000";
    const email = process.env.NEXT_PUBLIC_CONTACT_EMAIL || "info@example.com";



    return (
        <footer className="footer-container">
            <div className="footer-left">
                2026 Marinos
            </div>
            <div className="footer-center">
                <span>📞{phone}</span>
                <span>✉️{email}</span>
            </div>
        </footer>
    );
}