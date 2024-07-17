import React, { useState } from "react";
import "./css/Userfunction.css";
import {useNavigate} from "react-router-dom";

function Userfunctions({ userName }) {
  const Navigate = useNavigate();

  const handleBooking = () => {
    Navigate('/bookingpage');
  };

  const handleFeedback = () => {
    Navigate('/Feedback');
  };

  const handleHousekeep= () => {
    Navigate('/Userhouseekeep');
  };

  const handleplanner= () => {
    Navigate('/Planner');
  };

  const handlesignout= () => {
    Navigate('/login');
  };

  const [showDropdown, setShowDropdown] = useState(false);

  const handleProfileClick = () => {
    setShowDropdown(!showDropdown);
  };

 


  const galleryData = [
    {
      id: 1,
      imageURL: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.UecmWknyfqWzk18Gj8Z8xgHaE8%26pid%3DApi&f=1&ipt=cf62e6f07f62a42818f18aac84dbf9b35605a9213483a16ff029d137dd2c3840&ipo=images",
      type: "Suite Room",
      price: "$200 per night",
      detail: ""
    },
    {
      id: 2,
      imageURL: "https://cf2.bstatic.com/xdata/images/hotel/max1280x900/422434166.jpg?k=7373daefe8904673766e45fcd830452589383a2d7e9f7794fb54511dd4360513&o=&hp=1r",
      type: "Standard Room",
      price: "$100 per night",
      detail: ""
    },
    {
      id: 3,
      imageURL: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2F8%2F83%2FImperial_Hotel_Osaka_regular_floor_standard_twin_room_20120630-001.jpg&f=1&nofb=1&ipt=5b4e85d14ff4c157e95a57bb0e5bfee6711d19b43f6770fc26e2ae044d5a20cd&ipo=images",
      type: "Double Room",
      price: "$150 per night",
      detail: ""
    },
    
  ];

  return (
    <div>
     <header className="header">
     <container class="options" >
        <div className="navbar-actions">
              <button className="btn" onClick={handleBooking}>Book Now</button>
            </div>
            <div className="navbar-actions">
              <button className="btn" onClick={handleHousekeep}>Housekeeping</button>
            </div>
            <div className="navbar-actions">
              <button className="btn" onClick={handleFeedback}>Feedback</button>
            </div>
            <div className="navbar-actions">
              <button className="btn" onClick={handleplanner}>AI Package Planner</button>
            </div>
        <div className="navbar-logo">
          
        </div>
        <div className="profile-icon" onClick={handleProfileClick}>
          {userName}
        </div>
        {showDropdown && (
          <div className="dropdown-menu">
            <button onClick={handlesignout}>Sign Out</button>
          </div>
        )}
      </container> 
    </header>
      <section className="userffunction_hero">
      {/* <h1 className="greet">Welcome</h1> */}
        {/* <h3>Choose rooms</h3> */}
      </section>

      <div className="gallery-container">
        <section className="gallery">
          {galleryData.map(item => (
            <div key={item.id} className="gallery-item">
              <a href="/bookingpage" target="_blank" rel="noopener noreferrer">
                <img
                  src={item.imageURL}
                  alt="Example Image"
                  style={{ cursor: 'pointer' }}
                />
              </a>
              <div className="image-details">
                <h3>{item.type}</h3>
                <p>{item.price}</p>
                <p>{item.detail}</p>
              </div>
            </div>
          ))}
        </section>
      </div>

      <footer id="footer">
      <div className="about-container">
            <h2 class="topic">About Us</h2>
            <hr />
            <p>Welcome to our hotel! We offer the best services to make your stay comfortable and memorable. Our hotel features luxurious rooms, a state-of-the-art spa, and gourmet dining options. We look forward to welcoming you soon.</p>
          </div>
          <div className="footer-container">
          
                <div class="footer-column">
                    <h2 class="topic">Quick Links</h2>
                    <hr />
                    <ul>
                        <p className="links">
                        <h2><a href="shop.html">Book Room</a></h2> <br />
                        </p>
                        <p className="links"> 
                        <h2><a href="about.html">Call for Service</a></h2> <br />
                        </p>
                      <p className="links">
                       <h2><a href="contact.html">Feedback</a></h2>
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
                <p ><center>&copy; 2024 All rights reserved.</center></p>
                </div>
        </footer>
    </div>
  );
}

export default Userfunctions;
