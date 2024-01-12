// src/Pages/Home.js

import React from "react";
import { Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import "../App.css";

// Enhanced Home Page React Component
// Impactful Home Page React Component
// Enhanced Home Page React Component
const Home = () => {
    return (
      <div>
        {/* Striking Hero Section */}
        <div style={{ textAlign: "center", backgroundColor: "#282c34", padding: "5%", color: "white" }}>
          <Typography variant="h3" align="center" style={{ marginBottom: "2%", fontSize: "2.5rem" }}>
            Elevate Your Career: Unlock Opportunities and Connect with Top Talent!
          </Typography>
          {/* Actual hero image or video here */}
          <img
            src="path/to/your-hero-image.jpg"
            alt="Hero Image"
            style={{ maxWidth: "100%", height: "auto", borderRadius: "8px", boxShadow: "0 0 10px rgba(0,0,0,0.5)" }}
          />
        </div>
  
        {/* Feature-Driven Call-to-Action Buttons */}
        <div style={{ display: "flex", justifyContent: "center", marginTop: "3%" }}>
          {/* Empowering Button for Employers */}
          <Button sx={{ margin: "0 1%", backgroundColor: "#61dafb", color: 'white', fontSize: "1.2rem" }} variant="contained">
            <Link to="/employer" style={{ textDecoration: 'none', color: 'white' }}>
              Discover Top Talent
            </Link>
          </Button>
  
          {/* Life-Changing Button for Job Seekers */}
          <Button sx={{ margin: "0 1%", backgroundColor: "#ff6347", color: 'white', fontSize: "1.2rem" }} variant="contained">
            <Link to="/employee/feed" style={{ textDecoration: 'none', color: 'white' }}>
              Find Your Dream Job
            </Link>
          </Button>
        </div>
  
        {/* Testimonials Section */}
        <div style={{ margin: "5%", backgroundColor: "#f2f2f2", padding: "3%", borderRadius: "8px", color: "#333" }}>
          <Typography variant="h4" align="center" style={{ marginBottom: "3%", fontSize: "1.5rem" }}>
            What Our Users Say
          </Typography>
  
          {/* Placeholder Testimonials (Replace with actual testimonials) */}
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            <div style={{ textAlign: "left" }}>
              <Typography variant="body1" style={{ marginBottom: "1%", fontSize: "1.1rem" }}>
                "Elevate Your Career is a game-changer! I found my dream job within weeks."
              </Typography>
              <Typography variant="caption">- John Doe, Senior Developer</Typography>
            </div>
            <div style={{ textAlign: "left" }}>
              <Typography variant="body1" style={{ marginBottom: "1%", fontSize: "1.1rem" }}>
                "As an employer, the platform helped us discover top talent efficiently."
              </Typography>
              <Typography variant="caption">- Jane Smith, HR Manager</Typography>
            </div>
          </div>
        </div>
  
        {/* Interactive Elements (Placeholder) */}
        <div style={{ textAlign: "center", margin: "5%" }}>
          {/* Add interactive elements here */}
        </div>
  
        {/* Footer Section with Navigation Links (Placeholder) */}
        <div style={{ backgroundColor: "#282c34", padding: "2%", textAlign: "center", color: 'white' }}>
          {/* Add footer content and navigation links here */}
        </div>
      </div>
    );
  };
  
  
export default Home;
