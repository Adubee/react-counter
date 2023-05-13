import { Component } from "react";
import ClassCounter from "./ClassCounter";
import './assets/App.css'
import FunctionCounter from "./FunctionCounter";


class App extends Component {
  divStyles = {
    width: '300px',
    borderRadius:'8px',
    textAlign: 'center',
    margin: 'auto',
    top: '100px',
    position: 'relative',
    padding: '6px',
    boxShadow: 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px',
    background: 'white'
  }
  render() {
    return (
      <div style={this.divStyles}>
        <h1>Class Counter</h1>
        <ClassCounter/>
        <h1>Function Counter</h1>
        <FunctionCounter/>
      </div>
    )
  }
}


export default App