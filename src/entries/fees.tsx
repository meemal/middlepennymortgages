import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import FeesPage from '../pages/FeesPage';
import '../index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <FeesPage />
  </StrictMode>
);
