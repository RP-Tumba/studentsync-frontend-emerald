// import logimage from '..assets/log-swait-image.png'

import { useForm } from 'react-hook-form';
import useStudentStore from '../store/studentStore';
const CreateForm = () => {
  const { error, addStudent } = useStudentStore();
  const { register, handleSubmit } = useForm();
  const onSubmit = async data => {
    await addStudent(data);
  };

  return (
    <div>
      {error}
      <form className="form-container" onSubmit={handleSubmit(onSubmit)}>
        <div className="form-header">
          <div className="form-up-header">
            {/* <img src={logimage}/> */}
            <h1 className="text-gray">STUDENTSYNC</h1>
          </div>
          <br />
          <h3>Add new student</h3>
        </div>
        <div className="form-inputs">
          <div className="form-inputs-up">
            <div>
              <label>First Name</label>
              <br />
              <input type="text" {...register('firstName')} />
              <br />
            </div>

            <div>
              <label>Data Of Brith</label>
              <br />
              <input type="date" {...register('dateOfBirth')} />
              <br />
            </div>
            <div>
              <label>Last Name</label>
              <br />
              <input type="text" {...register('lastName')} />
              <br />
            </div>
            <div>
              <label>Student ID</label> <br />
              <input type="text" {...register('studentId')} />
              <br />
            </div>
          </div>
          <div>
            <label>Email</label>
            <br />
            <input type="email" {...register('email')} className="form-inputs-large" />
            <br />
          </div>
          <div>
            <label>Contact Number</label>
            <br />
            <input type="number" {...register('contactNumber')} className=" form-inputs-large" />
            <br />
          </div>
          <div>
            <label>enrollment date</label>
            <br />
            <input type="date" {...register('enrollmentDate')} className="form-inputs-large" />
          </div>
        </div>
        <div className="form-btn">
          <div>
            <button type="submit" className="form-btn-style-green">
              Add
            </button>
          </div>
          <div>
            <button className="form-btn-style-white">Cancel</button>
          </div>
        </div>
      </form>
    </div>
  );
};
export default CreateForm;
