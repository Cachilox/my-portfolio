import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.tsx'

import "aos/dist/aos.css"
import "remixicon/fonts/remixicon.css"

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <div className="bg-gray-100 dark:bg-gray-900 transition-colors">
      <App />
    </div>
  </React.StrictMode>,
)
