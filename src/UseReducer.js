import { useReducer } from "react";
function UseReducer() {
  const initialState = 0;
  const reducer = (state, action) => {
    switch (action) {
      case `increment`: {
        return state + 1;
      }
      case `decrement`: {
        return state - 1;
      }
      case `reset`: {
        return initialState;
      }
      default:
        return state;
    }
  };
  const [count, dispatch] = useReducer(initialState, reducer);
  return <div>{count}</div>;
}
export default UseReducer;
