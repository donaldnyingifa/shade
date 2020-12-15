import React from "react";
import "./home.css";
// import { Container } from "react-bootstrap";
import vidB from "./images/bgvid.mp4"

// import Header from "../components/header";
// import Body from "../components/body";
import Footer from "../components/footer";

class App extends React.Component{
  render(){
    return (
      <React.Fragment>
         <video autoPlay="autoplay" loop="loop" muted>
           <source src={vidB} type="video/mp4" />    
          </video>
          {this.props.children}
        
  
        <Footer />
      </React.Fragment>
    );
  }
  
}

export default App;
