import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Header from './components/Header';
import Content from './components/Content';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <div className='container'>
          <Content />
        </div>
      </BrowserRouter>
    </>
  )
}

export default App;
