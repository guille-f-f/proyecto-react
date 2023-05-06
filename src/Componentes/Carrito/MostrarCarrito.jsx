import { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import Item from './Item';
import '../../estilos/Modal.css'

function MostrarCarrito({carrito, eliminarDeCarrito, limpiarCarrito}) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const styles = {
    color: "#afaf0f",
    cursor: "pointer"
  }
  return (
    <>
      <FontAwesomeIcon className="icono" icon={faShoppingCart} onClick={handleShow} />
      <FontAwesomeIcon className="carrito__logo" icon={faShoppingCart} onClick={handleShow} />

      <Modal fullscreen='md-down' backdrop='true' show={show} onHide={handleClose} >
        <Modal.Header closeButton >
          <Modal.Title className='modal__title'><h3>Carrito</h3></Modal.Title>
        </Modal.Header>
        <Modal.Body >
          {
            carrito.length === 0 
            ? <h5>No hay productos añadidos al carrito...</h5>
            : carrito.map(item => <Item key={item.id} data={item} eliminarDeCarrito={eliminarDeCarrito} limpiarCarrito={limpiarCarrito} />) 
          }
        </Modal.Body>
        <Modal.Footer>
          <Button variant="light" className='modal__button' onClick={handleClose}>
            Cerrar
          </Button>
          <Button variant="primary" className='modal__button' onClick={handleClose}>
            Comprar
          </Button>
          <Button variant="danger" className='modal__button' onClick={() => limpiarCarrito()}>Limpiar carrito</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default MostrarCarrito;