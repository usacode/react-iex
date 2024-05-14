import React, { useState } from 'react';
import FormComponent from './FormComponent';
import VolatilityChartComponent from './VolatilityChartComponent';

function VolatilityComponent() {
  const [volatilityData, setVolatilityData] = useState([]);
  const [error, setError] = useState(null);

  const handleDataReceived = (data) => {
    setVolatilityData(data);
    setError(null);
  };

  const url = `http://localhost:8080/demo/api/v1/volatility?`;

  return (
    <div className="container mt-2">
      <h1>Volatility Analysis</h1>
      <FormComponent onDataReceived={handleDataReceived} url={url} />
      {error && <div className="alert alert-danger">{error}</div>}
      {volatilityData.length > 1 && (
        <VolatilityChartComponent data={volatilityData} />
      )}
    </div>
  );
}

export default VolatilityComponent;
