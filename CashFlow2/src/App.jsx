import { Routes, Route } from 'react-router-dom'
import './App.css'

import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { Home } from './Pages/Home'
import { Login } from './components/Account/Login'
import { Signup } from './components/Account/Signup'
import { Dashboard } from './Dashboard/Dashboard'
import { Leaderboard } from './Dashboard/Leaderboard'

function App() {
  return (
    <>
      <Routes>
        {/* LOGIN PAGE (only login show) */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/Leaderboard" element={<Leaderboard />} />

        <Route path="/dashboard" element={<Dashboard />} />

        {/* HOME & OTHER PAGES */}
        <Route
          path="/"
          element={
            <>
              <Header />
              <Home />
              <Footer />
            </>
          }
        />
      </Routes>
    </>
  )
}

export default App
