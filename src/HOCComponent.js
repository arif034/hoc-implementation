import { Component } from "react";

const HOCComponent = (OldComponent) => {
  class NewComponent extends Component {
    constructor(props) {
      super(props);
      this.state = {
        count: 0
      };
    }
    incrementCount = () => {
      this.setState((prevState) => {
        return { count: prevState.count + 1 };
      });
    };

    decrementCount = () => {
      this.setState((prevState) => {
        return { count: prevState.count - 1 };
      });
    };

    reset = () => {
      this.setState(() => {
        return { count: 0 };
      });
    };

    render() {
      return (
        <OldComponent
          count={this.state.count}
          incrementCount={this.incrementCount}
          decrementCount={this.decrementCount}
          reset={this.reset}
        />
      );
    }
  }
  return NewComponent;
};
export default HOCComponent;
