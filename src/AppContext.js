import React, { createContext, useState } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [alphaData, setAlphaData] = useState(null);
  const [returnData, setReturnData] = useState([]);
  const [volatilityData, setVolatilityData] = useState([]);
  const [error, setError] = useState(null);

  return (
    <AppContext.Provider value={{
      alphaData, setAlphaData,
      returnData, setReturnData,
      volatilityData, setVolatilityData,
      error, setError
    }}>
      {children}
    </AppContext.Provider>
  );
};
