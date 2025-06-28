import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './pages/Main/Index';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import TestPage from './pages/TestPage';

function DevelopApp() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/JobScape/" element={<Main />} />
        <Route path="/test" element={<TestPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default DevelopApp;
