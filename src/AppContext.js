import React, { createContext, useState } from 'react';

// Create a context with default value
const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [dataContext, setDataContext] = useState([]);

  return (
    <AppContext.Provider value={{ dataContext, setDataContext }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
