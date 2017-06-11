import reducer from './counter';
// const { connect, Provider } = ReactRedux;
import { createStore, compose } from 'redux';
// const { default: thunkMiddleware } = ReduxThunk;

const store = createStore(reducer);
export default store;
