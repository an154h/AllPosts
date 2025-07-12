import {StrictMode} from 'react';
import { createRoot } from 'react-dom/client';

import './Posts-Exercise/index.css'
import App from './App';

const root = createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App/>
  </StrictMode>
);