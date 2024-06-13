import React from "react";
import { Link } from "react-router-dom";
import { Nav } from "react-bootstrap";

const Sidebar = () => {
  return (
    <div className="vh-100 p-3 fixed-left">
      <h4 className="text-center text-white">Form Navigations</h4>
      <Nav className="flex-column mt-3 ps-3 gap-3">
        <Link to="/create-mentor" className="text-white navbar-link">
          Create Mentor
        </Link>
        <Link to="/create-student" className="text-white navbar-link">
          Create Student
        </Link>
        <Link to="/assign-students" className="text-white navbar-link">
          Assign Students
        </Link>
        <Link to="/change-mentor" className="text-white navbar-link">
          Change Mentor
        </Link>
        <Link to="/show-students" className="text-white navbar-link">
          Show Students
        </Link>
        <Link to="/show-previous-mentors" className="text-white navbar-link">
          Show Previous Mentors
        </Link>
      </Nav>
    </div>
  );
};

export default Sidebar;
