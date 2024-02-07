import React from "react";
import { Button, Card, CardTitle, Col } from "react-bootstrap";
import useBebidas from "../hooks/useBebidas";

const Bebida = ({ bebida }) => {

    const {handleModalClick, handleBebidaIdClick } = useBebidas()
  return (
    <Col sm={6} md={3}>
      <Card className="mb-4">
        <Card.Img variant="top" src={bebida.strDrinkThumb} alt={`Imagen de ${bebida.strDrink}`}></Card.Img>
        <Card.Body>
            <CardTitle>{bebida.strDrink}</CardTitle>
            <Button variant="warning" className="w-100 text-uppercase mt-2" onClick={() => {handleModalClick(), handleBebidaIdClick(bebida.idDrink)}}>ver receta</Button>
        </Card.Body>
      </Card>
      {bebida.strDrink}
    </Col>
  );
};

export default Bebida;
