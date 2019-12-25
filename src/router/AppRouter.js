import React, { useEffect, useContext, useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import axios from 'axios';
import Context from '../contexts/Context';
import App from '../App';
import Header from '../components/Header';
import cryptoArray from '../cryptoArray';
import Footer from '../components/Footer';

const AppRouter = () => {
    const [counter, setCounter] = useState(0);
    const {state, dispatch} = useContext(Context);
    // console.log(state.availableCryptos.toString());

    const availableCryptos = state.availableCryptos.toString();

    useEffect(() => {
      axios.get(`https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${availableCryptos}&tsyms=USD,EUR,GBP,CHF,CAD,RSD&api_key=f49d870e368eea9dacece44f8adee854ac99f5b558b3958161f29cbe17a3b918`)
        .then(res => {
          const socketArray = [];
            Object.keys(res.data.RAW).map(key => {
                socketArray.push([
                    res.data.RAW[key],
                    key,
                    cryptoArray.images.find(i => i.ticker === key)
                ])
                dispatch({ type: 'FETCH_CRYPTOS', payload: socketArray });

                return socketArray;
            });
        });

        const interval = setInterval(() => {
          setCounter(counter => counter + 1);
        }, 30000);

        return () => {
          clearInterval(interval);
        };
    }, [counter]);

    return (
        <BrowserRouter>
            <div>
                <Header 
                    cryptos={state.cryptos}
                />
                <Switch>
                    <Route path='/' component={App} exact={true} />
                </Switch>
                <Footer />
            </div>
        </BrowserRouter>
    )
}

export default AppRouter;