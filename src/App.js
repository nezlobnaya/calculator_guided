import { useState } from 'react';
import './App.css';
import Display from './components/Display/Display';
import Logo from './components/Logo/Logo';
import Numbers from './components/Numbers/Numbers';
import Operators from './components/Operators/Operators';
import Specials from './components/Specials/Specials';




function App() {
  const [ display, setDisplay ] = useState('');

  return (
    <div className='container'>
      <div className = 'main-container'>
        <Logo />
        <Display total={display} />
        <div className='buttons-container'>
          <div className = 'special-number'>
            <Specials setDisplay={setDisplay} display={display} />
            <Numbers setDisplay={setDisplay} display={display} />
          </div>
          <div className='operators'>
            <Operators setDisplay={setDisplay} display={display} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
