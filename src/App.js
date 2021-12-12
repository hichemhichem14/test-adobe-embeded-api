import './App.css';
import React from "react";
import {BrowserRouter as Router,Route}  from "react-router-dom"
import Loadpdf from "./components/Loadpdf"
import Notfound from "./components/Notfound"
function App() {
  return (
    
<Router>
  <Route exact path={["/", "/test1"]}  render={props => <Loadpdf url="http://localhost:3000/pdf.pdf"/>}></Route>
  <Route exact path={["/test2"]}  render={props => <Loadpdf url="https://documentcloud.adobe.com/view-sdk-demo/PDFs/Bodea%20Brochure.pdf"/>} /*component={Loadpdf}*/  ></Route>
  <Route path="/*"  component={Notfound}></Route>
</Router>
  );
}

export default App;