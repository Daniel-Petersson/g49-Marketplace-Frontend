import React, { useState, useEffect } from 'react';
import { getUserProfile } from '../services/UserService';

function UserProfileComponent() {
  const [userProfile, setUserProfile] = useState(null);

  useEffect(() => {
    getUserProfile(1)
      .then(response => {
        console.log('User Profile:', response.data);
        setUserProfile(response.data);
      })
      .catch(error => {
        console.error('Error fetching user profile:', error);
      });
  }, []);

  return (
    <div className="card">
      <div className="card-header">User Profile</div>
      <div className="card-body">
        {userProfile ? (
          <>
            <p><strong>First Name:</strong> {userProfile.firstName}</p>
            <p><strong>Last Name:</strong> {userProfile.lastName}</p>
            <p><strong>Phone Number:</strong> {userProfile.phoneNumber}</p>
            <p><strong>Address:</strong> {userProfile.address}</p>
            <p><strong>Email:</strong> {userProfile.email}</p>
          </>
        ) : (
          <p>Loading user profile...</p>
        )}
      </div>
    </div>
  );
}

export default UserProfileComponent;