import { Link, useLocation } from "react-router-dom";
import { motion } from "motion/react";
import { Briefcase, Settings, Info } from "lucide-react";
import logoImg from "../assets/img/logo.jpeg";

export default function Navbar() {
  const location = useLocation();

  const navItems = [
    { path: "/", label: "Configurar Correo", icon: Settings },
    { path: "/jobs", label: "Empleos", icon: Briefcase },
    { path: "/about", label: "Acerca de", icon: Info },
  ];

  return (
    <nav style={styles.nav}>
      <div style={styles.container}>
        {/* Logo Area */}
        <Link to="/" style={styles.logoContainer}>
          <img src={logoImg} alt="Nimble Gravity Logo" style={styles.logoImg} />
        </Link>

        {/* Navigation Links */}
        <div style={styles.linksContainer}>
          {navItems.map((item) => {
            const currentIsActive = location.pathname === item.path;

            return (
              <Link key={item.path} to={item.path} style={styles.link}>
                <item.icon size={18} style={styles.icon} />
                <span>{item.label}</span>
                {currentIsActive && (
                  <motion.div
                    layoutId="navbar-indicator"
                    style={styles.activeIndicator}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}

const styles = {
  nav: {
    backgroundColor: "var(--brand-primary)",
    color: "var(--text-light)",
    padding: "0 2rem",
    position: "sticky",
    top: 0,
    zIndex: 1000,
    boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
    width: "100%",
  },
  container: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0.5rem 0",
  },
  logoContainer: {
    display: "flex",
    alignItems: "center",
    textDecoration: "none",
  },
  logoImg: {
    height: "45px", // Adjust height based on actual logo aspect ratio
    objectFit: "contain",
    borderRadius: "6px",
  },
  linksContainer: {
    display: "flex",
    gap: "1rem",
  },
  link: {
    position: "relative",
    display: "flex",
    alignItems: "center",
    gap: "8px",
    padding: "8px 16px",
    textDecoration: "none",
    color: "var(--bg-secondary)",
    fontWeight: "500",
    fontSize: "0.95rem",
    transition: "color 0.2s ease",
  },
  icon: {
    marginBottom: "2px",
  },
  activeIndicator: {
    position: "absolute",
    bottom: "-15px", // Align with bottom of navbar
    left: "10%",
    right: "10%",
    height: "4px",
    backgroundColor: "var(--accent)",
    borderRadius: "4px 4px 0 0",
  },
};
