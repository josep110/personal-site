import React from 'react';
import {Outlet} from 'react-router-dom';
import Header from './header.js';
import Footer from './footer.js';

const Layout = () => {
    console.log("layout");
    return(
        <>
            <Header/>
            <Outlet/>
            <Footer/>
        </>
    );
}

export default Layout;
