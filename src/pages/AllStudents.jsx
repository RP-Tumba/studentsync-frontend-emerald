import { Delete, Edit, Search } from '@mui/icons-material';
import useStudentStore from '../store/studentStore';

import { useEffect, useState } from 'react';
import AddStudentModal from './AddStudent';

import { Link } from 'react-router-dom';

const AllStudents = () => {
  const { students, fetchStudents, loading } = useStudentStore();
  const [showAddModal, setShowAddModal] = useState(false);

  useEffect(() => {
    fetchStudents();
  }, []);

  if (loading)
    return (
      <div className="">
        <div className="loading-container">
          <div className="loading"></div>
          <p>loading...</p>
        </div>
      </div>
    );

  return (
    <div className="container">
      {showAddModal && <AddStudentModal onClose={() => setShowAddModal(false)} />}

      <div className="student-list">
        <div className="flex justify-between items-center student-list-header">
          <h1 className="text-green text-md">All Students</h1>
          <div className="flex items-center gap-2">
            <div className="flex items-center justify-center fix-search px-2">
              <div>
                <Search className="icon" />
              </div>
              <div>
                <input type="text" placeholder="Search..." name="term" />
              </div>
            </div>
            <div className="addStudent">
              <Link to="/create-student" className="fix-btn px-2 py-2 rounded bg-green text-white">
                Add Student
              </Link>
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
                      <button className="btn-action delete" id="delete">
                        <Delete />
                      </button>

                      <Link to={`/students/${student.id}`} id="edit">
                        <Edit />
                      </Link>
                    </div>
                  </td>
                </tr>
              ))}

              {!loading && students.length === 0 && (
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
