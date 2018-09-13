import React from 'react';
import './style.css';

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
    return (
        <div>
            <p className='f4 white'> {'This Magic Brain will detect faces in your pictures, give it a try!'} </p>
            <div className='center'>
                <div className='form center pa4 br3 shadow'>
                    <input className='f4 pa2 w-70 center' type='tex' onChange={onInputChange}/>
                    <button 
                        className='button w-30 grow f4 link ph3 pv2 dib white'
                        onClick={onButtonSubmit}
                        >Detect</button>
                </div>
            </div>
        </div>

    ) 
}

export default ImageLinkForm;