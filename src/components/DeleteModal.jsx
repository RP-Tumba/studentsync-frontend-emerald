const DeleteModal = ({ onClose, onConfirm, message }) => {
  return (
    <div className="modal-backdrop fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded shadow-lg w-80">
        <h2 className="text-lg font-semibold mb-4">{message}</h2>
        <div className="flex justify-end gap-2">
          <button onClick={onClose} className="bg-gray-300 px-4 py-2 rounded">
            Cancel
          </button>
          <button onClick={onConfirm} className="bg-red-500 text-white px-4 py-2 rounded">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
