import React, { useState } from 'react';
const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === 'Eugy' && password === 'Kamau') {
      setError('');
      alert('Login Successful');
    } else {
      setError('Invalid credentials, please try again.');
    }
  };

  const formStyle = {
    background: '#ffffff',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
    maxWidth: '400px',
    margin: 'auto',
    textAlign: 'center',
  };

  const inputStyle = {
    width: '100%',
    padding: '10px',
    margin: '10px 0',
    border: '1px solid #ccc',
    borderRadius: '4px',
  };

  const buttonStyle = {
    background: '#4CAF50',
    color: 'white',
    padding: '10px 15px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '16px',
  };

  const errorStyle = {
    color: 'red',
    marginTop: '10px',
  };

  return (
    <div style={formStyle}>
      <h2 style={{ marginBottom: '20px' }}>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          style={inputStyle}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={inputStyle}
        />
        {error && <p style={errorStyle}>{error}</p>}
        <button type="submit" style={buttonStyle}>Login</button>
      </form>
    </div>
  );
};

export default LoginForm;