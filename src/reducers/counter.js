// { counter: number }

const defaultState = {
	counter: 0
};

export default function counter(state = defaultState, action) {
  switch (action.type) {
    case 'INCREASE_COUNTER':
      return { counter: state.counter + 1 };
    case 'DECREASE_COUNTER':
      return { counter: state.counter - 1 };
    default:
      return state;
  }
}