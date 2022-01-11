import { Component } from "react";

const HOCComponent = (OldComponent) => {
  class NewComponent extends Component {
    constructor(props) {
      super(props);
      this.state = {
        count: 0
      };
    }
    setCount = () => {
      this.setState((prevState) => {
        return { count: prevState.count + 1 };
      });
    };

    render() {
      return <OldComponent count={this.state.count} setCount={this.setCount} />;
    }
  }
  return NewComponent;
};
export default HOCComponent;
