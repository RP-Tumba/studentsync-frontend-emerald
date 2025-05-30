import { Delete, Edit, Search } from '@mui/icons-material';
import useStudentStore from '../store/studentStore';
import { studentService } from '../lib/api';
import { useEffect, useState } from 'react';
import AddStudentModal from './AddStudent';
import { ToastContainer } from 'react-toastify';
import DeleteModal from '../components/DeleteModal';

import { Link } from 'react-router-dom';
const AllStudents = () => {
  const { students, fetchStudents, loading, error } = useStudentStore();
  const [showAddModal, setShowAddModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [id, setId] = useState(null);
  useEffect(() => {
    fetchStudents();
  }, []);

  const handleDelete = id => {
    setId(id);
    setShowDeleteModal(true);
  };
  const confirmDelete = async () => {
    try {
      const data = await studentService.deleteStudent(id);

      if (data) fetchStudents();
      setShowDeleteModal(false);
    } catch {
      console.log(error);
    }
  };
  const cancelDelete = () => {
    setShowDeleteModal(false);
    setId(null);
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="container">
      {showAddModal && <AddStudentModal onClose={() => setShowAddModal(false)} />}
      {showDeleteModal && (
        <DeleteModal
          onClose={cancelDelete}
          onConfirm={confirmDelete}
          message="Are you sure you want to delete this student?"
        />
      )}
      <ToastContainer />
      <div className="student-list">
        <div className="flex justify-between items-center student-list-header">
          <h1 className="text-green text-md">All Students</h1>
          <div className="flex items-center gap-2">
            <div className="d-flex items-center justify-center fix-search px-2">
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
                <th>#</th>
                <th>Full Name</th>
                <th>Student ID</th>
                <th>Enrollment Date</th>
                <th>Date Birth</th>
                <th>Contact</th>
                <th>Email</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student, index) => (
                <tr key={student.id}>
                  <td>{index + 1}</td>
                  <td>
                    {student.firstName} {student.lastName}
                  </td>
                  <td>{student.studentId}</td>
                  <td>{new Date(student.enrollmentDate).toDateString()}</td>
                  <td>{new Date(student.dateOfBirth).toDateString()}</td>
                  <td>{student.contactNumber}</td>
                  <td>{student.email}</td>
                  <td>
                    <div className="action flex">
                      <button onClick={() => handleDelete(student.studentId)} id="delete">
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
