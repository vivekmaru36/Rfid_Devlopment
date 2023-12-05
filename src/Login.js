import React, { useState } from 'react';

const Login = () => {
  const [rfid, setRFID] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    // Simulate a server request (replace this with your actual login API call)
    try {
      // Check if RFID and password match in your server/database
      // For now, let's assume a simple case where RFID is '123' and password is 'password'
      if (rfid === '123' && password === 'password') {
        console.log('Login successful!');
        setError('');
        // You can redirect to another page or perform other actions upon successful login
      } else {
        setError('Invalid RFID or password');
      }
    } catch (error) {
      console.error('Login error:', error.message);
      setError('An error occurred during login');
    }
  };

  return (
    <div className="login-container">
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleLogin} className="login-form">
        <h2>Login</h2>
        <div className='login-content'>
          <div>
            <label htmlFor="rfid">RFID:</label><br></br>
            <input
              type="text"
              id="rfid"
              value={rfid}
              onChange={(e) => setRFID(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="password">Password:</label><br></br>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
