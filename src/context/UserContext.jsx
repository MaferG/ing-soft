import React, { useState } from "react";

export const UserContext = React.createContext();
export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [project, setProject] = useState(null);

  return (
    <UserContext.Provider value={{ user, setUser, project, setProject }}>
      {children}
    </UserContext.Provider>
  );
};
