import logoImg from "../../assets/img/logo.jpeg";

export default function Footer() {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <div style={styles.topSection}>
          <div style={styles.brand}>
            <img src={logoImg} alt="Nimble Gravity Logo" style={styles.logoImg} />
          </div>
          <div style={styles.linksGroup}>
            <h4>Explorar</h4>
            <a href="#" style={styles.link}>Postulaciones</a>
            <a href="#" style={styles.link}>Servicios</a>
            <a href="#" style={styles.link}>Acerca de</a>
          </div>
          <div style={styles.linksGroup}>
            <h4>Legal</h4>
            <a href="#" style={styles.link}>Términos de Privacidad</a>
            <a href="#" style={styles.link}>Políticas de Cookies</a>
          </div>
        </div>
        <div style={styles.bottomSection}>
          <p>© {new Date().getFullYear()} Nimble Gravity. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}

const styles = {
  footer: {
    backgroundColor: "#1a0f2e", // Slightly darker than brand-primary for depth
    color: "var(--bg-secondary)",
    padding: "2rem 2rem 1rem", // Reduced padding to make footer less tall
    marginTop: "auto",
    width: "100%",
  },
  container: {
    width: "100%",
  },
  topSection: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    flexWrap: "wrap",
    gap: "2rem",
    marginBottom: "1.5rem",
  },
  brand: {
    display: "flex",
    alignItems: "center",
    marginBottom: "1rem",
  },
  logoImg: {
    height: "50px", // Distinct sizing for footer logo
    objectFit: "contain",
    borderRadius: "6px",
  },
  linksGroup: {
    display: "flex",
    flexDirection: "column",
    gap: "8px",
    minWidth: "150px",
  },
  link: {
    color: "var(--bg-secondary)",
    textDecoration: "none",
    fontSize: "0.9rem",
    transition: "color 0.2s",
  },
  bottomSection: {
    borderTop: "1px solid rgba(255,255,255,0.1)",
    paddingTop: "1rem",
    textAlign: "center",
    fontSize: "0.85rem",
    color: "rgba(255,255,255,0.5)",
  },
};
