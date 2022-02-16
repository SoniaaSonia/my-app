import { Modal } from "react-bootstrap";
import Form from "../forms/form";
const EditModal = (props) => {
  return (
    <Modal show={props.show} onHide={props.handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Edit Form</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form
          onSubmit={props.handleSubmit}
          initialValues={props.initialValues}
          label="Update"
        />
      </Modal.Body>
    </Modal>
  );
};
export default EditModal;
