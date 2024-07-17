import React from 'react';
import './css/StaffLogin.css'
import { useNavigate } from "react-router-dom";

function StaffLogin() {
    const Navigate= useNavigate();
  const handleStaffLogin=()=>{
    Navigate('/Stafffunction')
  }

    return (
        <div className="login-container">
            <h2>Staff login</h2>
            <form action="#">
                <label htmlFor="staff-id">Staff Id -</label>
                <input type="text" id="staff-id" placeholder="Enter your staff ID" required />
                
                <label htmlFor="password">Password -</label>
                <input type="password" id="password" placeholder="Enter your password" required />
                
                <button type="submit" onClick={handleStaffLogin}>Login</button>
            </form>
        </div>
    );
}

export default StaffLogin;