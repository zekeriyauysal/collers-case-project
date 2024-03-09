import React from 'react';
import Header from './components/header';
import Homepage from './components/homepage';
import Footer from './components/footer';

import './styles/index.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <Homepage />
      <Footer />
    </div>
  );
}

export default App;
