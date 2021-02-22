import React from 'react';
import { Tooltip } from '@material-ui/core';
import './LeftBtn.css';

function leftBtn() {
    return (
        <div className="btnBox">
            <Tooltip title="Menu Toggle" arrow>
                <button id="changeGreen"><i className="fas fa-bars"></i></button>
            </Tooltip>

            <Tooltip title="Download CV" arrow>
                <button id="changeBlue"><i className="fas fa-cloud-upload-alt"></i></button>
            </Tooltip>

            <Tooltip title="Contact me" arrow>
                <button id="changeRed"><i className="far fa-paper-plane"></i></button>
            </Tooltip>    
        </div>  
    )
}

export default leftBtn;
