import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './pages/Main/Index';
import Footer from './components/Footer';
import Template from './pages/Template/Index';

function DevelopApp() {
  return (
    <Router>
      <Routes>
        <Route path="/JobScape/" element={<Main />} />
        <Route path="/JobScape/template" element={<Template />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default DevelopApp;
