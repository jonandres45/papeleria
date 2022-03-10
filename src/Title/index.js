import React from 'react';
import './Title.css';
function Title(){
    return(
        <div className='hero' id="catalogo">
            <div className='promo'>
                <h1>Catálogo</h1>
            </div>
            <video muted autoPlay loop>
                <source src='static/video/video1.mp4' type='video/mp4'/>
            </video>
            <div className='capa'></div>
        </div>
    );
}

export {Title};