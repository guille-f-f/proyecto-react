const VistaPrevia = (props) => {
  const { id, nombre, marca, descripcion, precio } = props.data;

  return (
    <li key={id}>
      <h4>
        {nombre} {marca}
      </h4>
      <h5>{descripcion}</h5>
      <h5>{precio}</h5>
    </li>
  );
};

export default VistaPrevia;
