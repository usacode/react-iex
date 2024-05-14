import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

function ReturnChartComponent({ data }) {
  return (
    <div className="container mt-3 shadow">
      <h2 className="text-center">Daily Return</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="priceDate" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="dailyReturn" stroke="#8884d8" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default ReturnChartComponent;
