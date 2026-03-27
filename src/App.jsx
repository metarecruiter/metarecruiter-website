import { BrowserRouter, Routes, Route, Outlet, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar  from './components/Navbar'
import Footer  from './components/Footer'
import Home          from './pages/Home'
import ApplyDriver   from './pages/ApplyDriver'
import HireDrivers   from './pages/HireDrivers'
import OwnerOperator from './pages/OwnerOperator'
import About         from './pages/About'
import Contact       from './pages/Contact'
import PrivacyPolicy from './pages/PrivacyPolicy'
import TermsOfService from './pages/TermsOfService'
import './index.css'

function ScrollToTop() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (hash) {
      // If there's a hash, scroll to that element after a brief delay
      setTimeout(() => {
        const element = document.querySelector(hash)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      }, 100)
    } else {
      // Otherwise scroll to top
      window.scrollTo(0, 0)
    }
  }, [pathname, hash])
  return null
}

function Layout() {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/"                index element={<Home />} />
          <Route path="/apply"           element={<ApplyDriver />} />
          <Route path="/hire-drivers"    element={<HireDrivers />} />
          <Route path="/owner-operators" element={<OwnerOperator />} />
          <Route path="/about"            element={<About />} />
          <Route path="/contact"          element={<Contact />} />
          <Route path="/privacy-policy"   element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
