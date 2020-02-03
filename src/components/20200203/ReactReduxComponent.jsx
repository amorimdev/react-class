import React from "react";
import { createStore, combineReducers } from "redux";
import { Provider, connect } from "react-redux";

// Actions
const incrementAction = () => ({
  type: "COUNT_INCREMENT"
});

const decrementAction = () => ({
  type: "COUNT_DECREMENT"
});

// Component
const ChildrenComponent = ({ increment, decrement }) => (
  <div>
    <h1>React Redux Component!</h1>
    <button onClick={increment}>Increment</button>
    <button onClick={decrement}>Decrement</button>
  </div>
);

const BastardComponent = ({ count }) => (
  <div>
    <h1>I'm bastard!</h1>
    <p>You clicked {count} times</p>
  </div>
);

// Map Store to Container Props
const mapStateToProps = state => ({
  count: state.count
});

// Map Dispatch to Container Props
const mapDispatchToProps = dispatch => ({
  increment: () => dispatch(incrementAction()),
  decrement: () => dispatch(decrementAction())
});

// Container
const ChildrenContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ChildrenComponent);

const BastardContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(BastardComponent);

// Reducer
const count = (state = 0, action) => {
  switch (action.type) {
    case "COUNT_INCREMENT":
      return state + 1;
    case "COUNT_DECREMENT":
      return state - 1;
    default:
      return state;
  }
};

// Combine Reducers
const reducers = combineReducers({
  count
});

// Store
const store = createStore(reducers);

// Provider
export default () => (
  <Provider store={store}>
    <ChildrenContainer />
    <BastardContainer />
  </Provider>
);
