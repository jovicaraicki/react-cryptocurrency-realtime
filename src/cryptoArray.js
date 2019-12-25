import btc from './images/btc.png';
import eth from './images/eth.png';
import dash from './images/dash.png';
import bch from './images/bch.png';
import ltc from './images/ltc.png';
import usdt from './images/usdt.png';
import eos from './images/eos.png';
import xrp from './images/xrp.png';

// http://pro-theme.com/wordpress/bitcrypt/wp-content/uploads/revslider/cryptoslider/btc.png
// http://pro-theme.com/wordpress/bitcrypt/wp-content/uploads/revslider/cryptoslider/eth.png
// http://pro-theme.com/wordpress/bitcrypt/wp-content/uploads/revslider/cryptoslider/dash.png

let iconArray = {
    "images":[
        {
          "ticker":"BTC",
          "name":"Bitcoin",
          "url":btc
        },
        {
          "ticker":"ETH",
          "name":"Ethereum",
          "url":eth
        },
        {
          "ticker":"DASH",
          "name":"Dash",
          "url":dash
        },
        {
          "ticker":"BCH",
          "name":"Bitcoin Cash",
          "url":bch
        },
        {
          "ticker":"LTC",
          "name":"Litecoin",
          "url":ltc
        },
        {
          "ticker":"USDT",
          "name":"Tether",
          "url":usdt
        },
        {
          "ticker":"EOS",
          "name":"Eos",
          "url":eos
        },
        {
          "ticker":"XRP",
          "name":"Xrp",
          "url":xrp
        }
      ]
}

export default iconArray;