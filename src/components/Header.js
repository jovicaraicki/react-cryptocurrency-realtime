import React, { useContext } from 'react';
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavbarToggler,
  MDBCollapse,
  MDBNavItem,
  MDBNavLink,
  MDBView,
  MDBMask
} from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';
import NumberFormat from 'react-number-format';

import Context from '../contexts/Context';

import * as bg from '../styles/header.jpg';

const Header = props => {
  const { state, dispatch } = useContext(Context);
  const { collapse, cryptos, crypto, currency, ticker } = state;

  const onClick = () => {
    dispatch({ type: "COLLAPSE", payload: collapse });
  };

  const onUsd = (ticker, key, pcthour, pct24h) => {
    dispatch({ type: 'CHANGE_CURRENCY', payload: 'USD' });
    dispatch({ type: 'CHANGE_PREFIX', payload: '$' });
    dispatch({ type: 'CHANGE_TICKER', payload: ticker });
    dispatch({ type: 'CHANGE_KEY', payload: key });
    dispatch({ type: 'PERCENT_COLOR_HOUR', payload: pcthour > 0 ? 'green' : pcthour < 0 ? 'red' : 'white' });
    dispatch({ type: 'PERCENT_COLOR_24H', payload: pct24h > 0 ? 'green' : pct24h < 0 ? 'red' : 'white' });
  }

  const onEur = (ticker, key, pcthour, pct24h) => {
    dispatch({ type: 'CHANGE_CURRENCY', payload: 'EUR' });
    dispatch({ type: 'CHANGE_PREFIX', payload: '€' });
    dispatch({ type: 'CHANGE_TICKER', payload: ticker });
    dispatch({ type: 'CHANGE_KEY', payload: key });
    dispatch({ type: 'PERCENT_COLOR_HOUR', payload: pcthour > 0 ? 'green' : pcthour < 0 ? 'red' : 'white' });
    dispatch({ type: 'PERCENT_COLOR_24H', payload: pct24h > 0 ? 'green' : pct24h < 0 ? 'red' : 'white' });
  }

  return (
    <div>
      <header>
        <Router>
          <MDBNavbar color="black" dark expand="md" fixed="top">
            <MDBNavbarBrand href="/">
              <strong>Cryptocurrency</strong>
            </MDBNavbarBrand>
            {!state.isWideEnough && <MDBNavbarToggler onClick={onClick} />}
            <MDBCollapse isOpen={state.collapse} navbar>
              <MDBNavbarNav left>
                <MDBNavItem active>
                  <MDBNavLink to="/">Home</MDBNavLink>
                </MDBNavItem>
              </MDBNavbarNav>
            </MDBCollapse>
          </MDBNavbar>
        </Router>
        <MDBView src={bg}>
          <MDBMask
            overlay="black-light"
            className="flex-center flex-column text-white text-center"
          >
            <div id="crypto-container">
              <div className="coin-price">
                <NumberFormat
                  value={cryptos[0] && cryptos[0][1] === ticker ? (crypto === 'USD' ? cryptos[0][0].USD.PRICE : cryptos[0][0].EUR.PRICE) : cryptos[0] && cryptos[0][0].USD.PRICE}
                  displayType={"text"}
                  decimalprecision="2"
                  thousandSeparator={true}
                  prefix={cryptos[0] && cryptos[0][1] === ticker ? currency : '$'}
                />
              </div>
              <div className="details">
                <div className="img-container">
                  <img
                    src={cryptos[0] && cryptos[0][2].url}
                    alt="Header"
                    className="img-fluid"
                  />
                </div>
                {cryptos[0] && <div className='coin-name'>{cryptos[0][2].name} ({cryptos[0][2].ticker})</div>}
                {
                  <div
                    className="hour hour1"
                    style={cryptos[0] && cryptos[0][0][crypto].CHANGEPCTHOUR > 0 ? { color: 'green' } : cryptos[0] && cryptos[0][0][crypto].CHANGEPCTHOUR < 0 ? { color: 'red' } : { color: 'white' } }
                  >
                    1h<span>{cryptos[0] && cryptos[0][0][crypto].CHANGEPCTHOUR.toFixed(2)}%</span>
                  </div>
                }
                {
                  <div
                    className="hour hour24"
                    style={cryptos[0] && cryptos[0][0][crypto].CHANGEPCT24HOUR > 0 ? { color: 'green' } : cryptos[0] && cryptos[0][0][crypto].CHANGEPCT24HOUR < 0 ? { color: 'red' } : { color: 'white' } }
                  >
                    24h<span>{cryptos[0] && cryptos[0][0][crypto].CHANGEPCT24HOUR.toFixed(2)}%</span>
                  </div>
                }
                <div className='buttons-header'>
                  <span id="round-left" onClick={() => onUsd(cryptos[0][2].ticker)}>
                    <span style={crypto === 'USD' ? {opacity: '1', border: '1px solid white'} : {opacity: '0.5'}}>
                      <span>USD</span>
                    </span>
                  </span>
                  <span id="round-right" onClick={() => onEur(cryptos[0][2].ticker)}>
                    <span style={crypto === 'EUR' ? {opacity: '1', border: '1px solid white'} : {opacity: '0.5'}}>
                      <span>EUR</span>
                    </span>
                  </span>
                </div>
              </div>
              
            </div>
          </MDBMask>
        </MDBView>
      </header>

        <main className='main-header'>
          {Object.keys(cryptos).map((key) => (
            <div key={key} className={`box-header-${key}`}>
                <div className="grid-item">
                  <div className="img-container-grid">
                    <img
                      src={cryptos[key] && cryptos[key][2].url}
                      alt="Header"
                      className="img-fluid-grid"
                    />
                  </div>
                  <div className='coin-name-grid'>
                    {cryptos[key] && <div>{cryptos[key][2].name} ({cryptos[key][2].ticker})</div>}
                  </div>
                  <div className="coin-price-grid">
                    <NumberFormat
                      value={cryptos[key] && (crypto === 'USD' ? cryptos[key][0].USD.PRICE : cryptos[key][0].EUR.PRICE)}
                      displayType={"text"}
                      decimalprecision="2"
                      thousandSeparator={true}
                      prefix={currency}
                    />
                  </div>
                  {
                    <div
                      className="hour-grid"
                      style={cryptos[key] && cryptos[key][0][crypto].CHANGEPCTHOUR > 0 ? { color: 'green' } : cryptos[key][0][crypto].CHANGEPCTHOUR < 0 ? { color: 'red' } : { color: 'purple' } }
                    > 
                      <span>1h</span><span>{cryptos[key] && cryptos[key][0][crypto].CHANGEPCTHOUR.toFixed(2)}%</span><span>{cryptos[key] && cryptos[key][0][crypto].CHANGEHOUR.toFixed(2)}{currency}</span>
                    </div>
                  }
                  {
                    <div
                      className="hour24-grid"
                      style={cryptos[key] && cryptos[key][0][crypto].CHANGEPCT24HOUR > 0 ? { color: 'green' } : cryptos[key][0][crypto].CHANGEPCT24HOUR < 0 ? { color: 'red' } : { color: 'purple' } }
                    >
                      <span>24h</span><span>{cryptos[key] && cryptos[key][0][crypto].CHANGEPCT24HOUR.toFixed(2)}%</span><span>{cryptos[key] && cryptos[key][0][crypto].CHANGE24HOUR.toFixed(2)}{currency}</span>
                    </div>
                  }
                  <div className='hour-group'>
                  {
                    <div className='openhour-grid'>
                      <span>Open hour: </span><span className='prices'>{cryptos[0] && cryptos[key][0][crypto].OPENHOUR}</span>
                    </div>
                  }
                  {
                    <div className='lowhour-grid'>
                      <span>Low hour: </span><span className='prices'>{cryptos[0] && cryptos[key][0][crypto].LOWHOUR}</span>
                    </div>
                  }
                  {
                    <div className='highhour-grid'>
                      <span>High hour: </span><span className='prices'>{cryptos[0] && cryptos[key][0][crypto].HIGHHOUR}</span>
                    </div>
                  }
                  </div>
                  <div className='hour24-group'>
                  {
                    <div className='open24hour-grid'>
                      Open 24 hour: <span className='prices'>{cryptos[0] && cryptos[key][0][crypto].OPEN24HOUR}</span>
                    </div>
                  }
                  {
                    <div className='low24hour-grid'>
                      Low 24 hour: <span className='prices'>{cryptos[0] && cryptos[key][0][crypto].LOW24HOUR}</span>
                    </div>
                  }
                  {
                    <div className='high24hour-grid'>
                      High 24 hour: <span className='prices'>{cryptos[0] && cryptos[key][0][crypto].HIGH24HOUR}</span>
                    </div>
                  }
                  </div>
                  {
                    <div className='supply'>
                      Supply<span>{cryptos[0] && cryptos[key][0][crypto].SUPPLY}</span>
                    </div>
                  }
                  {
                    <div className='last-update'>
                      Last volume<span>{cryptos[0] && cryptos[key][0][crypto].LASTVOLUME}</span>
                      Last market<span>{cryptos[0] && cryptos[key][0][crypto].LASTMARKET}</span>
                    </div>
                  }
                </div>
            </div>
          ))}
        </main>
    </div>
  );
};

export default Header;
