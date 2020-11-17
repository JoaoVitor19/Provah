import React from 'react'
import Menu from '../../components/Menu'
import Rodape from '../../components/Rodape'
import './index.css'

function Error(){
    return(
        <div>
            <Menu />
            <div className="Error">
                <h1>ERROR 404</h1>
                <a>Você Digitou o Link Errado</a>
            </div>
            <Rodape />
        </div>
    );
}
export default Error;