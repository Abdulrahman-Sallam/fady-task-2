import { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import axios from 'axios';
import { Data } from './interfaces/Data';

function App() {
  const [listings, setListings] = useState<Data[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        // const response = await fetch(
        //   'http://localhost:3000/recipes?id=64945a6a4d02dfafccb60e84'
        // );
        const { data } = await axios({
          method: 'get',
          url: '/recipes',
          baseURL: 'http://localhost:3000',
          data: {
            id: '64945a6a4d02dfafccb60e84',
          },
        });
        console.log(data);

        // const data = await response.json();
        console.log(data);

        setListings(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  return (
    <div>
      <h1>Listings</h1>
      {listings.length === 0 ? (
        // loading spinner
        <div className="spiner">
          <a href="https://vitejs.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
      ) : (
        <ul>
          {listings.map((listing) => (
            <li key={listing._id}>{listing.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
