import image from "../assets/image.jpeg";
function StudentDetails() {
  const date = new Date();
  const currentTime = date.toLocaleDateString("en-US", {
    weekday: "short",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <>
      <div className="head">
        <div className="left-head">
          <h3>Welcome</h3>
          <p>{currentTime}</p>
        </div>
        <div className="right-head">
          <input type="text" placeholder="search" />
        </div>
      </div>

      <div className="main-update">
        <div className="head-color"></div>
        <div className="student-update-main">
          <div className="profile-student">
            <div className="inside-profile">
              <img src={image} alt="" />
              <div className="inside2">
                <h3>alessio simone</h3>
                <p>simonealession@gmail.com</p>
              </div>
            </div>
            <div className="edit-btn">
              <button className="updating-btn">Edit</button>
            </div>
          </div>

          <form className="all_fieldupdate">
            <div className="first-name">
              <label>First name</label>
              <input type="text" placeholder="First name" />
            </div>

            <div className="Last-name">
              <label>Last name</label>
              <input type="text" placeholder="Last name" />
            </div>

            <div className="Student-ID">
              <label>Student ID</label>
              <input type="text" placeholder="Student id" />
            </div>

            <div className="Email">
              <label>Email</label>
              <input type="text" placeholder="Email" />
            </div>

            <div className="Date-Of-Birth">
              <label>Date Of Birth</label>
              <input type="text" placeholder="Date Of Birth" />
            </div>

            <div className="Contact-Number">
              <label>Contact Number</label>
              <input type="text" placeholder="+250 783 738 637" />
            </div>

            <div className="enrollement-date">
              <label>Enrollement Date</label>
              <input type="text" placeholder="Enrollement-Date" />
            </div>
          </form>

          <div className="update-last">
            <h5>My email Address</h5>
            <div className="last-profile">
              <img src={image} alt="" />
              <div className="inside3">
                <h4>simonealession@gmail.com</h4>
                <p>2 month ago</p>
              </div>
            </div>
            <button className="update-back">Go back</button>
          </div>
        </div>
      </div>
    </>
  );
}
export default StudentDetails;
