import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import ComplaintsPage from '../pages/ComplaintsPage';
import '../index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ComplaintsPage />
  </StrictMode>
);
