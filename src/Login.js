import React, { useState,useEffect } from 'react';

const Login = () => {
  const [rfid, setRFID] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      console.log(rfid);
      console.log(password);

      sendLogin();

    } catch (error) {
      console.error('Login error:', error.message);
      setError('An error occurred during login');
    }
  };

  const sendLogin = async () => {

    const credential = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        rfid: rfid,
        password: password
      })

    }

    await (await fetch("http://127.0.0.1:4437/api/crudoperations/Login_Details",credential)).json();
  }
  
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = ''; 
    };
  }, []);

  const handleNumericRFIDChange = (e) => {
    const input = e.target.value;
    if (/^\d{0,10}$/.test(input)) {
      setRFID(input);
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
              onChange={handleNumericRFIDChange}
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
