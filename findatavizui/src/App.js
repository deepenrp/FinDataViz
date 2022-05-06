import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

// import './styles/App.css';
import Nav from './components/Nav';
import OverallMarket from './components/OverallMarket';
import StockCompany from './components/StockCompany';
import Correlations from './components/Correlations';

function App() {
  return (

    <Router>
      <div>

        <header class="sticky-top shadow">
          <Nav />
        </header>

        <body>
          <Routes>
            <Route path="/market" element={<OverallMarket />} />
            <Route path="/stock" element={<StockCompany />} />
            <Route path="/correlations" element={<Correlations />} />
          </Routes>
        </body>

      </div>
    </Router>
  );
}

export default App;
