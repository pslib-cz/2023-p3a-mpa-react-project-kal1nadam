import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import HouProvider from './context/HouContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HouProvider>
      <App />
    </HouProvider>
  </React.StrictMode>,
)
