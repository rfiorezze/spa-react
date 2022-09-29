// Importando o React
import React from "react";
// Importando os components necessários da lib react-materialize
import { Row, Col, Card } from 'react-materialize';

// Recebe os parâmetros passadados para o Componenet na variável props
const News = (props) => (
  <Card>
      <Row>
        <Col s={10} s={10}>
          <p><b>{props.title}</b></p>
          <p>{props.description}</p>
        </Col>
      </Row>
  </Card>
);

export default News;