// Example usage in a component
import React, { useContext } from 'react';
import UserContext from '../../context/UserContext.jsx';

const UserProfile = () => {
  const { userInfo, updateUserInfo } = useContext(UserContext);

  // Example function using context values
  const handleUpdateUser = () => {
    updateUserInfo('John Doe', 'john.doe@example.com');
  };

  return (
    <div>
      <h2>User Profile</h2>
      <p>Name: {userInfo.name}</p>
      <p>Email: {userInfo.email}</p>
      <button onClick={handleUpdateUser}>Update User Info</button>
    </div>
  );
};

export default UserProfile;
