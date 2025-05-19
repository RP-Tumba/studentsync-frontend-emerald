const DeleteModal = ({ onClose, onConfirm, message }) => {
  return (
    <div className="modal-overlay flex items-center fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white py-4 px-4 rounded shadow-lg w-80">
        <p className="text-lg font-semibold py-2 ">{message}</p>
        <hr />
        <div className="d-flex justify-end gap-2 py-2">
          <button onClick={onClose} className="close-btn bg-red rounded">
            Cancel
          </button>
          <button onClick={onConfirm} className="confirm-btn  bg-green rounded">
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
