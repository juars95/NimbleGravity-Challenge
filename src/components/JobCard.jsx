import { useState } from "react";

const BASE_URL = "https://botfilter-h5ddh6dye8exb7ha.centralus-01.azurewebsites.net";

export default function JobCard({job, candidate}){
    const[repoUrl, setRepoUrl] = useState('');
    const [status, setStatus] = useState('inactiva');
    const[message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        //validacion
        if (!repoUrl.includes('github.com')){
            setStatus('error');
            setMessage('URL no valida, ingrese una URL valida de GitHub');
            return;
        }
        setStatus('loading');
        setMessage('');
        try{
            const response = await fetch(`${BASE_URL}/api/candidate/apply-to-job`, {
                method: 'POST',
                headers:{
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    uuid: candidate.uuid,
                    jobId: job.id,
                    candidateId: candidate.CandidateId,
                    repoURL: repoUrl
                })
            });
            const data = await response.json().catch(() => ({}));
            if (!response.ok){
                throw new Error(data.message || "Error al enviar la postulacion");
            }
            //Exito
            setStatus('exitoso');
            setMessage('Postulacion enviada correctamente');
        }catch(error){
            setStatus('error');
            setMessage(error.message);
        }

    };
    return(
        <div className="job-card" style={styles.card}>
        <h3>{job.title}</h3>
        <p style={styles.jobId}>ID: {job.id}</p>
        
        {status === 'exitoso' ? (
            <div style={styles.successBox}>{message}</div>
        ) : (
            <form onSubmit={handleSubmit} style={styles.form}>
            <input
                type="url"
                placeholder="https://github.com/juars95/NimbleGravity-Challenge.git"
                value={repoUrl}
                onChange={(e) => setRepoUrl(e.target.value)}
                disabled={status === 'loading'}
                style={styles.input}
                required
            />
            <button 
                type="submit" 
                disabled={status === 'loading' || !repoUrl}
                style={styles.button}
            >
                {status === 'loading' ? 'Enviando...' : 'Submit'}
            </button>
            </form>
        )}
        {status === 'error' && <p style={styles.errorText}>{message}</p>}
        </div>
    );

}
//dejo puesto algunos estilos en css para que quede mas decente sin agregar librerias extras
const styles = {
  card: { border: '1px solid #ddd', borderRadius: '8px', padding: '16px', marginBottom: '16px', backgroundColor: '#fff',color: '#333' },
  jobId: { fontSize: '0.85rem', color: '#666' },
  form: { display: 'flex', gap: '8px', marginTop: '12px' },
  input: { flex: 1, padding: '8px', borderRadius: '4px', border: '1px solid #ccc' },
  button: { padding: '8px 16px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' },
  errorText: { color: 'red', fontSize: '0.9rem', marginTop: '8px' },
  successBox: { backgroundColor: '#d4edda', color: '#155724', padding: '12px', borderRadius: '4px', marginTop: '12px' }
};