import './App.css';
import Home from './Pages/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import KVKK from './Pages/kvkk';
import SorumlulukReddi from './Pages/SorumlulukReddi';
import CerezPolitikasi from './Pages/CerezPolitikasi';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/kvkk" element={<KVKK />} />
          <Route path="/sorumluluk-reddi" element={<SorumlulukReddi />} />
          <Route path="/cerez-politikasi" element={<CerezPolitikasi />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
