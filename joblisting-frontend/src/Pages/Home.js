import React from "react";
import { Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import "../App.css";

const Home = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      {/* Striking Hero Section with Gradient Background */}
      <div style={{ textAlign: "center", background: "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('path/to/your-hero-image.jpg') center/cover", padding: "5% 5%", color: "white" }}>
        <Typography variant="h4" align="center" style={{ marginBottom: "2%", fontSize: "2.5rem", fontWeight: "bold" }}>
          Elevate Your Career: Unlock Opportunities and Connect with Top Talent!
        </Typography>
      </div>

      {/* Feature-Driven Call-to-Action Buttons with Hover Effects */}
      <div style={{ display: "flex", justifyContent: "center", marginTop: "3%" }}>
        {/* Empowering Button for Employers */}
        <Button sx={{ margin: "0 1%", backgroundColor: "#61dafb", color: 'white', fontSize: "1.0rem", borderRadius: "20px", transition: "background-color 0.3s" }} variant="contained">
          <Link to="/employer" style={{ textDecoration: 'none', color: 'white', padding: "10px 20px", display: "block" }}>
            Discover Top Talent
          </Link>
        </Button>

        {/* Life-Changing Button for Job Seekers */}
        <Button sx={{ margin: "0 1%", backgroundColor: "#ff6347", color: 'white', fontSize: "1.0rem", borderRadius: "20px", transition: "background-color 0.3s" }} variant="contained">
          <Link to="/employee/feed" style={{ textDecoration: 'none', color: 'white', padding: "10px 20px", display: "block" }}>
            Find Your Dream Job
          </Link>
        </Button>
      </div>

      {/* Testimonials Section with Sleek Card Design */}
      <div style={{ margin: "5%", backgroundColor: "#f2f2f2", padding: "2%", color: "#333", overflow: "hidden" }}>
        <Typography variant="h4" align="center" style={{ marginBottom: "3%", fontSize: "2rem", fontWeight: "bold" }}>
          What Our Users Say
        </Typography>

        {/* Testimonial Cards */}
        <div style={{ display: "flex", justifyContent: "space-around", overflowX: "auto", animation: "slide-in 1s ease-out" }}>
          {/* Testimonial Card 1 */}
          <div style={{ minWidth: "300px", maxWidth: "400px", margin: "0 10px" }}>
            <div style={{ backgroundColor: "#fff", borderRadius: "15px", padding: "15px", boxShadow: "0 0 10px rgba(0,0,0,0.1)" }}>
              <Typography variant="body1" style={{ marginBottom: "1%", fontSize: "1rem" }}>
                "Elevate Your Career is a game-changer! I found my dream job within weeks."
              </Typography>
              <Typography variant="caption">- John Doe, Senior Developer</Typography>
            </div>
          </div>

          {/* Testimonial Card 2 */}
          <div style={{ minWidth: "300px", maxWidth: "400px", margin: "0 10px" }}>
            <div style={{ backgroundColor: "#fff", borderRadius: "15px", padding: "15px", boxShadow: "0 0 10px rgba(0,0,0,0.1)" }}>
              <Typography variant="body1" style={{ marginBottom: "1%", fontSize: "1rem" }}>
                "As an employer, the platform helped us discover top talent efficiently."
              </Typography>
              <Typography variant="caption">- Jane Smith, HR Manager</Typography>
            </div>
          </div>

          {/* Add more Testimonial Cards as needed */}
        </div>
      </div>

      {/* Interactive Elements with Fade-In Animation */}
      <div style={{ textAlign: "center", margin: "5%", animation: "fade-in 1s ease-out" }}>
        {/* Add interactive elements here */}
      </div>

      {/* Return to Top Button */}
      <div style={{ textAlign: "right", marginTop: "3%" }}>
        <Button
          sx={{
            backgroundColor: "#3f51b5",
            color: 'white',
            borderRadius: "8px",
            padding: "8px 16px",
            fontSize: "0.8rem",
            '&:hover': { backgroundColor: '#2a3f9d' },
          }}
          onClick={scrollToTop}
        >
          Return to Top
        </Button>
      </div>

      {/* Footer Section with Navigation Links and Contact Information */}
      <div style={{ marginTop: "20px", backgroundColor: "#282c34", padding: "2%", textAlign: "center", color: 'white' }}>
        {/* Navigation Links */}
        <div style={{ marginBottom: "1rem" }}>
          <Link to="/about" style={{ textDecoration: 'none', color: 'white', margin: "0 10px" }}>
            About Us
          </Link>
          <Link to="/services" style={{ textDecoration: 'none', color: 'white', margin: "0 10px" }}>
            Services
          </Link>
          <Link to="/contact" style={{ textDecoration: 'none', color: 'white', margin: "0 10px" }}>
            Contact Us
          </Link>
        </div>

        {/* Contact Information */}
        <div>
          <p>Email: xyz@xyz.com</p>
          <p>Phone: +1 (123) 456-7890</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
