import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Product from './pages/Product'
import Work from './pages/Work'
import Contact from './pages/Contact'
import './App.css'

function App() {
  return (
    <Router>
      <div className="app">
        <aside className="sidebar">
          <div className="sidebar-content">
            <div className="logo-section">
              <Link to="/">
                <img src="/images/logo.png" alt="ML Architects" className="logo" />
              </Link>
            </div>

            <nav className="nav-menu">
              <Link to="/about">About us</Link>
              <Link to="/work">Work</Link>
              <Link to="/product">Product</Link>
              <Link to="/contact">Contact</Link>
            </nav>

            <div className="sidebar-footer">

              <div className="copyright">© 2025 MindLap Architects</div>
            </div>
          </div>
        </aside>

        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/work" element={<Work />} />
            <Route path="/product" element={<Product />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App
