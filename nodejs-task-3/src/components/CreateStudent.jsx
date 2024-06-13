import React, { useState } from "react";
import axios from "axios";

const CreateStudent = ({ fetchStudents }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://guvi-nodejs-day-3-task-be.onrender.com/api/students",
        { name, email }
      );
      alert(response.data.message);
      setName("");
      setEmail("");
      fetchStudents();
    } catch (error) {
      console.error("Error creating student:", error);
    }
  };

  return (
    <div className="container mt-4 py-4 create-student">
      <div className="row d-flex justify-content-center">
        <div className="col-sm-11 col-md-10 col-lg-8 col-xl-6">
          <h2 className="text-center mb-3">Create Student</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group mx-auto">
              <input
                className="form-control mb-3"
                id="student-name-input"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Student Name"
                required
              />
            </div>

            <div className="form-group mx-auto">
              <input
                className="form-control mb-3"
                id="student-email-input"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Student Email"
                required
              />
            </div>

            <div className="d-flex justify-content-center">
              <button type="submit" className="btn btn-primary">
                Create Student
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateStudent;
