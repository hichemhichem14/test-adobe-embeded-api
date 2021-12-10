import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// the url is the url of the pdf we want to load 
//http://localhost:3000/pdf.pdf

ReactDOM.render(
  <React.StrictMode>
    <App url="http://localhost:3000/pdf.pdf"  />
  </React.StrictMode>,
  document.getElementById('root')
);
// you can try this url https://documentcloud.adobe.com/view-sdk-demo/PDFs/Bodea%20Brochure.pdf  and use this code :
/* 
ReactDOM.render(
  <React.StrictMode>
    <App url="https://documentcloud.adobe.com/view-sdk-demo/PDFs/Bodea%20Brochure.pdf"  />
  </React.StrictMode>,
  document.getElementById('root')
);
*/

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
