import React, { useState } from 'react';
import axios from 'axios';
import { Card, Form, Button, Col } from 'react-bootstrap';

function AlphaFormComponent({ onDataReceived }) {
  const [symbol, setSymbol] = useState('');
  const [benchmark, setBenchmark] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await axios.get(
        `http://localhost:8080/demo/api/v1/alpha?symbol=${symbol}&benchmark=${benchmark}&from=${startDate}&to=${endDate}`
      );
      const data = response.data;
      onDataReceived(data);
    } catch (error) {
      console.error('Error fetching data:', error);
      setError(
        error.response?.data?.message + ' -> ' + error.response?.data?.field
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <Col xs={12} sm={8} md={6} lg={4}>
      <Card className="bg-custom shadow">
        <Card.Body>
          <Form onSubmit={handleSubmit}>
            {error && <div className="alert alert-danger">{error}</div>}
            <Form.Group controlId="formSymbol">
              <Form.Text>Symbol</Form.Text>
              <Form.Control
                type="text"
                placeholder="Symbol"
                value={symbol}
                onChange={(e) => setSymbol(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="formBenchmark">
              <Form.Text>Benchmark</Form.Text>
              <Form.Control
                type="text"
                placeholder="Benchmark"
                value={benchmark}
                onChange={(e) => setBenchmark(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formStartDate">
              <Form.Text>Start Date</Form.Text>
              <Form.Control
                type="date"
                placeholder="Start Date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formStartDate">
              <Form.Text>End Date</Form.Text>
              <Form.Control
                type="date"
                placeholder="End Date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
              />
            </Form.Group>
            <Button
              variant="primary"
              type="submit"
              block
              className="mt-3"
              disabled={loading}
            >
              {loading ? 'Loading...' : 'Submit'}
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default AlphaFormComponent;
