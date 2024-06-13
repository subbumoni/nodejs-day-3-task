import React, { useState } from "react";
import axios from "axios";

const ChangeMentor = ({ mentors, students, fetchMentors, fetchStudents }) => {
  const [selectedStudent, setSelectedStudent] = useState("");
  const [newMentor, setNewMentor] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        `https://guvi-nodejs-day-3-task-be.onrender.com/api/students/${selectedStudent}/mentor`,
        { mentorId: newMentor }
      );
      alert(response.data.message);
      // Reset the select menus to default values
      setSelectedStudent("");
      setNewMentor("");
      // Fetch updated data
      fetchMentors();
      fetchStudents();
    } catch (error) {
      console.error("Error changing mentor:", error);
    }
  };

  return (
    <div className="container py-4 mt-4 change-mentor">
      <div className="row d-flex justify-content-center">
        <div className="col-sm-11 col-md-10 col-lg-8 col-xl-6">
          <h2 className="text-center mb-3">Change Mentor for Student</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group mb-2">
              <label htmlFor="studentSelect" className="mb-2 select-student">
                Select Student
              </label>
              <select
                id="studentSelect"
                className="form-select"
                aria-label="Default select example"
                value={selectedStudent}
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
            <div className="form-group">
              <label htmlFor="mentorSelect" className="mb-2 select-mentor">
                Select Mentor
              </label>
              <select
                id="mentorSelect"
                className="form-select"
                aria-label="Default select example"
                value={newMentor}
                onChange={(e) => setNewMentor(e.target.value)}
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
                Change Mentor
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ChangeMentor;
