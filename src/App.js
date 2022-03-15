import React, { useState } from 'react';
import Menu from './components/Menu';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import './index.css';

const App = () => {

  const [sidebar, setSidebar] = useState(false);

  return (
    <>
      <Menu sidebar={sidebar} setSidebar={setSidebar} />
      <Header />
      <Main sidebar={sidebar}/>
      <Footer />
    </>
  );
}

export default App;