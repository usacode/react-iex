import React,  { useContext }  from 'react';
import AlphaFormComponent from './AlphaFormComponent';
import AlphaDisplayComponent from './AlphaDisplayComponent';
import { AppContext } from './AppContext';

function AlphaComponent() {
  const { alphaData, setAlphaData, error, setError } = useContext(AppContext);


  const handleDataReceived = (data) => {
    setAlphaData(data);
    setError(null);
  };

  return (
    <div className="container mt-2">
      <h1>Alpha Analysis</h1>
      <AlphaFormComponent onDataReceived={handleDataReceived} />
      {error && <div className="alert alert-danger">{error}</div>}
      {alphaData && <AlphaDisplayComponent data={alphaData} />}
    </div>
  );
}

export default AlphaComponent;
