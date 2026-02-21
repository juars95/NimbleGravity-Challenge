import { useState, useCallback } from "react";
import { getCandidateByEmail, getJobsList } from "../services/api";

/**
 * Hook que encapsula la lógica de obtener los datos del candidato
 * y la lista de posiciones abiertas en paralelo.
 */
export function useCandidateData() {
  const [candidate, setCandidate] = useState(null);
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchData = useCallback(async (email) => {
    setLoading(true);
    setError("");
    try {
      const [candidateData, jobsData] = await Promise.all([
        getCandidateByEmail(email),
        getJobsList(),
      ]);
      setCandidate(candidateData);
      setJobs(jobsData);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, []);

  return { candidate, jobs, loading, error, fetchData };
}
