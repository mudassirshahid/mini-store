// ./context/UserContext.jsx
import React, { createContext, useState } from 'react';

// Create context with default value
const UserContext = createContext();

// Create context provider component
export const UserProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState({ name: '', email: '' });

  const updateUserInfo = (name, email) => {
    setUserInfo({ name, email });
  };

  return (
    <UserContext.Provider value={{ userInfo, updateUserInfo }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
