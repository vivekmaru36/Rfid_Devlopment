import React, { useState } from 'react';

const Login = () => {
  const [rfid, setRFID] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('RFID:', rfid);
    console.log('Password:', password);
    // Implement your login logic here
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label htmlFor="rfid">RFID:</label>
          <input
            type="text"
            id="rfid"
            value={rfid}
            onChange={(e) => setRFID(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
