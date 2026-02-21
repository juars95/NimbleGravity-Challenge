import { Navigate } from "react-router-dom";
import { useCandidateContext } from "../context/CandidateContext";
import EmailForm from "../components/EmailForm";
import CandidateInfo from "../components/CandidateInfo";
import { motion } from "motion/react";

export default function Home() {
  const { candidate, loading, fetchData } = useCandidateContext();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      style={{ maxWidth: "600px", margin: "0 auto", textAlign: "center", paddingTop: "4rem" }}
    >
      <h1 style={{ fontSize: "2.5rem", marginBottom: "1rem", color: "var(--brand-primary)" }}>
        Bienvenido a Nimble Gravity
      </h1>
      <p style={{ color: "var(--text-muted)", marginBottom: "3rem" }}>
        Ingresá tu correo electrónico para comenzar el proceso de postulación.
      </p>

      {!candidate ? (
        <EmailForm onSubmit={fetchData} loading={loading} />
      ) : (
        <div style={{ display: "flex", flexDirection: "column", gap: "2rem", alignItems: "center" }}>
          <CandidateInfo candidate={candidate} />
          {/* Automatically redirect to jobs if they are loaded, or just show a link */}
          <Navigate to="/jobs" replace />
        </div>
      )}
    </motion.div>
  );
}
