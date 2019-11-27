import React from 'react';
import './App.css';

import Header from './components/Header';
import AppContent from './components/AppContent';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <Header />
      <div className='container'>
        <AppContent />
      </div>
      <Footer />
    </>
  )
}

export default App;
