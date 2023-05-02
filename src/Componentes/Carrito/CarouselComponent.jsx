import { Carousel } from "react-bootstrap"

const CarouselComponent = ({imagenes}) => {
  const { imagen1, imagen2, imagen3 } = imagenes;
  return (
    <Carousel indicators={false} >
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={imagen1}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={imagen2}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={imagen3 ? imagen3 : imagen1}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  )
}

export default CarouselComponent