import { useState, useEffect } from 'react';
import { Data } from '../interfaces/Data';
import api from '../services/api';

function MyData() {
  const [myData, setMyData] = useState<Data[]>([]);

  useEffect(() => {
    api
      .get('/mydata')
      .then((response) => {
        setMyData(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h2>My Data</h2>
      <ul>
        {myData.map((item) => (
          <li key={item._id}>
            {Object.keys(item).map((key) => (
              <span key={key}>
                {key}: {item[key]} &nbsp;{' '}
              </span>
            ))}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MyData;
