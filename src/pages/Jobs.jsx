import { Navigate } from "react-router-dom";
import { useCandidateContext } from "../context/CandidateContext";
import JobList from "../components/JobList";
import { motion } from "motion/react";

export default function Jobs() {
  const { candidate, jobs } = useCandidateContext();

  if (!candidate) {
    return <Navigate to="/" replace />;
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <div style={{ marginBottom: "2rem" }}>
        <h2 style={{ color: "var(--brand-primary)", fontSize: "2rem", marginBottom: "0.5rem" }}>
          Vacantes Disponibles
        </h2>
        <p style={{ color: "var(--text-muted)" }}>
          Descubrí tu próximo desafío profesional en Nimble Gravity.
        </p>
      </div>

      <JobList jobs={jobs} candidate={candidate} />
    </motion.div>
  );
}
