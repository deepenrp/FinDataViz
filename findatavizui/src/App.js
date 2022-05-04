import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import logo from './images/global.JPG';
import './styles/App.css';
import Nav from './components/Nav';
import OverallMarket from './components/OverallMarket';
import StockCompany from './components/StockCompany';
import Correlations from './components/Correlations';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Financial Data Visualization
          </p>

          <Nav />

          <Routes>
            <Route path="/market" element={<OverallMarket />} />
            <Route path="/stock" element={<StockCompany />} />
            <Route path="/correlations" element={<Correlations />} />
          </Routes>
        </header>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

      </div>
    </Router>
  );
}

export default App;
