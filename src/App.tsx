import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './pages/Main/Index';
import Navigation from './components/Navigation';

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </Router>
  );
}

export default App;
