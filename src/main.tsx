import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './style/index.css';
import App from './components/App.tsx';
import { ThemeProvider } from './context/ThemeContext.tsx';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from './services/tanstack/queryClient.ts';
import { BrowserRouter } from 'react-router';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <BrowserRouter basename="/task-react-routing">
          <App />
        </BrowserRouter>
      </ThemeProvider>
    </QueryClientProvider>
  </StrictMode>,
);
