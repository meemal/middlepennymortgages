import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import MortgagesPage from '../pages/MortgagesPage';
import '../index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MortgagesPage />
  </StrictMode>
);
