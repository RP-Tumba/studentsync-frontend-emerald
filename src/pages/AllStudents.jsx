import { FaSearch, FaRegTrashAlt, FaEdit } from 'react-icons/fa';
import useStudentStore from '../store/studentStore';
import { useEffect } from 'react';
const AllStudents = () => {
  const { students, fetchStudents, loading, error } = useStudentStore();

  useEffect(() => {
    fetchStudents();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="container">
      <div className="flex justify-between items-center">
        <h1 className="text-green text-md">All students</h1>
        <div className="flex items-center">
          <div className="search  items-center">
            <label htmlFor="search-input">
              <FaSearch size={20} className="icon" />
            </label>
            <div>
              <input type="text" placeholder="Search...." name="term" id="search-input" />
            </div>
          </div>
          <div className="addStudent">
            <button>Add Student</button>
          </div>
        </div>
      </div>

      <div className="responsive-table">
        <table cellPadding={0} cellSpacing={0}>
          <thead>
            <tr>
              <th>Username</th>
              <th>Student ID</th>
              <th>Enrollment Date</th>
              <th>Date Birth</th>
              <th>Contact Number</th>
              <th>Email</th>
              <th>Action</th>
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
                  <div className="action">
                    <button id="delete">
                      <FaRegTrashAlt />
                    </button>
                    <button id="edit">
                      <FaEdit />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default AllStudents;
