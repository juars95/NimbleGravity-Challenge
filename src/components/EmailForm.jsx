import { useState } from "react";
import { Mail, AlertCircle, ArrowRight } from "lucide-react";
import { motion } from "motion/react";

export default function EmailForm({ onSubmit, loading, error }) {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) onSubmit(email);
  };

  return (
    <motion.div
      style={styles.card}
      initial={{ scale: 0.95, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: "spring", stiffness: 300, damping: 25 }}
    >
      <form onSubmit={handleSubmit} style={styles.formContainer}>
        <label style={styles.label}>
          Dirección de Correo Electrónico
        </label>
        
        <div style={styles.inputWrapper}>
          <div style={styles.iconContainer}>
            <Mail size={18} color="var(--text-muted)" />
          </div>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="ejemplo@nimblegravity.com"
            required
            style={styles.input}
            disabled={loading}
          />
        </div>

        {error && (
          <motion.div 
            style={styles.errorBox}
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <AlertCircle size={16} />
            <span>{error}</span>
          </motion.div>
        )}

        <button 
          type="submit" 
          disabled={loading || !email} 
          style={styles.button(loading)}
        >
          {loading ? "Verificando..." : "Continuar"}
          {!loading && <ArrowRight size={18} style={{ marginLeft: "8px" }} />}
        </button>
      </form>
    </motion.div>
  );
}

const styles = {
  card: {
    backgroundColor: "var(--text-light)",
    borderRadius: "16px",
    padding: "2.5rem 2rem",
    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
    maxWidth: "450px",
    margin: "0 auto",
    border: "1px solid var(--bg-secondary)",
  },
  formContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "1.25rem",
    textAlign: "left",
  },
  label: {
    display: "block",
    fontWeight: "600",
    color: "var(--text-main)",
    fontSize: "0.95rem",
  },
  inputWrapper: {
    position: "relative",
    display: "flex",
    alignItems: "center",
  },
  iconContainer: {
    position: "absolute",
    left: "14px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    width: "100%",
    padding: "14px 14px 14px 44px",
    borderRadius: "10px",
    border: "2px solid var(--bg-secondary)",
    fontSize: "1rem",
    transition: "border-color 0.2s, box-shadow 0.2s",
    backgroundColor: "var(--bg-primary)",
    color: "var(--text-main)"
  },
  button: (isLoading) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    padding: "14px 24px",
    marginTop: "0.5rem",
    backgroundColor: "var(--brand-primary)",
    color: "var(--text-light)",
    border: "none",
    borderRadius: "10px",
    fontWeight: "600",
    fontSize: "1rem",
    cursor: isLoading ? "wait" : "pointer",
    opacity: isLoading ? 0.7 : 1,
    transition: "background-color 0.2s, transform 0.1s",
  }),
  errorBox: {
    backgroundColor: "rgba(239, 68, 68, 0.1)",
    color: "#b91c1c",
    padding: "10px 14px",
    borderRadius: "8px",
    display: "flex",
    alignItems: "center",
    gap: "8px",
    fontSize: "0.9rem",
    fontWeight: "500",
  },
};
