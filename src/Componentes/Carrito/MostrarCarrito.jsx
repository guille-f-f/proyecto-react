import { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import Item from './Item';

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
      <Modal fullscreen='md-down' backdrop='true' show={show} onHide={handleClose} >
        <Modal.Header closeButton>
          <Modal.Title>Carrito</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {carrito.map(item => <Item key={item.id} data={item} eliminarDeCarrito={eliminarDeCarrito} limpiarCarrito={limpiarCarrito} />)}
          {/* En caso de ejecutar la función removeAllItem deberiamos pasar la props => removeAllItem={removeAllItem} */}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Comprar
          </Button>
          <Button variant="warning" onClick={() => limpiarCarrito()}>Limpiar carrito</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default MostrarCarrito;