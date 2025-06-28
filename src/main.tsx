import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import DevelopApp from './DevelopApp';
// import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <App /> */}
    <DevelopApp />
  </StrictMode>
);
