import React from 'react'
import Logo from '../Assets/SellandBuy.jpg'
import insta from '../Assets/instagram.png'
import face from '../Assets/facebook.png'
import './index.css'

function Rodape(){
    return(
      <div>
    <div className="footer">
        <ul>
        <img className="logo" src={Logo} alt="Logo"/>
          <a>BUY AND SELL STORE</a>
          <div className="social">
            <img src={insta} alt="instagram"/>
            <p>buy.and.sell</p>
            <img src={face} alt="facebook"/>
            <p>Buy and Sell Store</p>
          </div>
          <ol>   Contatos</ol>
          <ol>   (55) 99398981</ol>
          <ol>   (55) 86903498</ol>
          <ol>   buyandsell@gmail.com</ol>
        </ul>
    </div>
    <div className="copy"><a>Copyright 2020</a></div>
    </div>
    );
}

export default Rodape;
