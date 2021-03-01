import React from 'react';
import ReactDOM from 'react-dom';
import store from './redux/store';
import App from './App';
import {Provider} from 'react-redux';
import 'moment/locale/ru';
import {Router} from "react-router-dom";
import {createBrowserHistory} from "history";
import * as serviceWorker from './serviceWorker';

const history = createBrowserHistory();

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
                <App/>
        </Router>
    </Provider>,
    document.getElementById('root')
);

serviceWorker.unregister();
