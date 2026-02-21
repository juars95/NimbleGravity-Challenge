const styles = {
  container: {
    marginBottom: "24px",
    padding: "12px",
    backgroundColor: "#f0f4f8",
    borderRadius: "8px",
  },
  text: { margin: 0, color: "#333" },
};

/**
 * Banner que muestra el nombre del candidato autenticado.
 */
export default function CandidateInfo({ candidate }) {
  return (
    <div style={styles.container}>
      <p style={styles.text}>
        Postulando como:{" "}
        <strong>
          {candidate.firstName} {candidate.lastName}
        </strong>
      </p>
    </div>
  );
}
