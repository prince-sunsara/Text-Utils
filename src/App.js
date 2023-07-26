import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  const [mode, setMode] = useState('light');
  const toggleMode = () => {
    if(mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#341928';
    } else {      
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  }
  return (
    <div>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <div className="container my-3" >
      <TextForm heading="Enter the text to analyze below" mode={mode} />
      <About mode={mode} />
      </div>
    </div>
  );
}

export default App;
