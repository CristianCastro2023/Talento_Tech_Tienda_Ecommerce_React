import "./Footer.css";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-brand">
          <h3>CastroShops</h3>
          <p>Tu tienda de calzado y moda urbana con las mejores tendencias y calidad.</p>
        </div>

        <div className="footer-social-section">
          <span className="social-title">Redes & Contacto</span>
          <ul className="footer-social-list">
            <li>
              <a
                href="https://wa.me/"
                target="_blank"
                rel="noreferrer"
                className="social-btn whatsapp-btn"
                aria-label="WhatsApp"
                title="WhatsApp"
              >
                <svg
                  className="social-icon"
                  viewBox="0 0 24 24"
                  width="20"
                  height="20"
                  fill="currentColor"
                >
                  <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2ZM12.05 20.15C10.57 20.15 9.12 19.75 7.85 19L7.55 18.82L4.43 19.64L5.26 16.6L5.06 16.29C4.24 14.99 3.8 13.47 3.8 11.91C3.8 7.37 7.5 3.67 12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.05 20.15ZM16.57 14.33C16.32 14.2 15.1 13.6 14.87 13.52C14.65 13.43 14.48 13.39 14.32 13.64C14.15 13.88 13.67 14.45 13.52 14.62C13.38 14.78 13.23 14.8 12.98 14.67C12.73 14.55 11.93 14.29 10.98 13.44C10.24 12.78 9.74 11.96 9.6 11.71C9.45 11.46 9.58 11.33 9.71 11.2C9.82 11.09 9.96 10.91 10.08 10.77C10.21 10.63 10.25 10.53 10.33 10.36C10.41 10.2 10.37 10.05 10.31 9.93C10.25 9.81 9.75 8.58 9.55 8.07C9.35 7.58 9.15 7.64 9 7.64C8.86 7.63 8.69 7.63 8.52 7.63C8.36 7.63 8.09 7.69 7.86 7.94C7.63 8.19 7 8.78 7 9.98C7 11.18 7.88 12.34 8 12.5C8.12 12.67 9.73 15.15 12.19 16.21C12.77 16.46 13.23 16.61 13.58 16.72C14.17 16.91 14.71 16.88 15.14 16.82C15.62 16.75 16.61 16.22 16.82 15.63C17.02 15.04 17.02 14.53 16.96 14.43C16.9 14.33 16.74 14.27 16.57 14.15L16.57 14.33Z"/>
                </svg>
                <span>WhatsApp</span>
              </a>
            </li>
            <li>
              <a
                href="https://instagram.com/"
                target="_blank"
                rel="noreferrer"
                className="social-btn instagram-btn"
                aria-label="Instagram"
                title="Instagram"
              >
                <svg
                  className="social-icon"
                  viewBox="0 0 24 24"
                  width="20"
                  height="20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                </svg>
                <span>Instagram</span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} CastroShops. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};
