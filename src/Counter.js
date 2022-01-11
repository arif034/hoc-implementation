import { Component } from "react";
import HOCComponent from "./HOCComponent.js";

class Counter extends Component {
  render() {
    return (
      <div>
        {this.props.count}
        <br />
        <br />
        <button onClick={this.props.setCount}>Increment</button>
      </div>
    );
  }
}

export default HOCComponent(Counter);
