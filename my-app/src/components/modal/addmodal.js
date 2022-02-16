import { Modal } from "react-bootstrap";
import Form from "../forms/form";
const AddModal = (props) => {
  return (
    <Modal show={props.showadd} onHide={props.handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Add Form</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={props.handleAdd} label="Add" />
      </Modal.Body>
    </Modal>
  );
};
export default AddModal;
