import { Component } from "react";

class ClassCounter extends Component {
   state = {
      count: 0,
   }
   handleIncrease = () => {
      this.setState({count: this.state.count + 1})
   }
   handleDecrease = () => {
      this.setState({count: this.state.count - 1})
   }
   
  render() {
   return (
      <>
            <h1>{this.state.count}</h1>
         <button onClick={this.handleIncrease}>Increase</button>
         <button onClick={this.handleDecrease}>Decrease</button>
      </>
   )
  }
}

export default ClassCounter;
