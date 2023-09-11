import { Data } from '../../interfaces/Data';
import './Modal.css';

export default function Modal({
  editingData,
  setEditingData,
  handleModalClose,
  handleSaveData,
}: {
  editingData: Data | null;
  setEditingData: React.Dispatch<React.SetStateAction<Data | null>>;
  handleModalClose: () => void;
  handleSaveData: (updatedData: Data | null) => void;
}) {
  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Edit Data</h2>
        {/* Render input fields for editing the data */}
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={editingData?.name}
            onChange={(e) =>
              setEditingData((prevState) => {
                if (prevState)
                  return {
                    ...prevState,
                    name: e.target.value,
                  };
                return null;
              })
            }
          />
        </div>
        <div>
          <label>Age:</label>
          <input
            type="number"
            value={editingData?.age || ''}
            onChange={(e) =>
              setEditingData((prevState) => {
                if (prevState) {
                  return {
                    ...prevState,
                    age: parseInt(e.target.value),
                  };
                }
                return null;
              })
            }
          />
        </div>
        <div className="modal-actions">
          <button onClick={handleModalClose}>Cancel</button>
          <button onClick={() => handleSaveData(editingData)}>Save</button>
        </div>
      </div>
    </div>
  );
}
