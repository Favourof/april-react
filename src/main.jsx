import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './button.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from './context/Theme/ThemeProvider.jsx'
import { AuthProvider } from './context/Auth/AuthProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <ThemeProvider>

          <App />

        </ThemeProvider>
      </AuthProvider>
    </BrowserRouter>


  </StrictMode>,
)
