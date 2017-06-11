import { createStore } from 'redux';
import reducer from './counter';

const store = createStore(reducer);
export default store;
