import React, { useState } from 'react';
import { Data } from '../../interfaces/Data';
import './Table.css';
import Row from '../../components/Row/Row';
import Modal from '../../components/Modal/Modal';

function Table(
  props: React.PropsWithChildren<{
    data: Data[];
    viewData: string[];
    deleteData?: (id: string) => void;
    updateData?: (id: string) => void;
  }>
) {
  const [data, setData] = useState<Data[]>(props.data);
  const [viewData] = useState<string[]>(props.viewData);
  const [editingData, setEditingData] = useState<Data | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const updateData = (id: string) => {
    const itemToEdit = data.find((item) => item._id === id);
    if (itemToEdit) {
      setEditingData(itemToEdit);
      setIsModalOpen(true);
    }
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleSaveData = (updatedData: Data | null) => {
    // Update the data in your state or make an API call to update the data
    // Here, we will update the data in the component state
    const updatedDataArray = data.map((item) =>
      item._id === updatedData?._id ? updatedData : item
    );
    setData(updatedDataArray);
    setIsModalOpen(false);
  };

  const deleteData = (id: string) => {
    console.log('deleteData', id);
    // Delete the data from your state or make an API call to delete the data
  };

  return (
    <div className="grid-table">
      <div className="grid-table-header">
        {viewData.map((item) => (
          <div className="grid-table-header-cell" key={item}>
            {item}
          </div>
        ))}
        <div className="grid-table-header-cell">Actions</div>
      </div>
      {data.map((item) => (
        <Row
          key={item._id} // Add unique key prop here
          item={item}
          viewData={viewData}
          updateData={updateData}
          deleteData={deleteData}
        />
      ))}
      {isModalOpen && (
        <Modal
          editingData={editingData}
          setEditingData={setEditingData}
          handleModalClose={handleModalClose}
          handleSaveData={handleSaveData}
        />
      )}
    </div>
  );
}

export default Table;
