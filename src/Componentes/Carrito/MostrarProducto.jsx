import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import CarouselComponent from "./CarouselComponent";

const MostrarProducto = ({ data, mostrarProducto, agregarAlCarrito }) => {
  const { id, nombre, marca, descripcion, imagen1, imagen2, imagen3, precio } = data;

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const eventsImage = () => {
    handleShow();
    mostrarProducto(id);
  };

  const imagenes = {
    imagen1: imagen1,
    imagen2: imagen2,
    imagen3: imagen3,
  };

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
          <Modal.Title>{nombre} {marca}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <CarouselComponent imagenes={imagenes} />
          <p className="m-1">{descripcion}</p>
          <h4 className="m-1 text-end">$ {precio},00</h4>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
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
