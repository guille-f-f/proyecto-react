import { useState } from "react";
import { Button, Modal } from "react-bootstrap";

const MostrarProducto = ({data, mostrarProducto, agregarAlCarrito }) => {

  const {id, nombre, imagen1, precio} = data;

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const eventsImage = () => {
    handleShow();
    mostrarProducto(id);
  }
  
  return (
    <>
      <img
        src={imagen1}
        alt="imagen"
        onClick={eventsImage}
        role="button"
        className="w-100"
      />

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{nombre}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={imagen1} alt="Imagen" className="w-100" />
          <h4 className="m-1">$ {precio},00</h4>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={() => agregarAlCarrito(id)}>
            Agregar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default MostrarProducto;
