import React, { useState, useContext } from 'react';
import FormComponent from './FormComponent';
import ReturnChartComponent from './ReturnChartComponent';
import { AppContext } from './AppContext';

function ReturnComponent() {
  const [chartData, setChartData] = useState([]);
  const [error, setError] = useState(null);
  const { dataContext, setDataContext } = useContext(AppContext);

  const handleDataReceived = (data) => {
    setChartData(data);
    setError(null);
  };

  const url = `http://localhost:8080/demo/api/v1/returns?`;

  return (
    <div className="container mt-2">
      <h1>Daily Return Analysis</h1>
      <FormComponent onDataReceived={handleDataReceived} url={url} />
      {error && <div className="alert alert-danger">{error}</div>}
      {chartData.length > 1 && <ReturnChartComponent data={chartData} />}
    </div>
  );
}

export default ReturnComponent;
