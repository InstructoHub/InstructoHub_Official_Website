import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Website from './pages/Website';
import Register from './pages/Register';
import Products from './pages/Products';
import './App.css';
function ScrollToTop() {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}
function App() {
  return (
    <Router>
      <div className="App">
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Website />} />
          <Route path="/register" element={<Register />} />
          {/* <Route path="/products" element={<Products />} /> */}
        </Routes>
      </div>
    </Router>
  );
}
export default App;