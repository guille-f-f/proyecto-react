import React from 'react';
import '../estilos/footer.css';

const Footer = () =>{
    return (
        <footer>
    <div className="pie-de-pagina1">
        <div className="box">
            <a href="#" target="_blank" className="fab fa-facebook"></a>
            <a href="#" target="_blank" className="fab fa-instagram"></a>
            <a href="#" target="_blank" className="fab fa-twitter"></a>
            <a href="#" target="_blank" className="fab fa-whatsapp"></a>
            <a href="#" target="_blank" className="fab fa-facebook-messenger"></a>
            <a href="#" target="_blank" className="fab fa-telegram"></a>
        </div>
    </div>
    <div className="pie-de-pagina2">
    <div className="box2">
        <h1>COMPARTE CON TUS AMIGOS</h1>
    </div>
</div>
    <div className="pie-de-pagina3">
    <div className="box">
        <figure>
            <a href="#">
            </a>
        </figure>
    </div>
    <div className="box">
        <h2>Accesorios</h2>
        <li>Lorem, ipsum dolor.</li>
        <li>Lorem, ipsum dolor.</li>
        <li>Lorem, ipsum dolor.</li>
        <li>Lorem, ipsum dolor.</li>
        <li>Lorem, ipsum dolor.</li>
    </div>
    <div className="box">
        <h2>Categorias</h2>
        <li>Lorem, ipsum dolor.</li>
                <li>Lorem, ipsum dolor.</li>
                <li>Lorem, ipsum dolor.</li>
            </div>
            <div className="box">
                <h2>Promos</h2>
            </div>
            <div className="box">
                <h2>Acerca de nosotros</h2>
            </div>
        </div>
    </footer>
    )
}

export default Footer 