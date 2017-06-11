import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import SimpleCounter from './components/SimpleCounter';
import reducer from './reducers/counter';

const store = createStore(reducer);

function App(props) {
    return <Provider store={store}>
        <SimpleCounter />
    </Provider>
}

ReactDOM.render(<App />, document.getElementById('root'));
