import React, { useState, createContext } from "react";

const DashboardContext = createContext();

function DashboardProvider({ children }) {
  const [folders, setFolders] = useState([]);

  const value = {
    folders,
  };

  return (
    <DashboardContext.Provider value={value}>
      {children}
    </DashboardContext.Provider>
  );
}

export { DashboardContext, DashboardProvider };
