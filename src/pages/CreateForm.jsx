

// import logimage from '..assets/log-swait-image.png'
const CreateForm =()=>{
    return(
        <div>
<div className="form-container" >
    <div className="form-header">
        <div className="form-up-header">
        {/* <img src={logimage}/> */}
        <h1 className="text-gray">STUDENTSYNC</h1>

        </div>
        <h3>Add new student</h3>

    </div>
    <div className="form-inputs">
        <div className="form-inputs-up">
            <label htmlFor="firstaname">First Name</label>
            <br />
            <input type="text"  name='firstname' className="form-inputs-style"/><br />


            <label htmlFor="date-of-brith">Data Of Brith</label><br />
            <input type="text" name="date-of-brith"/><br />

            <label htmlFor="last-name">Last Name</label><br />
            <input type="text" name='last-name' /><br />

            <label htmlFor="student-id">Student ID</label> <br/>
            <input type="text" name='student-id'/><br />

            <label htmlFor="email">Email</label><br />
            <input type="email"  name='email'/><br />

            <label htmlFor="contact-number">Contact Number</label><br />
            <input type="text" name="contact-number"/><br />
            <label htmlFor="enrollement-date">Unrollment date</label><br />
            <input type="text" name="enrollement-data" />

            



        </div>
    </div>

</div>
        </div>
    )
}
export default CreateForm