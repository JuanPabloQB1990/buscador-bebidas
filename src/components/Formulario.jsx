import React, { useState } from "react";
import { Alert, Button, Col, Form, Row } from "react-bootstrap";
import useCategorias from "../hooks/useCategorias";
import useBebidas from "../hooks/useBebidas";

const Formulario = () => {
  const { categorias } = useCategorias();
  const { bebidas , obtenerBebidas} = useBebidas()

  const [busqueda, setBusqueda] = useState({
    nombre: "",
    categoria: "",
  });
  const [alerta, setAlerta] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.values(busqueda).includes("")) {
      setAlerta("Todos los Campos son obligatorios");
      return;
    }
    setAlerta("");
    obtenerBebidas(busqueda)
  };

  return (
    <Form onSubmit={handleSubmit}>
      {alerta.length > 0 && <Alert variant="danger">{alerta}</Alert>}
      <Row>
        <Col sm={6}>
          <Form.Group>
            <Form.Label htmlFor="nombre">Nombre Bebida</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ej: Tequila, Vodka, etc"
              name="nombre"
              id="nombre"
              value={busqueda.nombre}
              onChange={(e) =>
                setBusqueda({
                  ...busqueda,
                  [e.target.name]: e.target.value,
                })
              }
            ></Form.Control>
          </Form.Group>
        </Col>
        <Col sm={6}>
          <Form.Group>
            <Form.Label htmlFor="categoria">Categoria Bebida</Form.Label>
            <Form.Select
              name="categoria"
              id="categoria"
              value={busqueda.categoria}
              onChange={(e) =>
                setBusqueda({
                  ...busqueda,
                  [e.target.name]: e.target.value,
                })
              }
            >
              <option>- Selecciona Categoria -</option>
              {categorias.map((categoria) => (
                <option
                  key={categoria.strCategory}
                  value={categoria.strCategory}
                >
                  {categoria.strCategory}
                </option>
              ))}
            </Form.Select>
          </Form.Group>
        </Col>
      </Row>
      <Row className="justify-content-end">
        <Col md={3}>
          <Button
            type="submit"
            variant="danger"
            className="text-uppercase w-100 mt-3"
          >
            Buscar Bebidas
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default Formulario;
