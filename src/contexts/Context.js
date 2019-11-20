import { createContext } from 'react';

const Context = createContext({
    cryptos: [],
    percent: [],
    response: false,
    loaded: false,
    collapse: false,
    isWideEnough: false,
    crypto: 'USD',
    ticker: null,
    currency: '$'
});

export default Context;