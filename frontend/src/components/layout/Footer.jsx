import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3 className="TitreFooter">Vite & Gourmand</h3>
          <p className="PFooter">
            120 rue de la Marne
            33000 Bordeaux
          </p>
          <p>05 56 00 00 00</p>
          <p>contact@viteetgourmand.fr</p>
        </div>

        <div className="footer-section">
          <h4>Suivez-nous</h4>

          <div className="socials">
            {/* Facebook */}
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                aria-label="Facebook"
              >
                <rect width="40" height="40" rx="8" fill="#1877F2" />
                <path
                  d="M22 12h3v4h-3v3.5h3V24h-3v4h-4v-4h-3v-4.5h3V16a4 4 0 0 1 4-4z"
                  fill="#FFFFFF"
                />
              </svg>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                aria-label="LinkedIn"
              >
                <rect width="40" height="40" rx="8" fill="#0A66C2" />
                <rect x="9" y="15" width="4" height="14" fill="#FFFFFF" />
                <circle cx="11" cy="11" r="2.3" fill="#FFFFFF" />
                <path
                  d="M18 15h4v2h.1c.6-1.1 2-2.3 4.1-2.3C29 14.7 31 16.6 31 20.2V29h-4v-8c0-1.6-.6-2.7-2.1-2.7-1.1 0-1.9.7-2.2 1.6-.1.2-.1.6-.1.9V29h-4V15z"
                  fill="#FFFFFF"
                />
              </svg>
            </a>

            {/* X (Twitter) */}
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                aria-label="X"
              >
                <rect width="40" height="40" rx="8" fill="#000000" />
                <path
                  d="M12 11h3.1l5 6.7L25.5 11H28l-6 7.9L28.5 29h-3.1l-5.4-7.2L14.5 29H12l6.4-8.4L12 11z"
                  fill="#FFFFFF"
                />
              </svg>
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                aria-label="Instagram"
              >
                <defs>
                  <linearGradient
                    id="igGradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="#F58529" />
                    <stop offset="30%" stopColor="#DD2A7B" />
                    <stop offset="60%" stopColor="#8134AF" />
                    <stop offset="100%" stopColor="#515BD4" />
                  </linearGradient>
                </defs>
                <rect width="40" height="40" rx="10" fill="url(#igGradient)" />
                <circle
                  cx="20"
                  cy="20"
                  r="7"
                  fill="none"
                  stroke="#FFFFFF"
                  strokeWidth="2"
                />
                <circle cx="27" cy="13" r="1.5" fill="#FFFFFF" />
                <rect
                  x="12"
                  y="12"
                  width="16"
                  height="16"
                  rx="5"
                  fill="none"
                  stroke="#FFFFFF"
                  strokeWidth="2"
                />
              </svg>
            </a>
          </div>
        </div>

        <div className="footer-section">
          <h4>Mentions légales</h4>
          <p>© 2026 Vite & Gourmand</p>
        </div>
      </div>
    </footer>
  );
}
