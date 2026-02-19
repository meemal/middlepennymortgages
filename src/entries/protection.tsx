import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import ProtectionPage from '../pages/ProtectionPage';
import '../index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ProtectionPage />
  </StrictMode>
);
