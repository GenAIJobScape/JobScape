import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './pages/Main/Index';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Hypothesis01 from './pages/Hypothesis01/Index';
import Hypothesis02 from './pages/Hypothesis02/Index';
import Hypothesis03 from './pages/Hypothesis03/Index';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navigation />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/hypothesis/01" element={<Hypothesis01 />} />
        <Route path="/hypothesis/02" element={<Hypothesis02 />} />
        <Route path="/hypothesis/03" element={<Hypothesis03 />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
