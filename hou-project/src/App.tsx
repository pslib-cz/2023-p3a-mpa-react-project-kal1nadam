// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import Kitchen from './components/Kitchen';
import Bathroom from './components/Bathroom';
import Playroom from './components/Playroom';
import Bedroom from './components/Bedroom';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/kitchen">Kitchen</Link>
            </li>
            <li>
              <Link to="/bathroom">Bathroom</Link>
            </li>
            <li>
              <Link to="/playroom">Playroom</Link>
            </li>
            <li>
              <Link to="/bedroom">Bedroom</Link> {/* Keep this link as is */}
            </li>
          </ul>
        </nav>
        
        <Routes>
          <Route path="/kitchen" element={<Kitchen />} />
          <Route path="/bathroom" element={<Bathroom />} />
          <Route path="/playroom" element={<Playroom />} />
          <Route path="/bedroom" element={<Bedroom />} />
          <Route path="/" element={<Navigate replace to="/bedroom" />} /> {/* Redirect from base URL to /bedroom */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
