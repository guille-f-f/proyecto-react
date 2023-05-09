import React from "react";
import "../estilos/Carrusel.css";
import Carousel from "react-bootstrap/Carousel";

const Carrusel = () => {
  return (
    <>
      <div className="carrusel_contenedor">
        <Carousel className="carrusel">
          <Carousel.Item interval={2000}>
            <img
              className="d-block w-100"
              src="https://assets.adidas.com/images/w_600,f_auto,q_auto/8f90a80413c847baa1aaafd2017beace_9366/Campera_River_Plate_Condivo_22_All-Weather_Beige_HC1044_01_laydown.jpg"
              alt="First slide"
            />
            <Carousel.Caption>
              <p>Seguinos @Indumentaria</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={2000}>
            <img
              className="d-block w-100"
              src="https://assets.adidas.com/images/w_600,f_auto,q_auto/cc3fcf129e3d4720b455b47f35d6288b_9366/Remera_Argentina_Campeon_2022_Blanco_IR0033_01_laydown.jpg"
              alt="Second slide"
            />
            <Carousel.Caption>
              <p>Seguinos @Indumentaria</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={2000}>
            <img
              className="d-block w-100"
              src="https://assets.adidas.com/images/w_600,f_auto,q_auto/c4fae3e6b08d4a10b1a8afba008dd123_9366/Camiseta_Alternativa_Seleccion_Argentina_Femenina_23_Version_Masculina_Negro_IB8536_21_model.jpg"
              alt="Third slide"
            />
            <Carousel.Caption>
              <p>Seguinos @Indumentaria</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={2000}>
            <img
              className="d-block w-100"
              src="https://assets.adidas.com/images/w_600,f_auto,q_auto/a38b9be61b2d45b78a85ee970e6cbfc8_9366/Remera_BZRP_Blanco_IR5032_21_model.jpg"
              alt="First slide"
            />
            <Carousel.Caption>
              <p>Seguinos @Indumentaria</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={2000}>
            <img
              className="d-block w-100"
              src="https://assets.adidas.com/images/w_600,f_auto,q_auto/f019690688fa49d192c86040725efaf7_9366/Remera_BZRP_Negro_IR5031_21_model.jpg"
              alt="First slide"
            />
            <Carousel.Caption>
              <p>Seguinos @Indumentaria</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={2000}>
            <img
              className="d-block w-100"
              src="https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/71872413dd7c41b0823bad1e002eb0fa_9366/firebird-t-jkt.jpg"
              alt="First slide"
            />
            <Carousel.Caption>
              <p>Seguinos @Indumentaria</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={2000}>
            <img
              className="d-block w-100"
              src="https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/7034cdacbccf4bb78299a7f90123210f_9366/campera-termica-con-capucha-varilite.jpg"
              alt="First slide"
            />
            <Carousel.Caption>
              <p>Seguinos @Indumentaria</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={2000}>
            <img
              className="d-block w-100"
              src="https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/1e07fc7528f0462eb307ad11010ba5f3_9366/Rompevientos_Liviano_FARM_Rio_Print_Relaxed_Azul_GS6301_21_model.jpg"
              alt="First slide"
            />
            <Carousel.Caption>
              <p>Seguinos @Indumentaria</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={2000}>
            <img
              className="d-block w-100"
              src="https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/8209e5cfc9c54039b51cae7c017cc3de_9366/Campera_Deportiva_Tyshawn_Terciopelo_Unisex_Negro_HN1842_21_model.jpg"
              alt="First slide"
            />
            <Carousel.Caption>
              <p>Seguinos @Indumentaria</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={2000}>
            <img
              className="d-block w-100"
              src="https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/47c4f74efd14441ea551aef600ef8e74_9366/Zapatillas_de_Running_Adizero_SL_Azul_HQ1345_01_standard.jpg"
              alt="First slide"
            />
            <Carousel.Caption>
              <p>Seguinos @Indumentaria</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </>
  );
};

export default Carrusel;
