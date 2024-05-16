import React from 'react';
import { Card,Col } from 'react-bootstrap';

function AlphaDisplayComponent({ data }) {
  return (
    <Col className=" mt-3 shadow" xs={12} sm={8} md={6} lg={4}>
      <h2 className="text-center">Alpha</h2>
      <Card>
        <Card.Body>
          <Card.Text>Symbol: {data.symbol}</Card.Text>
          <Card.Text>Benchmark: {data.benchmark}</Card.Text>
          <Card.Text>Alpha: {data.alpha.toString()}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default AlphaDisplayComponent;
