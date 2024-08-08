import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import UserProfileComponent from './UserProfileComponent';

function UserProfile() {
  const [advertisements, setAdvertisements] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('/api/advertisements') // Replace with the actual endpoint for advertisements
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => setAdvertisements(data))
      .catch(error => console.error('Error fetching advertisements:', error));
  }, []);

  const handleCreateAdvertisement = () => {
    navigate('/create-advertisement');
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-4">
          <UserProfileComponent />
        </div>
        <div className="col-md-8">
          <div className="card">
            <div className="card-header">Advertisements</div>
            <div className="card-body">
              <button type="button" className="btn btn-primary" onClick={handleCreateAdvertisement}>Create advertisement</button>
              <ul className="list-group mt-3">
                {advertisements.map(ad => (
                  <li key={ad.id} className="list-group-item">
                    <h5>{ad.title}</h5>
                    <p><strong>Description:</strong> {ad.description}</p>
                    <p><strong>Category:</strong> {ad.category}</p>
                    <p><strong>Price:</strong> {ad.price}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;