import React, { useState } from 'react';
import FormComponent from './FormComponent';
import VolatilityChartComponent from './VolatilityChartComponent';
import { BASE_API_URL } from './Url';

function VolatilityComponent() {
  const [volatilityData, setVolatilityData] = useState([]);
  const [error, setError] = useState(null);

  const handleDataReceived = (data) => {
    setVolatilityData(data);
    setError(null);
  };

  const API_VOLATILITY = BASE_API_URL + '/demo/api/v1/volatility?';

  return (
    <div className="container mt-2">
      <h1>Volatility Analysis</h1>
      <FormComponent onDataReceived={handleDataReceived} url={API_VOLATILITY} />
      {error && <div className="alert alert-danger">{error}</div>}
      {volatilityData.length > 1 && (
        <VolatilityChartComponent data={volatilityData} />
      )}
    </div>
  );
}

export default VolatilityComponent;
