// src/pages/JobDetails.tsx
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

interface Job {
  id: number;
  company: string;
  role: string;
  status: string;
  date: string;
  details: string;
}

const JobDetails = () => {
  const { id } = useParams();
  const [job, setJob] = useState<Job | null>(null);

  useEffect(() => {
    const fetchJob = async () => {
      const res = await fetch(`http://localhost:5000/jobs/${id}`);
      const data = await res.json();
      setJob(data);
    };

    fetchJob();
  }, [id]);

  if (!job) return <div>Loading...</div>;

  return (
    <div className="container">
      <h2>{job.company} - {job.role}</h2>
      <p><strong>Status:</strong> {job.status}</p>
      <p><strong>Date Applied:</strong> {job.date}</p>
      <p><strong>Details:</strong> {job.details}</p>
    </div>
  );
};

export default JobDetails;
