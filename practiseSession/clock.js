import React from "react";
import { ReactDOM } from "react";

class Clock extends React.Component{

    constructor(props) {
      super(props);
      this.state={
        date : new Date()
      }
      
    }
  
    componentDidMount(){
      this.timerId = setInterval(
        () => this.tick() , 1000
      );
    }
    componentWillUnmount(){
      clearInterval(this.timerId);
    }
  
    tick(){
      this.setState({date : new Date()});
    }
  
    render(){
      return (
        <div>
          <h1>Hello ! it is {this.state.date.toLocaleTimeString()} </h1>
        </div>
      )
    }
  }
  
  function App(){
    return (
      <div>
        <Clock />
        <Clock />
        <Clock />
      </div>
    );
  }
  
  ReactDOM.render(App(),document.getElementById("root11"));