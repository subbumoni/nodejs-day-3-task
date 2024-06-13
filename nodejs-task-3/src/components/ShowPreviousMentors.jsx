import React, { useState } from "react";
import axios from "axios";

const ShowPreviousMentors = ({ students }) => {
  const [selectedStudent, setSelectedStudent] = useState("");
  const [previousMentors, setPreviousMentors] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.get(
      `https://guvi-nodejs-day-3-task-be.onrender.com/api/students/${selectedStudent}/previous-mentors`
    );
    setPreviousMentors(response.data);
  };

  return (
    <div className="container py-4 mt-4 previous-mentor">
      <div className="row d-flex justify-content-center">
        <div className="col-sm-11 col-md-10 col-lg-8 col-xl-6">
          <h3 className="text-center px-2 mb-3">
            Show Previous Mentors for Student
          </h3>
          <form onSubmit={handleSubmit}>
            <div className="form-group mb-2">
              <label htmlFor="studentSelect" className="mb-2 select-student">
                Select Student
              </label>
              <select
                id="studentSelect"
                className="form-select"
                aria-label="Default select example"
                onChange={(e) => setSelectedStudent(e.target.value)}
                required
              >
                <option value="">Select Student</option>
                {students.map((student) => (
                  <option key={student._id} value={student._id}>
                    {student.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="d-flex justify-content-center">
              <button type="submit" className="btn btn-primary mt-3">
                Show Previous Mentors
              </button>
            </div>
          </form>

          <ul className="list-group mt-3">
            {previousMentors.map((mentor) => (
              <li key={mentor._id} className="list-group-item w-100">
                {mentor.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ShowPreviousMentors;
