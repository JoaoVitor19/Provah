import React from 'react';
import Imagem from 
import './index.css';



function Menu(){

    return(
        <div className="Header">
            <div className="left">
                <a href="/">Buy And Sell</a>
                <img src={Imagem} alt="logo"></img>
            </div>
            <nav>
                <ul className="produtos">
                        <li className="estilo">Inicio</li>
                        <li className="estilo">Conteudos</li>
                        <li className="estilo">Vendas</li>
                        <li className="estilo">Compras</li>
                </ul>
            </nav>
        </div>
    );
}

export default Menu;