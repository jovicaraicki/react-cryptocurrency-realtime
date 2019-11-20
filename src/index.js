import React, { useContext, useReducer } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import AppRouter from './router/AppRouter';
import Context from './contexts/Context';
import reducer from './reducers/reducer';
import * as serviceWorker from './serviceWorker';

const Jsx = () => {
    const initialState = useContext(Context);
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <Context.Provider value={{ state, dispatch }}>
            <AppRouter />
        </Context.Provider>
    )
}

// ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Jsx />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
