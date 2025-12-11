const Modal = ({ title, children, open, onClose }) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center p-4 z-50">
      <div className="bg-base-100 rounded-xl shadow-xl w-full max-w-lg p-6 animate__animated animate__fadeIn">
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-bold text-lg">{title}</h3>
          <button className="btn btn-sm btn-circle" onClick={onClose}>
            ✕
          </button>
        </div>

        <div>{children}</div>
      </div>
    </div>
  );
};

export default Modal;
