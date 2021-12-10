import logo from './logo.svg';
import './App.css';
import ViewSDKClient from './components/ViewSDKClient';
import React, { Component } from "react";

class App extends Component {
  constructor( props ){
      super( props );
      this.gotopage = this.gotopage.bind(this);
    }
     gotopage=(page)=>{
      //console.log(page)    
      //const viewSDKClient = new ViewSDKClient();
     if(this.viewSDKClient)
      this.viewSDKClient.gotopage(this.previewfilepromise,page)
  }
  componentDidMount() {
      const viewSDKClient = new ViewSDKClient();
      this.viewSDKClient=viewSDKClient;
    viewSDKClient.ready().then(() => {
          /* Invoke file preview */
          /* By default the embed mode will be Full Window */
         this.previewfilepromise=viewSDKClient.previewFile("pdf-div", {},this.props.url);
          
      });
     
  }

  render() {
      return (
  
      <div className="container">
        
         <div  className="layout"> <ul>
          <li><button onClick={(event)=>this.gotopage(5)}>go to page number 5</button></li>
          <li><button onClick={(event)=>this.gotopage(200)}>go to page number 200</button></li>
        </ul></div>
         
       <div id="pdf-div" className="full-window-div"/></div> );
  }
}
export default App;
