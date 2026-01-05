import { Routes, Route } from 'react-router-dom'
import './App.css'

import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { Home } from './Pages/Home'
import { Login } from './components/Account/Login'
import { Signup } from './components/Account/Signup'
import { ForgotPassword } from './components/Account/ForgotPassword'
import { ContactUs } from './Pages/ContactUs'
import { HelpCenter } from './Pages/HelpCenter'
import { Dashboard } from './Dashboard/Dashboard'
import { Leaderboard } from './Dashboard/Leaderboard'
import { Rewards } from './Dashboard/Rewards'
import { CashOut } from './Dashboard/CashOut'
import { PrivacyPolicy } from './Pages/PrivacyPolicy'
import { TermsOfService } from './Pages/TermsOfService'

function App() {
  return (
    <>
      <Routes>
        {/* LOGIN PAGE (only login show) */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/ForgotPassword" element={<ForgotPassword />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/HelpCenter" element={<HelpCenter />} />
        <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
        <Route path="/TermsOfService" element={<TermsOfService />} />

        <Route path="/Leaderboard" element={<Leaderboard />} />
        <Route path="/Rewards" element={<Rewards />} />
        <Route path="/CashOut" element={<CashOut />} />

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
