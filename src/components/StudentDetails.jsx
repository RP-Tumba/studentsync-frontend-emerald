import React, { useState, useEffect } from "react";
import image from "../assets/image.jpeg";
import { studentService } from "../lib/api.js";

const StudentDetails = () => {
  const [student, setStudent] = useState(null);
  const [isEditable, setIsEditable] = useState(false);
  const [students, setStudents] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await studentService.getStudentById(
          "6ffd453b-3673-4a7c-b20b-49a900145030",
        );
        setStudent(response.data);

        const manyStudents = await studentService.getAllStudents();
        setStudents(manyStudents.data);
      } catch (err) {
        console.error("Error:", err);
      }
    };

    fetchData();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setStudent((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await studentService.updateStudent(student.id, student);
  };

  const toggleEdit = async () => {
    if (isEditable) {
      // Reset data when canceling edit
      try {
        const response = await studentService.getStudentById(
          "6ffd453b-3673-4a7c-b20b-49a900145030",
        );
        setStudent(response.data);
      } catch (err) {
        console.error("Error resetting data:", err);
      }
    }
    setIsEditable((prev) => !prev);
  };

  const currentTime = new Date().toLocaleDateString("en-US", {
    weekday: "short",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  if (!student) {
    return (
      <div className="loading">
        <p>
          The updating info is Loading... 
        </p>
        <h2>Available student</h2>
        {students?.map((studn, index) => (
          <p key={index}>
            student {studn.id} {studn.first_name}
          </p>
        ))}
      </div>
    );
  }

  return (
    <>
      <div className="head">
        <div className="left-head">
          <h3>Welcome</h3>
          <p>{currentTime}</p>
        </div>
        <div className="right-head">
          <input type="text" placeholder="Search" />
        </div>
      </div>

      <div className="main-update">
        <div className="head-color"></div>
        <div className="student-update-main">
          <div className="profile-student">
            <div className="inside-profile">
              <img src={image} alt="student" />
              <div className="inside2">
                <h3>Name: {student.first_name}</h3>
                <p>Email: {student.email}</p>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="all_fieldupdate">
            {isEditable ? (
              <button id="save-btn" className="edit-btn" type="submit">
                Save
              </button>
            ) : (
              <button
                className="updating-btn"
                id="edit-btn"
                type="button"
                onClick={toggleEdit}
              >
                Edit
              </button>
            )}

            <div className="first-name">
              <label>First Name</label>
              <input
                name="first_name"
                type="text"
                value={student.first_name}
                onChange={handleInputChange}
                readOnly={!isEditable}
              />
            </div>

            <div className="Last-name">
              <label>Last Name</label>
              <input
                name="last_name"
                type="text"
                value={student.last_name}
                onChange={handleInputChange}
                readOnly={!isEditable}
              />
            </div>

            <div className="Student-ID">
              <label>Student ID</label>
              <input name="id" type="text" value={student.id} readOnly />
            </div>

            <div className="Email">
              <label>Email</label>
              <input
                name="email"
                type="text"
                value={student.email}
                onChange={handleInputChange}
                readOnly={!isEditable}
              />
            </div>

            <div className="Date-Of-Birth">
              <label>Date Of Birth</label>
              <input
                name="date_of_birth"
                type="text"
                value={student.date_of_birth}
                onChange={handleInputChange}
                readOnly={!isEditable}
              />
            </div>

            <div className="Contact-Number">
              <label>Contact Number</label>
              <input
                name="contact_number"
                type="text"
                value={student.contact_number}
                onChange={handleInputChange}
                readOnly={!isEditable}
              />
            </div>

            <div className="enrollement-date">
              <label>Enrollment Date</label>
              <input
                name="enrollment_date"
                type="text"
                value={student.enrollment_date}
                onChange={handleInputChange}
                readOnly={!isEditable}
              />
            </div>

            <div className="update-last">
              <h5>My Email Address</h5>
              <div className="last-profile">
                <img src={image} alt="email profile" />
                <div className="inside3">
                  <h4>{student.email || "Loading..."}</h4>
                  <p>2 months ago</p>
                </div>
              </div>
            </div>

            <div className="update-btn">
              <button className="update-back" type="button">
                Go Back
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default StudentDetails;
