import { FaSearch, FaRegTrashAlt, FaEdit } from 'react-icons/fa';

const AllStudents = () => {
  return (
    <div className="container">
      <div className="flex justify-between items-center">
        <h1 className="text-green text-md">All students</h1>
        <div className="flex items-center">
          <div className="search  items-center">
            <label for="search-input">
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
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Clark Gill</td>
              <td>123</td>
              <td>{new Date().toDateString()}</td>
              <td>Enrolled</td>
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

            <tr>
              <td>Clark Gill</td>
              <td>123</td>
              <td>{new Date().toDateString()}</td>
              <td>Enrolled</td>
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

            <tr>
              <td>Clark Gill</td>
              <td>123</td>
              <td>{new Date().toDateString()}</td>
              <td>Enrolled</td>
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

            <tr>
              <td>Clark Gill</td>
              <td>123</td>
              <td>{new Date().toDateString()}</td>
              <td>Enrolled</td>
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

            <tr>
              <td>Clark Gill</td>
              <td>123</td>
              <td>{new Date().toDateString()}</td>
              <td>Enrolled</td>
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

            <tr>
              <td>Clark Gill</td>
              <td>123</td>
              <td>{new Date().toDateString()}</td>
              <td>Enrolled</td>
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

            <tr>
              <td>Clark Gill</td>
              <td>123</td>
              <td>{new Date().toDateString()}</td>
              <td>Enrolled</td>
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
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default AllStudents;
