import { useState, useCallback } from "react";
import { applyToJob } from "../services/api";
import { useToast } from "../context/ToastContext";

/**
 * Hook que encapsula la lógica de envío de postulación a una posición.
 * Incluye validación de URL de GitHub y manejo de estados.
 */
export function useJobApplication() {
  const [repoUrl, setRepoUrl] = useState("");
  const [status, setStatus] = useState("inactiva"); // inactiva | loading | exitoso
  const { addToast } = useToast();

  const handleSubmit = useCallback(
    async (e, { uuid, jobId, applicationId, candidateId }) => {
      e.preventDefault();

      if (!repoUrl.includes("github.com")) {
        addToast("URL no válida, ingrese una URL válida de GitHub", "error");
        return;
      }

      setStatus("loading");

      try {
        await applyToJob({ uuid, jobId, applicationId, candidateId, repoUrl });
        setStatus("exitoso");
        addToast("Postulación enviada correctamente", "success");
      } catch (err) {
        setStatus("inactiva");
        addToast(err.message, "error");
      }
    },
    [repoUrl, addToast]
  );

  return { repoUrl, setRepoUrl, status, handleSubmit };
}
