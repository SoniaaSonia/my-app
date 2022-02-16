import { Button } from "@mui/material";
import { Modal } from "react-bootstrap";
const DeleteModal = (props) => {
  const { open, handleClose, handleDelete } = props;
  return (
    <Modal show={open} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Confirm Delete</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Are you Sure You want to Delete Item</h4>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleDelete}>Yes</Button>
      </Modal.Footer>
    </Modal>
  );
};
export default DeleteModal;
