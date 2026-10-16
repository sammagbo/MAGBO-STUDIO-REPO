import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'

// Fonts, bundled locally: Funnel Display for titles, Funnel Sans for text. The site uses no other font.
import '@fontsource/funnel-display/500.css';
import '@fontsource/funnel-display/600.css';
import '@fontsource/funnel-sans/400.css';
import '@fontsource/funnel-sans/500.css';

import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
      <React.StrictMode>
            <App />
      </React.StrictMode>,
)
