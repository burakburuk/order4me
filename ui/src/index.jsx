import 'antd/dist/antd.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './containers/app';

import initialState from './state/state';
import configureStore from './state/store';
import rootSaga from './state/sagas';
import { configureMessage } from './utils/message';
import { BrowserRouter as Router } from 'react-router-dom';

const store = configureStore(initialState);
store.runSaga(rootSaga);
configureMessage();

const container = document.getElementById('app');
ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>,
    container,
);
