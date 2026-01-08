import { Routes, Route, useLocation } from "react-router-dom";
import "./App.css";

import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

import { Home } from "./Pages/Home";
import { ContactUs } from "./Pages/ContactUs";
import { HelpCenter } from "./Pages/HelpCenter";
import { PrivacyPolicy } from "./Pages/PrivacyPolicy";
import { TermsOfService } from "./Pages/TermsOfService";

import { Login } from "./components/Account/Login";
import { Signup } from "./components/Account/Signup";
import { ForgotPassword } from "./components/Account/ForgotPassword";

import { Dashboard } from "./Dashboard/Dashboard";
import { Leaderboard } from "./Dashboard/Leaderboard";
import { Profile } from "./Dashboard/Profile";
import { ActivityHistory } from "./Dashboard/ActivityHistory";
import { FeaturedOffersPages } from "./Dashboard/FeaturedOffersPages";
import { OfferwallsPages } from "./Dashboard/OfferwallsPages";
import { Rewards } from "./Dashboard/Rewards";
import { CashOut } from "./Dashboard/CashOut";
import { Settings } from "./Dashboard/Settings";
import { Affilliates } from "./Dashboard/Affilliates";
import { NotificationPages } from "./Dashboard/NotificationPages";

function App() {
  const location = useLocation();

const hideLayoutRoutes = ["/login", "/signup", "/forgot-password"];

const hideLayout = hideLayoutRoutes.some(
  (path) => location.pathname.toLowerCase().startsWith(path)
);


  return (
    <>
      {/* HEADER */}
      {!hideLayout && <Header />}

      <Routes>
        {/* AUTH */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />

        {/* PUBLIC */}
        <Route path="/" element={<Home />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/help-center" element={<HelpCenter />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />

        {/* DASHBOARD */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/rewards" element={<Rewards />} />
        <Route path="/cashout" element={<CashOut />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/affilliates" element={<Affilliates />} />
        <Route path="/notifications" element={<NotificationPages />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/featured-offers-pages" element={<FeaturedOffersPages />} />
        <Route path="/offerwalls-pages" element={<OfferwallsPages />} />
        <Route path="/activity-history" element={<ActivityHistory />} />
      </Routes>

      {/* FOOTER */}
      {!hideLayout && <Footer />}
    </>
  );
}

export default App;
