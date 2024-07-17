import React, { useEffect, useRef } from "react";
import my_image from './Web warriors.png';
import './css/HomePage.css';
import { useNavigate } from 'react-router-dom';



  function Homepage() {

    const Navigate = useNavigate();

    const openLoginPage = () => {
      Navigate('/login');
    };

    const openSignupPage = () => {
      Navigate('/SignUp');
    };

    return (
      <div>
        <header>

        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" integrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A==" crossorigin="anonymous" referrerpolicy="no-referrer" />

          <nav className="navbar">
            <div className="navbar-logo">
              <img src={my_image} alt="Logo" />
            </div>
            <div className="navbar-heading">
              <h1>Web Warriors</h1>
            </div>
            <div class="social-media-handles"> Follow Us 
                            <a class="social" href="https://www.x.com" target="_blank"><i class="fa-brands fa-x-twitter"></i></a>
                            <a class="social" href="https://www.instagram.com" target="_blank"><i class="fa-brands fa-instagram"></i></a>
                            <a class="social" href="https://www.facebook.com" target="_blank"><i class="fa-brands fa-facebook"></i></a>
            </div>
            <div className="signUp">
            <div className="navbar-actions">
              <button className="btn btn-primary" onClick={openLoginPage} >Login</button>
            </div>
            <div className="navbar-actions">
              <button className="btn btn-primary" onClick={openSignupPage}>SignUp</button>
            </div>
            </div>
          </nav>
        </header>

        <section className="hero-section">
         
          <div className="hero-image">
            <img src="https://theluxurytravelexpert.com/wp-content/uploads/2019/07/header4.jpg" alt="Hero Image" />
          </div>
        
        </section>

        <section className="heroproject">
          
      {/* <h1 className="greet">Welcome</h1> */}
        {/* <h3>Choose rooms</h3> */}
      </section>

        <footer id="footer">
          <div className="footer-container">
          <div className="about-container">
            <h2 class="topic">About Us</h2>
            <hr />
            <p>Welcome to our hotel! We offer the best services to make your stay comfortable and memorable. Our hotel features luxurious rooms, a state-of-the-art spa, and gourmet dining options. We look forward to welcoming you soon.</p>
          </div>
          
          <div class="footer-column">
                    <h2 class="topic">Quick Links</h2>
                    <hr />
                    <ul>
                        <p className="links">
                        <a href="/login">Book Room</a> <br />
                        </p>
                        <p className="links"> 
                        <a href="/login">Call for Service</a> <br />
                        </p>
                      <p className="links">
                       <a href="/login">Feedback</a>
                      </p>
                    </ul>
                </div>
                <div class="footer-column">
                    <h2 class="topic">Contact Us</h2>
                    <hr />
                    <p>Email: support@webwarriors.com</p>
                    <div class="mobile-no"><i class="fa-solid fa-phone"></i> - 8126504054</div>                    <p>Address: 123 Healthy Way, Wellness City, WC 12345</p>
                    <p>Mathura,Uttar Pradesh pincode</p>
                </div>
          </div>
          <br /><br />
          <div class="footer-bottom">
                <p ><center>&copy; 2024 Balanced Bites. All rights reserved.</center></p>
                </div>
        </footer>
      </div>
    );
  }

  export default Homepage;