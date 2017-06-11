import reducer from './counter';
// const { connect, Provider } = ReactRedux;
const { createStore, compose } = Redux;
// const { default: thunkMiddleware } = ReduxThunk;

const store = createStore(reducer);
export default store;
