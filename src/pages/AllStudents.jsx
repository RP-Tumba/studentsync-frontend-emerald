import { FaSearch } from 'react-icons/fa';
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
    </div>
  );
};
export default AllStudents;
