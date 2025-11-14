import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Portfolio from './pages/Portfolio';
import { ThemeProvider } from './context/ThemeContext';

export default function App() {
  return (
    <Router>
      <ThemeProvider> 
        <Routes>
          <Route path="/" element={<Portfolio />} />
        </Routes>
      </ThemeProvider>
    </Router>
  );
}
