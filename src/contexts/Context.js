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
    currency: '$',
    availableCryptos: ['BTC','ETH','USDT','BCH','LTC','DASH','EOS','XRP']
});

export default Context;