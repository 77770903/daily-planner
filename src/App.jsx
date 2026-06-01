import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './hooks/useTheme'
import AppShell from './components/layout/AppShell'
import TodayPage from './pages/TodayPage'
import StatsPage from './pages/StatsPage'
import TemplatePage from './pages/TemplatePage'
import SettingsPage from './pages/SettingsPage'

function App() {
  return (
    <ThemeProvider>
      <Router>
        <AppShell>
          <Routes>
            <Route path="/" element={<TodayPage />} />
            <Route path="/stats" element={<StatsPage />} />
            <Route path="/templates" element={<TemplatePage />} />
            <Route path="/settings" element={<SettingsPage />} />
          </Routes>
        </AppShell>
      </Router>
    </ThemeProvider>
  )
}

export default App
