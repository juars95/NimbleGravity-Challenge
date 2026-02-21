import { useState, useCallback } from "react";
import { applyToJob } from "../services/api";

/**
 * Hook que encapsula la lógica de envío de postulación a una posición.
 * Incluye validación de URL de GitHub y manejo de estados.
 */
export function useJobApplication() {
  const [repoUrl, setRepoUrl] = useState("");
  const [status, setStatus] = useState("inactiva"); // inactiva | loading | exitoso | error
  const [message, setMessage] = useState("");

  const handleSubmit = useCallback(
    async (e, { uuid, jobId, candidateId }) => {
      e.preventDefault();

      if (!repoUrl.includes("github.com")) {
        setStatus("error");
        setMessage("URL no válida, ingrese una URL válida de GitHub");
        return;
      }

      setStatus("loading");
      setMessage("");

      try {
        await applyToJob({ uuid, jobId, candidateId, repoUrl });
        setStatus("exitoso");
        setMessage("Postulación enviada correctamente");
      } catch (err) {
        setStatus("error");
        setMessage(err.message);
      }
    },
    [repoUrl]
  );

  return { repoUrl, setRepoUrl, status, message, handleSubmit };
}
