import { BASE_URL } from "../config/api";

/**
 * Obtiene los datos del candidato por email.
 * @param {string} email
 * @returns {Promise<Object>} candidateData
 */
export async function getCandidateByEmail(email) {
  const res = await fetch(
    `${BASE_URL}/api/candidate/get-by-email?email=${encodeURIComponent(email)}`
  );
  const data = await res.json();
  if (!res.ok) {
    throw new Error(data.message || "Error al obtener datos. Revise el email");
  }
  return data;
}

/**
 * Obtiene la lista de posiciones abiertas.
 * @returns {Promise<Array>} jobs
 */
export async function getJobsList() {
  const res = await fetch(`${BASE_URL}/api/jobs/get-list`);
  const data = await res.json();
  if (!res.ok) {
    throw new Error(data.message || "Error al obtener lista de posiciones.");
  }
  return data;
}

/**
 * Envía la postulación de un candidato a una posición.
 * @param {Object} params
 * @param {string} params.uuid
 * @param {string} params.jobId
 * @param {string} params.applicationId
 * @param {string} params.candidateId
 * @param {string} params.repoUrl
 * @returns {Promise<Object>}
 */
export async function applyToJob({ uuid, jobId, applicationId, candidateId, repoUrl }) {
  const res = await fetch(`${BASE_URL}/api/candidate/apply-to-job`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ uuid, jobId, applicationId, candidateId, repoUrl }),
  });
  const data = await res.json();
  if (!res.ok) {
    throw new Error(data.message || "Error al enviar la postulación");
  }
  return data;
}
