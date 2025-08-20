import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface Job {
  id: number;
  company: string;
  role: string;
  status: string;
  date: string;
}

const Home = () => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    const res = await fetch('http://localhost:5000/jobs');
    const data = await res.json();
    setJobs(data);
  };

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/login');
  };

  return (
    <div className="container">
      <h2>My Job Applications</h2>
      <button onClick={handleLogout}>Logout</button>
      <ul>
        {jobs.map((job) => (
          <li key={job.id} style={{ color: job.status === 'Rejected' ? 'red' : job.status === 'Interviewed' ? 'green' : 'goldenrod' }}>
            <strong>{job.company}</strong> - {job.role} ({job.status})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
