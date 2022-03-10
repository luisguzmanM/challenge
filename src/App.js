import React, {useState} from 'react';
import Menu from './components/Menu';
import Header from './components/Header';
import Main from './components/Main';
import Panel from './components/Panel';
import './index.css';

const App = () => {

  const [sidebar, setSidebar] = useState(false);

  return (
    <>
      <Menu sidebar={sidebar} setSidebar={setSidebar}/>
      <Header />
      <Main />
      <Panel sidebar={sidebar}/>
    </>
  );
}
 
export default App;