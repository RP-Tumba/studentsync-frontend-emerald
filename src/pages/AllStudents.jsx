import { Delete, Edit, Search } from '@mui/icons-material';
import useStudentStore from '../store/studentStore';
import { useEffect, useState } from 'react';
import AddStudentModal from './AddStudent';

const AllStudents = () => {
  const { students, fetchStudents } = useStudentStore();
  const [showAddModal, setShowAddModal] = useState(false);

  useEffect(() => {
    fetchStudents();
  }, []);

  const closeModal = () => {
    setShowAddModal(prev => !prev);
  };
  return (
    <div className="container">
      {showAddModal && <AddStudentModal onClose={closeModal} />}

      <div className="student-list">
        <div className="flex justify-between items-center student-list-header">
          <h1 className="text-green text-md">All Students</h1>
          <div className="flex items-center">
            <div className="search items-center">
              <label htmlFor="search-input">
                <Search className="icon" />
              </label>
              <div>
                <input type="text" placeholder="Search..." name="term" id="search-input" />
              </div>
            </div>
            <div className="addStudent">
              <button onClick={() => setShowAddModal(true)}>+ Add Student</button>
            </div>
          </div>
        </div>

        <div className="student-table-wrapper">
          <table cellPadding={0} cellSpacing={0} className="student-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Full Name</th>
                <th>Student ID</th>
                <th>Enrollment Date</th>
                <th>Date of Birth</th>
                <th>Contact</th>
                <th>Email</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {students.map(student => (
                <tr key={student.id}>
                  <td>{student.id}</td>
                  <td>
                    {student.firstName} {student.lastName}
                  </td>
                  <td>{student.studentId}</td>
                  <td>{new Date(student.enrollmentDate).toDateString()}</td>
                  <td>{new Date(student.dateOfBirth).toDateString()}</td>
                  <td>{student.contactNumber}</td>
                  <td>{student.email}</td>
                  <td>
                    <div className="action-buttons flex">
                      <button className="btn-action delete">
                        <Delete />
                      </button>
                      <button className="btn-action edit">
                        <Edit />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}

              {students.length === 0 && (
                <tr>
                  <td colSpan="8" style={{ textAlign: 'center' }}>
                    No students found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllStudents;
