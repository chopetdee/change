import React, { useState, useEffect } from 'react';
import Change from './Change';
import './App.css';
import { setTimeout } from 'timers';

function App() {
  const [input, setInput] = useState("0");
  // useEffect(() => {  // un-comment to run backward test
  //   setTimeout(()=>{
  //     const ran  =  Math.floor(Math.random()*(10000000000000000-100)+100)+""+Math.floor(Math.random()*(10000000000000000-100)+100)/100
  //     setInput(ran)
  //   }, 100)
  // }, [input])
  return (
    <div className="App">
      <header className="App-header">
        <h2>Change money!</h2>
      </header>
        <p>Enter your money.</p>
        <input onChange={(e)=>setInput(e.currentTarget.value)}/>
        <p>
          <Change money={input}/>
        </p>
    </div>
  );
}

export default App;
