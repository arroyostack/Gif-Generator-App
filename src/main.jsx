import React from 'react';
import ReactDOM from 'react-dom/client';
import { GifApp } from './GifApp';
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import './styles.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <GifApp />
  // </React.StrictMode>,
);
