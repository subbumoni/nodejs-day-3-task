import React, { useState } from "react";
import axios from "axios";

const ShowStudents = ({ mentors }) => {
  const [selectedMentor, setSelectedMentor] = useState("");
  const [students, setStudents] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.get(
      `https://guvi-nodejs-day-3-task-be.onrender.com/api/mentors/${selectedMentor}/students`
    );
    setStudents(response.data);
  };

  return (
    <div className="container py-4 mt-4 show-students">
      <div className="row d-flex justify-content-center">
        <div className="col-sm-11 col-md-10 col-lg-8 col-xl-6">
          <h3 className="text-center px-2 mb-3">Show Students for Mentor</h3>
          <form onSubmit={handleSubmit}>
            <div className="form-group mb-2">
              <label htmlFor="mentorSelect" className="mb-2 select-mentor">
                Select Mentor
              </label>
              <select
                id="mentorSelect"
                className="form-select"
                aria-label="Default select example"
                onChange={(e) => setSelectedMentor(e.target.value)}
                required
              >
                <option value="">Select Mentor</option>
                {mentors.map((mentor) => (
                  <option key={mentor._id} value={mentor._id}>
                    {mentor.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="d-flex justify-content-center">
              <button type="submit" className="btn btn-primary mt-3">
                Show Students
              </button>
            </div>
          </form>

          <div className="mx-auto">
            <ul className="list-group mt-3">
              {students.map((student) => (
                <li key={student._id} className="list-group-item w-100">
                  {student.name}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowStudents;
