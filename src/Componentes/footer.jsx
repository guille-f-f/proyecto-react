import { Link } from "react-router-dom";
import "../estilos/Footer.css";
import Scrolltop from "./Buttonscroll";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__section">
        {/* Footer head --> */}
        <div className="footer__head">
          <Buttonscroll>
        </div>

        {/* Footer body */}
        <div className="footer__body">
          <div className="footer__body--col1">
            <div className="footer__title">Get to Know Us</div>
            <ul className="footer__list">
              <li className="footer__item">
                <Link to="*" className="footer__link">
                  Carrers
                </Link>
              </li>
              <li className="footer__item">
                <Link to="*" className="footer__link">
                  Blog
                </Link>
              </li>
              <li className="footer__item">
                <Link to="*" className="footer__link">
                  About Adidas Corporation INC
                </Link>
              </li>
              <li className="footer__item">
                <Link to="*" className="footer__link">
                  Investor Relations
                </Link>
              </li>
              <li className="footer__item">
                <Link to="*" className="footer__link">
                  Adidas Devices
                </Link>
              </li>
              <li className="footer__item">
                <Link to="*" className="footer__link">
                  Adidas Science
                </Link>
              </li>
            </ul>
          </div>
          <div className="footer__body--col2">
            <div className="footer__title">Make Money with Us</div>
            <ul className="footer__list">
              <li className="footer__item">
                <Link to="*" className="footer__link">
                  Sell products on Adidas
                </Link>
              </li>
              <li className="footer__item">
                <Link to="*" className="footer__link">
                  Sell on Adidas Business
                </Link>
              </li>
              <li className="footer__item">
                <Link to="*" className="footer__link">
                  Sell apps on Adidas
                </Link>
              </li>
              <li className="footer__item">
                <Link to="*" className="footer__link">
                  Become an Affiliate
                </Link>
              </li>
              <li className="footer__item">
                <Link to="*" className="footer__link">
                  Advertise Your Products
                </Link>
              </li>
              <li className="footer__item">
                <Link to="*" className="footer__link">
                  Self-Publish with Us
                </Link>
              </li>
              <li className="footer__item">
                <Link to="*" className="footer__link">
                  Host an Adidas Hub
                </Link>
              </li>
              <li className="footer__item">
                <Link to="*" className="footer__link">
                  See More Make Money with Us
                </Link>
              </li>
            </ul>
          </div>
          <div className="footer__body--col3">
            <div className="footer__title">Adidas Payment Products</div>
            <ul className="footer__list">
              <li className="footer__item">
                <Link to="*" className="footer__link">
                  Adidas Business Card
                </Link>
              </li>
              <li className="footer__item">
                <Link to="*" className="footer__link">
                  Shop with Points
                </Link>
              </li>
              <li className="footer__item">
                <Link to="*" className="footer__link">
                  Reload Your Balance
                </Link>
              </li>
              <li className="footer__item">
                <Link to="*" className="footer__link">
                  Adidas Currency Converter
                </Link>
              </li>
            </ul>
          </div>
          <div className="footer__body--col4">
            <div className="footer__title">Let Us Help You</div>
            <ul className="footer__list">
              <li className="footer__item">
                <Link to="*" className="footer__link">
                  Adidas and COVID-19
                </Link>
              </li>
              <li className="footer__item">
                <Link to="*" className="footer__link">
                  Your Account
                </Link>
              </li>
              <li className="footer__item">
                <Link to="*" className="footer__link">
                  Your Orders
                </Link>
              </li>
              <li className="footer__item">
                <Link to="*" className="footer__link">
                  Shipping Rates & Policies
                </Link>
              </li>
              <li className="footer__item">
                <Link to="*" className="footer__link">
                  Returns & Replacements
                </Link>
              </li>
              <li className="footer__item">
                <Link to="*" className="footer__link">
                  Manage Your Content and Devices
                </Link>
              </li>
              <li className="footer__item">
                <Link to="*" className="footer__link">
                  Amazon Assistant
                </Link>
              </li>
              <li className="footer__item">
                <Link to="*" className="footer__link">
                  Help
                </Link>
              </li>
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
