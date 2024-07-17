import React, { useState } from "react";
import "./css/LoginPage.css";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleLogin = async (event) => {
    event.preventDefault();
    
    try {
      const response = await fetch('https://hotel-management-dngq.onrender.com/UserLogin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        const responseData = await response.json();
        throw new Error(responseData.Message || 'Login failed');
      }

      const data = await response.json();
      // Save the token to localStorage or state
      localStorage.setItem('token', data.token);
      
      // Redirect to '/UserFunction' after successful login
      navigate('/UserFunction');
    } catch (error) {
      setError('Failed to login. Please check your credentials.');
      console.error('Login error:', error);
    }
  };

  return (
    <div className="Login-container">
      <h2>Login Form</h2>
      <form onSubmit={handleLogin}>
        <input
          type="text"
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
        <a href="#">Forgot Password?</a>
        <button type="submit">LOGIN</button>
        {error && <p className="error-message">{error}</p>}
        <p>Not a member? <a href="/SignUp">Signup now</a></p>
        <a href="/StaffLogin">Staff Login</a>
      </form>
    </div>
  );
}

export default LoginPage;
