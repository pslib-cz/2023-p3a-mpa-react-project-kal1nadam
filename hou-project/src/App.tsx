// src/App.tsx
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Kitchen from './components/Kitchen';
import Bathroom from './components/Bathroom';
import Playroom from './components/Playroom';
import Bedroom from './components/Bedroom';

const basename = process.env.NODE_ENV === 'production' ? new URL(process.env.PUBLIC_URL || 'https://pslib-cz.github.io/2023-p3a-mpa-react-project-kal1nadam/').pathname : '2023-p3a-mpa-react-project-kal1nadam/';

function App() {
  return (
    <Router basename={basename}>
      <div>
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
