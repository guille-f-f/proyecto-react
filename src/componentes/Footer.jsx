import { Link } from "react-router-dom";
import "../estilos/Footer.css";
import footerDatos from "../datos/footerDatos.json";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__section">
        {/* Footer head --> */}
        <div className="footer__head">
          <span className="footer__title">Adidas Inc.</span>
        </div>

        {/* Footer body */}
        <div className="footer__body">
          <div className="footer__body--col1">
            <div className="footer__title">
              {footerDatos.primerColumna.titulo}
            </div>
            <ul className="footer__list">
              {footerDatos.primerColumna.items.map((item) => (
                <li className="footer__item">
                  <Link to="*" className="footer__link">
                    {item.texto}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer__body--col2">
            <div className="footer__title">
              {footerDatos.segundaColumna.titulo}
            </div>
            <ul className="footer__list">
              {footerDatos.segundaColumna.items.map((item) => (
                <li className="footer__item">
                  <Link to="*" className="footer__link">
                    {item.texto}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer__body--col3">
            <div className="footer__title">
              {footerDatos.terceraColumna.titulo}
            </div>
            <ul className="footer__list">
              {footerDatos.terceraColumna.items.map((item) => (
                <li className="footer__item">
                  <Link to="*" className="footer__link">
                    {item.texto}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer__body--col4">
            <div className="footer__title">
              {footerDatos.cuartaColumna.titulo}
            </div>
            <ul className="footer__list">
              {footerDatos.cuartaColumna.items.map((item) => (
                <li className="footer__item">
                  <Link to="*" className="footer__link">
                    {item.texto}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer footer */}
        <div className="footer__footer">
          <div className="footer__footer--container">
            <i className="footer__logo fa-brands fa-youtube"></i>
            <h3>ADIDAS INC.</h3>
            <div className="footer__footer--buttons">
              <Link to="*">
                <button>English</button>
              </Link>
              <Link to="*">
                <button>$ USD - U.S Dollar</button>
              </Link>
              <Link to="*">
                <button>
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_the_United_States.svg/800px-Flag_of_the_United_States.svg.png"
                    alt="Bandera EEUU"
                  />
                  United States
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;