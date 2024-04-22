// src/App.tsx
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Kitchen from './components/Kitchen';
import Bathroom from './components/Bathroom';
import Playroom from './components/Playroom';
import Bedroom from './components/Bedroom';
import NavigationButtons from './components/NavigationButtons';
import Hou from './components/Hou';

function App() {
  return (
    <Router>
      <div>
        <NavigationButtons />
        <Routes>
          <Route path="/kitchen" element={<Kitchen />} />
          <Route path="/bathroom" element={<Bathroom />} />
          <Route path="/playroom" element={<Playroom />} />
          <Route path="/bedroom" element={<Bedroom />} />
          <Route path="/" element={<Navigate replace to="/bedroom" />} /> {/* Redirect from base URL to /bedroom */}
        </Routes>

        <Hou />

      </div>
    </Router>
  );
}

export default App;
