import React from 'react';
import { connect } from 'react-redux';
import Button from './Button';
import { increaseCounter, decreaseCounter } from '../actions/counter';

function SimpleCounter(props) {
  const { counter, increaseCounter, decreaseCounter } = props;
  return <div>
    <h1>{counter}</h1>
    <Button label="+" onClick={increaseCounter}/>
    <Button label="-" onClick={decreaseCounter}/>
  </div>;
}

// Thanks to the `Provider` component and the `store` prop, this function will be supplied the `state` of the store
// as the first argument, when the function is supplied to the `connect` function as the first argument.
// Then we return an object in which the key is the name of props and the value is processed data of the state.
function mapStateToProps(state) {
  return {
    counter: state.counter
  }
}

// Thanks to the `Provider` component and the `store` prop, this function will be supplied the `dispatch` of the store
// as the first argument, when the function is supplied to the `connect` function as the second argument.
// Then we return an object in which the key is the name of props and the value is functions that dispatch actions.
function mapDispatchToProps(dispatch) {
  return {
    increaseCounter: () => dispatch(increaseCounter()),
    decreaseCounter: () => dispatch(decreaseCounter())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SimpleCounter);
