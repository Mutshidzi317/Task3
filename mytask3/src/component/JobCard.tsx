// src/components/JobCard.tsx
import { useNavigate } from 'react-router-dom';

interface Job {
  id: number;
  company: string;
  role: string;
  status: 'Applied' | 'Interviewed' | 'Rejected';
  date: string;
}

interface Props {
  job: Job;
  onDelete: (id: number) => void;
  onEdit: (job: Job) => void;
}

const getStatusColor = (status: string): string => {
  switch (status) {
    case 'Rejected':
      return 'red';
    case 'Interviewed':
      return 'green';
    case 'Applied':
      return 'goldenrod';
    default:
      return 'gray';
  }
};

const JobCard = ({ job, onDelete, onEdit }: Props) => {
  const navigate = useNavigate();

  return (
    <div
      style={{
        border: '1px solid #ccc',
        padding: '1rem',
        marginBottom: '1rem',
        borderLeft: `8px solid ${getStatusColor(job.status)}`,
      }}
    >
      <h4>{job.company} - {job.role}</h4>
      <p>Status: {job.status}</p>
      <p>Date: {job.date}</p>

      <button onClick={() => navigate(`/job/${job.id}`)}>Details</button>
      <button onClick={() => onEdit(job)}>Edit</button>
      <button onClick={() => onDelete(job.id)}>Delete</button>
    </div>
  );
};

export default JobCard;
