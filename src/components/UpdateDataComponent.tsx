import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Data } from '../interfaces/Data';

function UpdateDataComponent() {
  const [data, setData] = useState<Data[]>([]);
  const [updatedData, setUpdatedData] = useState<{
    [key: string]: Partial<Data>;
  }>({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    setLoading(true);
    axios
      .get('http://localhost:4000/mydata') // Replace with the appropriate API endpoint
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((error: Error) => {
        setError('Error fetching data');
        setLoading(false);
        console.error(error);
      });
  };

  const handleUpdate = (id: string) => {
    setLoading(true);
    axios
      .put(`http://localhost:4000/mydata/${id}`, updatedData[id], {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then(() => {
        setLoading(false);
        setUpdatedData((prevData) => ({
          ...prevData,
          [id]: {},
        }));
        fetchData(); // Fetch the updated data again
      })
      .catch((error: Error) => {
        setError('Error updating data');
        setLoading(false);
        console.error(error);
      });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, id: string) => {
    setUpdatedData((prevData) => ({
      ...prevData,
      [id]: {
        ...prevData[id],
        [e.target.name]: e.target.value,
      },
    }));
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h2>Update Data</h2>
      <ul>
        {data.map((item) => (
          <li key={item._id}>
            {item.name}, {item.age}, {item.location}
            <input
              type="text"
              name="name"
              value={updatedData[item._id]?.name || ''}
              onChange={(e) => handleChange(e, item._id)}
            />
            <input
              type="number"
              name="age"
              value={updatedData[item._id]?.age || ''}
              onChange={(e) => handleChange(e, item._id)}
            />
            <input
              type="text"
              name="location"
              value={updatedData[item._id]?.location || ''}
              onChange={(e) => handleChange(e, item._id)}
            />
            <button onClick={() => handleUpdate(item._id)}>Update</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UpdateDataComponent;
