import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useStudentStore from '../store/studentStore';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddStudentModal = ({ onClose }) => {
  const navigate = useNavigate();
  const { addStudent } = useStudentStore();
  const { register, handleSubmit, reset } = useForm();
  const [loading, setLoading] = useState(false);

  const onSubmit = async data => {
    setLoading(true);
    try {
      await addStudent(data);
      toast.success('Student added successfully!');
      reset();
      onClose();
    } catch (e) {
      toast.error('Failed to add student.');
      console.log(e.message);
    } finally {
      setLoading(false);
    }
  };

  const handleCancel = () => {
    navigate('/students');
  };

  return (
    <div className="modal-overlay">
      <ToastContainer />
      <form className="modal-form" onSubmit={handleSubmit(onSubmit)}>
        <button className="close-button" onClick={handleCancel} type="button">
          &times;
        </button>
        <h2 className="modal-title">STUDENTSYNC</h2>
        <p className="modal-subtitle">Add new student</p>

        <div className="form-row">
          <div className="form-group">
            <label>First Name</label>
            <input type="text" {...register('firstName')} required />
          </div>
          <div className="form-group">
            <label>Last Name</label>
            <input type="text" {...register('lastName')} required />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Date Of Birth</label>
            <input type="date" {...register('dateOfBirth')} required />
          </div>
          <div className="form-group">
            <label>Student ID</label>
            <input type="text" {...register('studentId')} required />
          </div>
        </div>

        <div className="form-group">
          <label>Email</label>
          <input type="email" {...register('email')} required />
        </div>
        <div className="form-group">
          <label>Contact Number</label>
          <input type="number" {...register('contactNumber')} required />
        </div>
        <div className="form-group">
          <label>Enrollment Date</label>
          <input type="date" {...register('enrollmentDate')} required />
        </div>

        <div className="form-buttons">
          <button type="submit" disabled={loading} className="btn green">
            {loading ? 'Adding...' : 'Add'}
          </button>
          <button type="button" onClick={handleCancel} className="btn white">
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddStudentModal;
