import React, { useState, useEffect } from 'react';
import image from '../assets/image.jpeg';
import { studentService } from '../lib/api.js';
import { PiEnvelopeSimpleOpen } from 'react-icons/pi';
import { useParams } from 'react-router-dom';

import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';

const StudentDetails = () => {
  const { id } = useParams();
  const [student, setStudent] = useState(null);
  const [isEditable, setIsEditable] = useState(false);
  const [students, setStudents] = useState(null);

  useEffect(() => {
    
    const fetchData = async () => {
     
      try {
         
        const response = await studentService.getStudentById(id);
        setStudent(response.data);

        const manyStudents = await studentService.getAllStudents();
        setStudents(manyStudents.data);
      } catch (err) {
        console.error('Error:', err);
      }
    };

    fetchData();
  }, []);

  const handleInputChange = e => {
    const { name, value } = e.target;

    setStudent(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  console.log(student);
  const handleSubmit = async e => {
    e.preventDefault();
    await studentService.updateStudent(student.id, student);
    toggleEdit();
  };

  const toggleEdit = () => {
    setIsEditable(prev => !prev);
  };

  const currentTime = new Date().toLocaleDateString('en-US', {
    weekday: 'short',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  if (!student) {
    return (
      <div className="loading">
        <p>The updating info is Loading... available ({students?.length || 0} students)</p>
        <h2>Available student</h2>
        {students?.map((studn, index) => (
          <React.Fragment key={studn.id}>
            <a href={`/StudentDetails/${studn.id}`}>
              student {studn.id} {studn.first_name}
            </a>
            <br />
          </React.Fragment>
        ))}

      </div>
    );
  }
  console.log(student);

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
                <h3>{student.firstName}</h3>
                <p>{student.email}</p>
              </div>
            </div>

            <div>
              <button
                className={`updating-btn ${isEditable && 'bg-red'}`}
                id="edit-btn"
                type="button"
                onClick={toggleEdit}
              >
                {isEditable ? 'Cancel' : 'Edit'}
              </button>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="all_fieldupdate">
            <div className="first-name">
              <label>First Name</label>
              <input
                name="firstName"
                type="text"
                value={student.firstName}
                onChange={handleInputChange}
                readOnly={!isEditable}
              />
            </div>

            <div className="Last-name">
              <label>Last Name</label>
              <input
                name="lastName"
                type="text"
                value={student.lastName}
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
                name="dateOfBirth"
                type="text"
                value={student.dateOfBirth}
                onChange={handleInputChange}
                readOnly={!isEditable}
              />
            </div>

            <div className="Contact-Number">
              <label>Contact Number</label>
              <input
                name="contactNumber"
                type="text"
                value={student.contactNumber}
                onChange={handleInputChange}
                readOnly={!isEditable}
              />
            </div>

            <div className="enrollement-date">
              <label>Enrollment Date</label>
              <input
                name="enrollmentDate"
                type="text"
                value={student.enrollmentDate}
                onChange={handleInputChange}
                readOnly={!isEditable}
              />
            </div>

            <div className="text-right">
              {isEditable && (
                <button className="updating-btn" id="edit-btn" type="submit" onClick={handleSubmit }>
                  Save
                </button>
              )}
            </div>
          </form>

          <div className="update-last">
            <h5>My Email Address</h5>
            <div className="last-profile">
              <div className="update-last-logo">
                <PiEnvelopeSimpleOpen size={20} />
              </div>
              <div className="inside3">
                <h4>{student.email || 'Loading...'}</h4>
                <p className="text-sm">2 months ago</p>
              </div>
            </div>
          </div>

          <div className="update-btn">
            <button className="update-back" type="button">
              <span className="back-arrow">
                <KeyboardBackspaceIcon />
              </span>
              <span>Go back</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default StudentDetails;
