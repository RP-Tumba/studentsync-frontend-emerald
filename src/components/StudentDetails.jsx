import React, { Component } from "react";
import image from "../assets/image.jpeg";

class StudentDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      student: null,
      isEditable: false,
    };
  }

  componentDidMount() {
    fetch("http://localhost:5000/api/v1/students/631")
      .then((res) => res.json())
      .then((data) => this.setState({ student: data.data }))
      .catch((err) => console.error("Error:", err));
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState((prevState) => ({
      student: {
        ...prevState.student,
        [name]: value,
      },
    }));
  };

  toggleEdit = () => {
    this.setState((prevState) => ({
      isEditable: !prevState.isEditable,
    }));
  };

  render() {
    const { student, isEditable } = this.state;
    const currentTime = new Date().toLocaleDateString("en-US", {
      weekday: "short",
      year: "numeric",
      month: "long",
      day: "numeric",
    });

    if (!student) {
      return <div>The updating info is Loading...</div>; // To avoid issues when student data is still being fetched
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
              <div className="edit-btn">
                <button className="updating-btn" onClick={this.toggleEdit}>
                  {isEditable ? "Cancel Edit" : "Edit"}
                </button>
              </div>
            </div>

            <form className="all_fieldupdate">
              <div className="first-name">
                <label>First Name</label>
                <input
                  name="first_name"
                  type="text"
                  value={student.first_name}
                  onChange={this.handleInputChange}
                  readOnly={!isEditable}
                />
              </div>

              <div className="Last-name">
                <label>Last Name</label>
                <input
                  name="last_name"
                  type="text"
                  value={student.last_name}
                  onChange={this.handleInputChange}
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
                  onChange={this.handleInputChange}
                  readOnly={!isEditable}
                />
              </div>

              <div className="Date-Of-Birth">
                <label>Date Of Birth</label>
                <input
                  name="dob"
                  type="text"
                  value={student.dob}
                  onChange={this.handleInputChange}
                  readOnly={!isEditable}
                />
              </div>

              <div className="Contact-Number">
                <label>Contact Number</label>
                <input
                  name="contact"
                  type="text"
                  value={student.contact}
                  onChange={this.handleInputChange}
                  readOnly={!isEditable}
                />
              </div>

              <div className="enrollement-date">
                <label>Enrollment Date</label>
                <input
                  name="enrollment_date"
                  type="text"
                  value={student.enrollment_date}
                  onChange={this.handleInputChange}
                  readOnly={!isEditable}
                />
              </div>
            </form>

            <div className="update-last">
              <h5>My Email Address</h5>
              <div className="last-profile">
                <img src={image} alt="email profile" />
                <div className="inside3">
                  <h4>{student?.email || "Loading..."}</h4>
                  <p>2 months ago</p>
                </div>
              </div>
              <button className="update-back">Go Back</button>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default StudentDetails;
