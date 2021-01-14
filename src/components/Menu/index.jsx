import React from 'react';
import Imagem from '../Assets/SellandBuy.jpg';
import './index.css';


function Menu(){
    return(
        <div className="Header">
            <div className="left">
                  <a href="/">Buy And Sell</a>
                  <img className="logo" src={Imagem} alt="logo"></img>
            </div>
            <nav>
                <ul className="produtos">
                  <li className="estilo">Inicio</li>
                  <li className="estilo">Compras</li>
                  <li className="estilo">Vendas</li>
                  <li className="estilo">Como Usar?</li>
                </ul>
            </nav>
        </div>
    );
}
export default Menu;