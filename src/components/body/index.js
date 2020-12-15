import React from "react";
import { Row, Col } from "react-bootstrap";
import shade from "./shade.png";
import "./style.css";

export default function body() {
  return (
    <Row className="body gif justify-content-md-center">
      <Col className="center" md={6}>
        <img className="img" src={shade} alt="shade__" />
      </Col>

      <Col md={6}>
        <h2 className=" welcome">WELCOME TO MY SPACE</h2>

        <Row className="resume">
          <Col className="a center circle" >
            <p className="text2 center2">MY RESUME</p>
          </Col>
          <Col className="b center circle" >
            <p className="text2 center2">MY ARTICLES</p>
          </Col>
          <Col className="c center circle" >
            <p className="text2 center2">MY SKILLS</p>
          </Col>
          
        </Row>

        <p>
          I am a Business student on most days. On this space i share my ideas
          and observations about life while trying to navigate the business
          world. I have lived many lives so to speak, and these experiences
          continuously shape me into my best authentic self. Stay a bit longer
          and learn more about me and my works. Feel free to contact me for work
          collaborations. xoxo
        </p>
      </Col>
    </Row>
  );
}

var Circle = React.createClass({
  render:function(){
    var circleStyle = {
      padding:10,
      margin:20,
      display:"inline-block",
      backgroundColor: this.props.bgColor,
      borderRadius: "50%",
      width:100,
      height:100,
    };
    return (
      <div style={circleStyle}>
      </div>
    );
  }
});
// var colors = ["#393E41", "#E94F37", "#1C89BF", "#A1D363",
//                  "#85FFC7", "#297373", "#FF8552", "#A40E4C"];

// var renderData = [];

// for (var i = 0; i < colors.length; i++) {
//   var color = colors[i];
//   renderData.push(<Circle key={i + color} bgColor={color}/>);
// }
// var destination = document.querySelector("#container");

// ReactDOM.render(
//   <div>
//     {renderData}
//   </div>,
//   destination
// );



// #container {
//   padding:50px;
//   background-color:#FFF;
// }

// https://codepen.io/piratheepan/pen/mmKYav?css-preprocessor=none
