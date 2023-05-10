import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "../estilos/Contacto.css";

function BasicExample() {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Dirección de email</Form.Label>
        <Form.Control type="email" placeholder="Ingresar email" />
        <Form.Text className="text-muted">
          Nunca compartiremos tu correo electrónico con nadie más.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Contraseña</Form.Label>
        <Form.Control type="password" placeholder="Contraseña" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Recuérdame" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Enviar
      </Button>
    </Form>
  );
}

export default BasicExample;
