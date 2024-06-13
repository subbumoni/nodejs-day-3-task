import React, { useState } from "react";
import axios from "axios";

const AssignStudents = ({ mentors, students, fetchStudents }) => {
  const [selectedMentor, setSelectedMentor] = useState("");
  const [selectedStudents, setSelectedStudents] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `https://guvi-nodejs-day-3-task-be.onrender.com/api/mentors/${selectedMentor}/students`,
        {
          studentIds: selectedStudents,
        }
      );
      alert(response.data.message); // Show success message
      setSelectedStudents([]);
      fetchStudents();
    } catch (error) {
      console.error("Error assigning students:", error);
    }
  };

  const handleStudentChange = (e) => {
    const value = e.target.value;
    setSelectedStudents((prev) =>
      e.target.checked ? [...prev, value] : prev.filter((id) => id !== value)
    );
  };

  return (
    <div className="container py-4 mt-4 assign-students">
      <div className="row d-flex justify-content-center">
        <div className="col-sm-11 col-md-10 col-lg-8 col-xl-6">
          <h2 className="text-center mb-3">Assign Students to Mentor</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group mb-2 mt-3">
              <label htmlFor="mentorSelect" className="mb-2 select-mentor">
                Select Mentor:
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
            <div className="form-group mb-2 mt-3">
              <label className="mb-2 available-students">
                Available Students:
              </label>
              {students
                .filter((student) => !student.mentor)
                .map((student) => (
                  <div key={student._id} className="form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id={`student-${student._id}`}
                      value={student._id}
                      onChange={handleStudentChange}
                    />
                    <label
                      className="form-check-label"
                      htmlFor={`student-${student._id}`}
                    >
                      {student.name}
                    </label>
                  </div>
                ))}
            </div>
            <div className="d-flex justify-content-center">
              <button type="submit" className="btn btn-primary mt-3">
                Assign Students
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AssignStudents;
