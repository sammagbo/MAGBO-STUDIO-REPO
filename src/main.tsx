import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'

// Fonts (Loaded locally for max performance, no render blocking)
import '@fontsource/syne/400.css';
import '@fontsource/syne/600.css';
import '@fontsource/syne/700.css';
import '@fontsource/syne/800.css';
import '@fontsource/space-grotesk/300.css';
import '@fontsource/space-grotesk/400.css';
import '@fontsource/space-grotesk/500.css';
import '@fontsource/space-grotesk/600.css';
import '@fontsource/space-grotesk/700.css';
// Note: falling back to a similar mono font if jetbrains-mono is not installed, substituting with standard monospace in tailwind until installed.

import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
      <React.StrictMode>
            <App />
      </React.StrictMode>,
)
