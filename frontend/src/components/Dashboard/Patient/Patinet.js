import React from "react";
import { useNavigate } from "react-router-dom";

export default function Patient() {
  const navigate = useNavigate();

  // Check if the user is logged in (by checking the accessToken)
  const isAuthenticated = localStorage.getItem("accessToken");

  if (!isAuthenticated) {
    navigate("/signin");
  }

  return (
    <div>
      <h1>Patient Dashboard</h1>
      <p>Welcome, Patient!</p>
      {/* Other dashboard content goes here */}
    </div>
  );
}
