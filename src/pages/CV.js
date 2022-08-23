import React from 'react';
import 'react-sticky-header/styles.css';
import cv from '../images/CV_JR.pdf'
import './CV.css';
// import { Document, Page, pdfjs } from 'react-pdf/dist/esm/entry.webpack';

import StickyHeader from 'react-sticky-header';
//pdfjs.GlobalWorkerOptions.workerSrc = '//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js';

import Header from '../components/header.js';
import Footer from '../components/footer.js';

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