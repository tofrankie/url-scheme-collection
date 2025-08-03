import { createRoot } from 'react-dom/client'

import App from './app.tsx'

import '@/styles/global.css'

createRoot(document.getElementById('root')!).render(<App />)
