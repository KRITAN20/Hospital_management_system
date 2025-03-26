import React from "react";
import { Bell } from "lucide-react";
import "./styles.css";

export default function MedicareDashboard() {
  return (
    <div className="container">
      {/* Header */}
      <header className="header">
        <h1 className="header-title">Medicare / Dashboard</h1>
        <div className="notification-icon">
          <Bell size={24} />
        </div>
      </header>

      {/* Welcome Banner */}
      <section className="welcome-section">
        <div className="welcome-content">
          <h2 className="welcome-title">Hello Patient</h2>
          <p className="welcome-text">
            Welcome to MediCare. Your health, your way—easily manage appointments, access medical records, and stay
            connected with your care.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="main-container">
        {/* Sidebar */}
        <aside className="sidebar">
          <nav className="nav-menu">
            <a href="#" className="nav-link">
              Dashboard
            </a>
            <a href="#" className="nav-link">
              Appointment
            </a>
            <a href="#" className="nav-link">
              EHR
            </a>
            <a href="#" className="nav-link">
              Billing
            </a>
          </nav>
        </aside>

        {/* Main Content Area */}
        <main className="main-content">
          <div className="card-grid">
            {/* Dentist Card */}
            <div className="card">
              <div className="card-image-container">
                <img
                  src="/placeholder.svg"
                  alt="Dentist"
                  className="card-image"
                />
              </div>
              <h3 className="card-title">Dentist</h3>
            </div>

            {/* Orthopedic Card */}
            <div className="card">
              <div className="card-image-container">
                <img
                  src="/placeholder.svg"
                  alt="Orthopedic"
                  className="card-image"
                />
              </div>
              <h3 className="card-title">Orthopedic</h3>
            </div>

            {/* Urgent Care Card */}
            <div className="card">
              <div className="card-image-container">
                <img
                  src="/placeholder.svg"
                  alt="Urgent Care"
                  className="card-image"
                />
              </div>
              <h3 className="card-title">Urgent Care</h3>
            </div>

            {/* Empty Card */}
            <div className="card">
              <div className="empty-card"></div>
            </div>

            {/* Empty Card */}
            <div className="card">
              <div className="empty-card"></div>
            </div>
          </div>
        </main>
      </div>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content"></div>
      </footer>
    </div>
  );
}
