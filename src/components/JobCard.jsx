import { motion } from "motion/react";
import { useJobApplication } from "../hooks/useJobApplication";
import { Briefcase, Link as LinkIcon, CheckCircle, AlertCircle } from "lucide-react";

export default function JobCard({ job, candidate }) {
  const { repoUrl, setRepoUrl, status, handleSubmit } =
    useJobApplication();

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } },
  };

  return (
    <motion.div
      className="job-card"
      style={styles.card}
      variants={itemVariants}
      whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)" }}
    >
      <div style={styles.header}>
        <div style={styles.iconWrapper}>
          <Briefcase size={20} color="var(--brand-primary)" />
        </div>
        <div>
          <h3 style={styles.title}>{job.title}</h3>
          <p style={styles.jobId}>Req ID: {job.id}</p>
        </div>
      </div>

      {status === "exitoso" ? (
        <motion.div 
          style={styles.successBox}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          <CheckCircle size={18} />
          <span>Postulación completada.</span>
        </motion.div>
      ) : (
        <form
          onSubmit={(e) =>
            handleSubmit(e, {
              uuid: candidate.uuid,
              jobId: job.id,
              applicationId: job.id,
              candidateId: candidate.candidateId,
            })
          }
          style={styles.formContainer}
        >
          <div style={styles.inputWrapper}>
            <LinkIcon size={16} style={styles.inputIcon} />
            <input
              type="url"
              placeholder="github.com/usuario/repo"
              value={repoUrl}
              onChange={(e) => setRepoUrl(e.target.value)}
              disabled={status === "loading"}
              style={styles.input}
              required
            />
          </div>
          <button
            type="submit"
            disabled={status === "loading" || !repoUrl}
            style={styles.button(status === "loading")}
          >
            {status === "loading" ? "Enviando..." : "Postularme"}
          </button>
        </form>
      )}


    </motion.div>
  );
}

const styles = {
  card: {
    backgroundColor: "var(--text-light)",
    border: "1px solid var(--bg-secondary)",
    borderRadius: "12px",
    padding: "1.5rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.05)",
    transition: "border-color 0.2s",
    willChange: "transform",
  },
  header: {
    display: "flex",
    alignItems: "flex-start",
    gap: "1rem",
    marginBottom: "1.5rem",
  },
  iconWrapper: {
    backgroundColor: "var(--bg-secondary)",
    padding: "10px",
    borderRadius: "10px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    margin: "0 0 4px 0",
    fontSize: "1.1rem",
    fontWeight: "600",
    color: "var(--text-main)",
  },
  jobId: {
    margin: 0,
    fontSize: "0.8rem",
    color: "var(--text-muted)",
    fontWeight: "500",
  },
  formContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
    marginTop: "auto",
  },
  inputWrapper: {
    position: "relative",
    display: "flex",
    alignItems: "center",
  },
  inputIcon: {
    position: "absolute",
    left: "12px",
    color: "var(--text-muted)",
  },
  input: {
    width: "100%",
    padding: "10px 10px 10px 38px",
    borderRadius: "8px",
    border: "1px solid var(--bg-secondary)",
    fontSize: "0.9rem",
    backgroundColor: "var(--bg-primary)",
    transition: "border-color 0.2s, box-shadow 0.2s",
  },
  button: (isLoading) => ({
    width: "100%",
    padding: "10px 16px",
    backgroundColor: "var(--brand-primary)",
    color: "var(--text-light)",
    border: "none",
    borderRadius: "8px",
    fontWeight: "600",
    cursor: isLoading ? "not-allowed" : "pointer",
    opacity: isLoading ? 0.7 : 1,
    transition: "all 0.2s",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  }),
  successBox: {
    backgroundColor: "rgba(20, 184, 166, 0.1)",
    color: "#0f766e",
    padding: "12px",
    borderRadius: "8px",
    display: "flex",
    alignItems: "center",
    gap: "8px",
    fontSize: "0.9rem",
    fontWeight: "500",
  },

};