import { Component } from "react";
import HOCComponent from "./HOCComponent.js";

class Counter extends Component {
  render() {
    return (
      <div>
        {this.props.count}
        <br />
        <br />
        <button onClick={this.props.incrementCount}>Increment</button>
        <br />
        <br />
        <button onClick={this.props.decrementCount}>Decrement</button>
        <br />
        <br />
        <button onClick={this.props.reset}>Reset</button>
      </div>
    );
  }
}

export default HOCComponent(Counter);
