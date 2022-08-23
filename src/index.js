import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import Home from './pages/Home.js';
import CV from './pages/CV.js';
import Projects from './pages/Projects.js';
import Blog from './pages/Blog.js';

import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route} from 'react-router-dom';

// import Layout from './components/layout.js';

import Header from './components/header.js';
import Footer from './components/footer.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
     <BrowserRouter>
      <Header/>
      <Routes>
          {/* <Route path="/" element={<Layout/>}/> */} 
        
          <Route index element={<Home/>}/>
          <Route path="/CV" element={<CV/>}/>
          <Route path="/Projects" element={<Projects/>}/>
          <Route path="/Blog" element={<Blog/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
   
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
