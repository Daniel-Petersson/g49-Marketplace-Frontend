import { useLocation } from "react-router-dom";

function UserProfile() {
  const location = useLocation();
  const { user } = location.state || {};

  if (!user) {
    return <div>No user data available</div>;
  }

  return (
    <div className="container">
      <h1>User Profile</h1>
      <p>
        <strong>Email:</strong>
        {user.email}
      </p>
      <p>
        <strong>Username:</strong> {user.userName}
      </p>
      <p>
        <strong>First Name:</strong> {user.firstName}
      </p>
      <p>
        <strong>Last Name:</strong> {user.lastName}
      </p>
      <p>
        <strong>Phone Number:</strong> {user.phoneNumber}
      </p>
      <p>
        <strong>Address:</strong> {user.address}
      </p>
    </div>
  );
}

export default UserProfile;
