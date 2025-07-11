import { createRoot } from 'react-dom/client'
import './i18n'
import App from './App.tsx'
import './index.css'
import { ThemeProvider } from './components/providers/theme-provider'

createRoot(document.getElementById('root')!).render(
  <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
    <App />
  </ThemeProvider>
)
