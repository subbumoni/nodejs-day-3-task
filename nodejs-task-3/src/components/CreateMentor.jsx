import React, { useState } from "react";
import axios from "axios";

const CreateMentor = ({ fetchMentors }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://guvi-nodejs-day-3-task-be.onrender.com/api/mentors",
        { name, email }
      );
      alert(response.data.message); // Show success message
      setName("");
      setEmail("");
      fetchMentors();
    } catch (error) {
      console.error("Error creating mentor:", error);
    }
  };

  return (
    <div className="container mt-4 py-4 create-mentor">
      <div className="row d-flex justify-content-center">
        <div className="col-sm-11 col-md-10 col-lg-8 col-xl-6">
          <h2 className="text-center mb-3">Create Mentor</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group mx-auto">
              <input
                className="form-control mb-3 mentor-name"
                id="mentor-name-input"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Mentor Name"
                required
              />
            </div>

            <div className="form-group mx-auto">
              <input
                className="form-control mb-3"
                id="mentor-email-input"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Mentor Email"
                required
              />
            </div>

            <div className="d-flex justify-content-center">
              <button className="btn btn-primary" type="submit">
                Create Mentor
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateMentor;
