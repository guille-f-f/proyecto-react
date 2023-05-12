import carruselData from "../datos/carruselData.json";
import "../estilos/Carrusel.css";
import Carousel from "react-bootstrap/Carousel";

const Carrusel = () => {
  return (
    <>
      <div className="carrusel_contenedor">
        <Carousel className="carrusel">
          {console.log(carruselData)}
          {carruselData.map((item) => {
            return (
              <Carousel.Item interval={2000}>
                <img className="d-block w-100" src={item.src} alt={item.alt} />
                <Carousel.Caption>
                  <p>Seguinos @Indumentaria</p>
                </Carousel.Caption>
              </Carousel.Item>
            );
          })}
        </Carousel>
      </div>
    </>
  );
};

export default Carrusel;
