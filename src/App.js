import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './NavBar';

import RetrunComponent from './ReturnComponent';
import AlphaComponent from './AlphaComponent';
import VolatilityComponent from './VolatilityComponent';
import { AppProvider } from './AppContext';
import Home from './Home';

function App() {
  return (
    <AppProvider>
      <Router>
        <div>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/return" element={<RetrunComponent />} />
            <Route path="/alpha" element={<AlphaComponent />} />
            <Route path="/volatility" element={<VolatilityComponent />} />
          </Routes>
        </div>
      </Router>
    </AppProvider>
  );
}
export default App;
