import React, { useState, useContext } from "react";
import { Button, Form, Row, Container, Col, Stack } from "react-bootstrap";
import FoodsContext from "../store/foods-context";

const FoodDetails = (props) => {
  const [newFood, setNewFood] = useState(props.food);

  const foodsCtx = useContext(FoodsContext);

  const submitHandler = (e) => {
    e.preventDefault();
    foodsCtx.editFood(newFood);
    props.onCancelFood();
  };

  const foodChangeHandler = (e) => {
    const updatedFood = { ...newFood, [e.target.id]: e.target.value };
    setNewFood(updatedFood);
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
                  value={newFood.name}
                  onChange={foodChangeHandler}
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
                  value={newFood.portion}
                  onChange={foodChangeHandler}
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
                  value={newFood.calories}
                  onChange={foodChangeHandler}
                />
              </Col>
            </Row>
          </Container>
        </Form.Group>
        <Stack direction="horizontal" gap={3} className="ms-auto">
          <Button variant="secondary" onClick={props.onCancelFood}>
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

export default FoodDetails;
