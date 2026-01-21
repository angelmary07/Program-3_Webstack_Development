import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError('Please fill in all fields');
      return;
    }
    // Fake login check (in real app use proper auth)
    if (email === 'test@elite.com' && password === '123456') {
      alert('Login successful! Welcome back.');
      navigate('/');
    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <div className="card">
      <h1>Sign In</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        {error && <p className="error">{error}</p>}
        <button type="submit">Sign In</button>
      </form>
      <div className="auth-container">
        <Link to="/signup" className="link">Create Account</Link>
        <br /><br />
        <Link to="#" className="link">Forgot your password?</Link>
      </div>
    </div>
  );
}

export default Login;
