// src/pages/Landing.tsx
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <div className="container">
      <h1>Welcome to Job Application Tracker</h1>
      <p>Track your job applications, interviews, and results with ease.</p>
      <div>
        <Link to="/login"><button>Login</button></Link>
        <Link to="/register"><button>Register</button></Link>
      </div>
    </div>
  );
};

export default Landing;
