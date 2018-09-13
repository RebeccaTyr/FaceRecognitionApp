import React from 'react';
import Tilt from 'react-tilt';
import './Logo.css';
import face from './face.png';

const Logo = () => {
    return (
        <div className='center ma4 mt0'>
            <Tilt className="Tilt br2 shadow-2" options={{ max : 55 }} style={{ height: 120, width: 120 }} >
            <div className="Tilt-inner pa2"><img style={{paddingTop : 3}} src={face} alt='Logo'/> </div>
            </Tilt>
        </div>

    ) 
}

export default Logo;
