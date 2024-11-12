import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  // Check if the user is already logged in when the component loads
  useEffect(() => {
    const userEmail = localStorage.getItem('userEmail');
    if (userEmail) {
      // If user is already logged in, redirect to the homepage
      navigate('/');
    }
  }, [navigate]);

  const handleLogin = () => {
    // Check if both email and password are entered
    if (email && password) {
      localStorage.setItem('userEmail', email); // Store email in localStorage
      if (email === 'admin@example.com') {
        localStorage.setItem('userRole', 'admin'); // Store role if admin
        console.log('Redirecting to admin dashboard');
        navigate('/admin-dashboard'); // Navigate to admin dashboard
      } else {
        localStorage.setItem('userRole', 'user'); // Store role as user
        console.log('Redirecting to user Home');
        navigate('/'); // Navigate to homepage
      }
    } else {
      alert('Please enter both email and password!');
    }
  };

  return (
    <div className="w-[300px] h-[280px] bg-gray-300 mx-[500px] my-[150px] border rounded">
      <div className="my-10 mx-12">
        <h1>Email</h1>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter Your Email"
          className="p-1 pl-3 border rounded"
        />
        <h1 className="mt-4">Password</h1>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="*****"
          className="p-1 pl-3 border rounded"
        />
        <div className="mt-8 mx-2">
          <button
            onClick={handleLogin}
            className="w-[70px] h-[30px] bg-blue-300 border rounded"
          >
            LogIn
          </button>
          <button className="w-[70px] h-[30px] bg-blue-300 border ml-10 rounded">
            SignUp
          </button>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
