import React, { Fragment, useState } from "react";
import { Button, Col, Container, ListGroup, Row } from "react-bootstrap";
import FoodDetails from "./FoodDetails";
import FitModal from "./UI/FitModal";

const Food = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <Fragment>
      <FitModal
        show={isEditing}
        title="Editing..."
        onClose={() => {
          setIsEditing(false);
        }}
      >
        <FoodDetails
          food={{ ...props }}
          onCancelFood={() => {
            setIsEditing(false);
          }}
        />
      </FitModal>
      <ListGroup.Item as="li" key={props.id}>
        <Container>
          <Col>
            <Row>
              <Col>
                <strong> Name:</strong>
              </Col>
              <Col>
                <strong>Portion (g):</strong>
              </Col>
              <Col>
                <strong>Calories:</strong>
              </Col>
              <Col>
                <Button
                  variant="danger"
                  onClick={() => props.onRemove(props.id)}
                >
                  Delete
                </Button>
              </Col>
            </Row>
            <Row>
              <Col>{props.name}</Col>
              <Col>{props.portion}</Col>
              <Col>{props.calories}</Col>
              <Col>
                {" "}
                <Button
                  variant="outline-primary"
                  onClick={() => {
                    setIsEditing(true);
                  }}
                >
                  Edit
                </Button>
              </Col>
            </Row>
          </Col>
        </Container>
      </ListGroup.Item>
    </Fragment>
  );
};

export default Food;
