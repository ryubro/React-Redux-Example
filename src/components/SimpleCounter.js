import React from 'react';
import Button from './Button';
import store from '../reducers/store';
import { increaseCounter, decreaseCounter } from '../actions/counter';

function SimpleCounter(props) {
  const { counter, increaseCounter, decreaseCounter } = props;
  console.log('What is increaseCounter herer', increaseCounter);
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
    console.log('This should be an action object:', increaseCounter());
    const increaseCounterFunc = () => store.dispatch(increaseCounter());
    const decreaseCounterFunc = () => store.dispatch(decreaseCounter());
    return <SimpleCounter counter={this.state.counter}
             							increaseCounter={increaseCounterFunc}
             							decreaseCounter={decreaseCounterFunc}/>;
  }
}
