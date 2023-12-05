<<<<<<< HEAD
import React from 'react';
import campusImage from './images/campus.jpg';

const Home = () => {
  return (
    <div className='home-page'>
      <h2>Welcome to Our Campus Management System</h2>
      <img src={campusImage} alt="Campus" style={{ maxWidth: '100%', borderRadius: '8px', marginBottom: '20px' }} />
      
      <p><b>Empowering education through innovation and efficiency.</b></p>
      <p><b>Explore our RFID-based solution for seamless campus operations.</b></p>
      <p>
        For inquiries, contact us at:
        <br /><b>
        Phone: +91 1234567890</b>
        <br />
        <b>Email: info@campusmanagement.com</b>
      </p>
    </div>
  );
};

export default Home;
=======
import React from 'react';

const Home = () => {
  return (
    <div>
      <h2>Home</h2>
      <p>Welcome to the home page!</p>
    </div>
  );
};

export default Home;
>>>>>>> 615d3f24881930491b6da80b834ca16a6556b355
