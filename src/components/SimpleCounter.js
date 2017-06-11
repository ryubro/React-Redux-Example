import React from 'react';
import Button from './Button';
import store from '../reducers/store';
import { increaseCounter, decreaseCounter } from '../actions/counter';

function SimpleCounter(props) {
  const { counter, increaseCounter, decreaseCounter } = props;
  return <div>
    <h1>{counter}</h1>
    <Button label="+" onClick={increaseCounter}/>
    <Button label="-" onClick={decreaseCounter}/>
  </div>;
}

export default class SimpleCounterContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
  }
  componentDidMount() {
    store.subscribe(() => this.onStoreChange());
  }
  onStoreChange() {
    this.setState(store.getState());
  }
  render() {
    const dispatchIncreaseCounter = () => store.dispatch(increaseCounter());
    const dispatchDecreaseCounter = () => store.dispatch(decreaseCounter());
    return <SimpleCounter counter={this.state.counter}
             							increaseCounter={dispatchIncreaseCounter}
             							decreaseCounter={dispatchDecreaseCounter}/>;
  }
}
