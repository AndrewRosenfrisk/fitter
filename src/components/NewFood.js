import React, { useState } from "react";
import { Button, Form, Row, Container, Col, Stack } from "react-bootstrap";

const NewFood = (props) => {
  const [name, setName] = useState("");
  const [portion, setPortion] = useState(0);
  const [calories, setCalories] = useState(0);

  const submitHandler = (e) => {
    e.preventDefault();

    props.onAdd({
      id: Math.random(),
      name: name,
      portion: portion,
      calories: calories,
    });

    setName("");
    setPortion(0);
    setCalories(0);
    props.toggleModal();
  };

  return (
    <Form onSubmit={submitHandler}>
    <Stack gap={2}>
    <Form.Group>
          <Container fluid="sm">
            <Row>
              <Col xs>
                <Form.Label htmlFor="name">Name: </Form.Label>
              </Col>
              <Col md="auto">
                <Form.Control
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
              </Col>
            </Row>
          </Container>
        </Form.Group>
        <Form.Group>
          <Container fluid="sm">
            <Row>
              <Col xs>
                <Form.Label htmlFor="portion">Portion (g): </Form.Label>
              </Col>
              <Col md="auto">
                <Form.Control
                  id="portion"
                  type="number"
                  min={0}
                  step={0.1}
                  value={portion}
                  onChange={(e) => {
                    setPortion(e.target.value);
                  }}
                />
              </Col>
            </Row>
          </Container>
        </Form.Group> 
        <Form.Group>
          <Container fluid="sm">
            <Row>
              <Col xs>
                <Form.Label htmlFor="calories">Calories: </Form.Label>
              </Col>
              <Col md="auto">
                <Form.Control
                  id="calories"
                  type="number"
                  min={0}
                  value={calories}
                  onChange={(e) => {
                    setCalories(e.target.value);
                  }}
                />
              </Col>
            </Row>
          </Container>
        </Form.Group>
      <Stack direction="horizontal" gap={3} className="ms-auto">
          <Button variant="secondary" onClick={props.toggleModal}>
            Cancel
          </Button>
          <Button variant="primary" type="submit">
            Save
          </Button>
          <div className="vr" />
        </Stack>
        <div className="vr" />
      </Stack>
    </Form>
  );
};

export default NewFood;
