import React from "react";
import { Modal, Stack } from "react-bootstrap";

const FitModal = (props) => {
  return (
    <Modal show={props.show} onHide={props.onClose}>
      <Stack gap={2}>
        <Modal.Header closeButton>
          <h3>{props.title}</h3>
        </Modal.Header>
        {props.children}
      </Stack>
    </Modal>
  );
};

export default FitModal;
