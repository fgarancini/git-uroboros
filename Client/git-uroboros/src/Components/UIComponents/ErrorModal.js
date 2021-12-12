import React, { useState } from "react";
import { Alert, Modal } from "react-bootstrap";

const ErrorModal = (props) => {
  const [show, setShow] = useState(true);
  return (
    <Modal show={show} >
      <Alert variant="danger" onClose={() => setShow(false)} dismissible>
        <Alert.Heading>Ops!</Alert.Heading>
        <p>{props.error.message}</p>
      </Alert>
    </Modal>
  );
};

export default ErrorModal;