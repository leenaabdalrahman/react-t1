import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import './index.css'
import Nav from "./Nav.jsx";
import Pizza from './Pizza.jsx';
import Footer from './Footer.jsx';

createRoot(document.getElementById('root')).render(
  <>
    <Nav />
    <Pizza />
    <Footer />
  </>
)
