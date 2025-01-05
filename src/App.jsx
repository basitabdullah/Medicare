import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Services from './pages/Services';
import Doctors from './pages/Doctors';
import About from './pages/About';
import './styles/main.scss';
import Diagnostics from './pages/Diagonastic';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/about" element={<About />} />
        <Route path="/diagnostics" element={<Diagnostics />} />
      </Routes>
    </Router>
  );
}

export default App;