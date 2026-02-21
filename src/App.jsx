import { useState } from 'react'
import JobCard from './components/JobCard'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


const BASE_URL = "https://botfilter-h5ddh6dye8exb7ha.centralus-01.azurewebsites.net";

function App() {
  const [email, setEmail] = useState('');
  const[candidate, setCandidate] = useState(null);
  const [jobs, setJobs] = useState([]);

  //vista principal
  const[loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const handleFetchData = async (e) =>{
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    setError('');
    try{
      const candidateRes = await fetch(`${BASE_URL}/api/candidate/get-by-email?email=${encodeURIComponent(email)}`);
      const candidateData = await candidateRes.json().catch(() => ({}));

      if (!candidateRes.ok){
        throw new Error(candidateData.message || 'Error al obtener datos. Resiva el email');
      }
      setCandidate(candidateData);

      //Step 3 
      const jobsRes = await fetch(`${BASE_URL}/api/jobs/get-list`);
      const jobsData = await jobsRes.json().catch(() => ({}));

      if (!jobsRes.ok){
        throw new Error(jobsData.message || 'Error al obtener lista de posiciones.');
      }
      setJobs(jobsData);
    }catch(error){
      setError(error.message);
    }finally{
      setLoading(false);
    }
  };
  return (
    <div style={{ maxWidth: '600px', margin: '40px auto', fontFamily: 'system-ui, sans-serif' }}>
      <h2>Posiciones a Postularse</h2>
      
      {!candidate && (
        <form onSubmit={handleFetchData} style={{ marginBottom: '24px' }}>
          <label style={{ display: 'block', marginBottom: '8px' }}>Ingresá tu email:</label>
          <div style={{ display: 'flex', gap: '8px' }}>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="tu.email@ejemplo.com"
              required
              style={{ flex: 1, padding: '8px' }}
            />
            <button type="submit" disabled={loading} style={{ padding: '8px 16px' }}>
              {loading ? 'Cargando...' : 'Buscar mis datos'}
            </button>
          </div>
          {error && <p style={{ color: 'red' }}>{error}</p>}
        </form>
      )}

      {/* Listado de Posiciones*/}
      {candidate && jobs.length > 0 && (
        <div>
          <div style={{ marginBottom: '24px', padding: '12px', backgroundColor: '#f0f4f8', borderRadius: '8px' }}>
            <p style={{ margin: 0 }}>Postulando como: <strong>{candidate.firstName} {candidate.lastName}</strong></p>
          </div>
          
          <h3>Posiciones Disponibles</h3>
          {jobs.map(job => (
            <JobCard 
              key={job.id} 
              job={job} 
              candidate={candidate} 
            />
          ))}
        </div>
      )}
    </div>
  );

}

export default App
