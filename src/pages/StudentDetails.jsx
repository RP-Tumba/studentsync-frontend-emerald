import { useState, useEffect } from 'react';
import { PiEnvelopeSimpleOpen } from 'react-icons/pi';
import { useNavigate, useParams } from 'react-router-dom';
import useStudentStore from '../store/studentStore';
import { useForm } from 'react-hook-form';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';

const StudentDetails = () => {
  const { id } = useParams();
  const [isEditable, setIsEditable] = useState(false);
  const [message, setMessage] = useState(false);
  const { student: studentDetails, updateStudent, getStudent, loading, error } = useStudentStore();
  const navigate = useNavigate();

  const { register, handleSubmit, reset, formState } = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
      studentId: '',
      email: '',
      dateOfBirth: '',
      contactNumber: '',
      enrollmentDate: '',
    },
  });

  const { isDirty } = formState;

  useEffect(() => {
    getStudent(id);
  }, [getStudent, id]);

  useEffect(() => {
    if (studentDetails && Object.keys(studentDetails).length > 0) {
      reset({
        firstName: studentDetails.firstName || '',
        lastName: studentDetails.lastName || '',
        studentId: studentDetails.studentId || '',
        email: studentDetails.email || '',
        dateOfBirth: studentDetails.dateOfBirth || '',
        contactNumber: studentDetails.contactNumber || '',
        enrollmentDate: studentDetails.enrollmentDate || '',
      });
    }
  }, [studentDetails, reset]);

  const toggleEdit = () => {
    if (isEditable) {
      reset({
        firstName: studentDetails.firstName || '',
        lastName: studentDetails.lastName || '',
        studentId: studentDetails.studentId || '',
        email: studentDetails.email || '',
        dateOfBirth: studentDetails.dateOfBirth || '',
        contactNumber: studentDetails.contactNumber || '',
        enrollmentDate: studentDetails.enrollmentDate || '',
      });
    }
    setIsEditable(prev => !prev);
  };

  const onSubmit = async data => {
    if (!isDirty) {
      setMessage(true);
      setTimeout(() => setMessage(false), 3000);
      return;
    }
    const { firstName, lastName, email, contactNumber } = data;

    await updateStudent(id, { firstName, lastName, email, contactNumber });
    setIsEditable(false);
    navigate('/students');
  };
  const goBack = () => {
    navigate('/students');
  };

  if (loading)
    return (
      <>
        <div className="loading-container">
          <div className="loading"></div>
          <p>loading...</p>
        </div>
      </>
    );
  if (error)
    return (
      <>
        <div className="loading-container">
          <p className="error-message">{error}</p>
        </div>
      </>
    );

  return (
    <>
      <div className="main-update">
        <div className="head-color"></div>
        <div className="student-update-main ">
          <div className="profile-student flex ">
            <div className="inside-profile items-center">
              <img
                src={`https://ui-avatars.com/api/?name=${studentDetails?.firstName}&background=83C727&color=fff`}
                alt="student"
              />
              <div className="inside2">
                <h3>{studentDetails?.firstName || ''}</h3>
                <p>{studentDetails?.email || ''}</p>
              </div>
            </div>

            <div className="py-2">
              <button
                className={`updating-btn ${isEditable ? 'bg-red' : ''}`}
                id="edit-btn"
                type="button"
                onClick={toggleEdit}
              >
                {isEditable ? 'Cancel' : 'Edit'}
              </button>
            </div>
          </div>
          {message && <div className="no-change-msg">No changes were made.</div>}

          <form onSubmit={handleSubmit(onSubmit)} className="all_fieldupdate">
            <div>
              <label>First Name</label>
              <input type="text" {...register('firstName')} readOnly={!isEditable} />
            </div>

            <div>
              <label>Last Name</label>
              <input type="text" {...register('lastName')} readOnly={!isEditable} />
            </div>

            <div>
              <label>Student ID</label>
              <input type="text" {...register('studentId')} readOnly />
            </div>

            <div>
              <label>Email</label>
              <input type="email" {...register('email')} readOnly={!isEditable} />
            </div>

            <div>
              <label>Date Of Birth</label>
              <input type="text" {...register('dateOfBirth')} readOnly />
            </div>

            <div>
              <label>Contact Number</label>
              <input type="text" {...register('contactNumber')} readOnly={!isEditable} />
            </div>

            <div>
              <label>Enrollment Date</label>
              <input type="text" {...register('enrollmentDate')} readOnly />
            </div>

            <div className="text-right">
              {isEditable && (
                <button className="updating-btn" id="edit-btn" type="submit">
                  Save
                </button>
              )}
            </div>
          </form>

          <div className="update-last pt">
            <h5>My Email Address</h5>
            <div className="last-profile py-2">
              <div className="update-last-logo">
                <PiEnvelopeSimpleOpen size={20} />
              </div>
              <div>
                <h4>{studentDetails?.email || 'Loading...'}</h4>
                <p className="text-sm">2 months ago</p>
              </div>
            </div>
          </div>

          <div className="update-btn">
            <button className="update-back" type="button" onClick={goBack}>
              <span className="back-arrow">
                <KeyboardBackspaceIcon />
              </span>
              <span>Go back</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default StudentDetails;
