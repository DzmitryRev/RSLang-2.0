import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from './component/Header';

function App() {
  const { pathname } = useLocation();

  const isHeaderMinify = !(pathname === '/' || pathname === '/textbook');

  return (
    <div className="app">
      <Header type={isHeaderMinify ? 'minify' : 'default'} />
      <div>
        content
      </div>
    </div>
  );
}

export default App;
