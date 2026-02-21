import { useState, useCallback } from "react";
import { getCandidateByEmail, getJobsList } from "../services/api";
import { useToast } from "../context/ToastContext";

/**
 * Hook que encapsula la lógica de obtener los datos del candidato
 * y la lista de posiciones abiertas en paralelo.
 */
export function useCandidateData() {
  const [candidate, setCandidate] = useState(null);
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(false);
  const { addToast } = useToast();

  const fetchData = useCallback(async (email) => {
    setLoading(true);
    try {
      const [candidateData, jobsData] = await Promise.all([
        getCandidateByEmail(email),
        getJobsList(),
      ]);
      setCandidate(candidateData);
      setJobs(jobsData);
    } catch (err) {
      addToast(err.message || "Error al obtener perfil", "error");
    } finally {
      setLoading(false);
    }
  }, [addToast]);

  return { candidate, jobs, loading, fetchData };
}
