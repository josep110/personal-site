import React from 'react';
import 'react-sticky-header/styles.css';
import cv from '../images/CV_JR.pdf'
import './CV.css';


function CV(){
	return(
        <div>
			<object data={cv} type="application/pdf" width="100%" height="1000">
                PDF?
            </object>
    </div>
	)
}

export default CV;