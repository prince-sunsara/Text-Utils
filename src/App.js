import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  
  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type
    });

    setTimeout(() => {
      setAlert(null);
    }, 2000)
  }
  const toggleMode = () => {
    if(mode === 'light') {
      setMode('dark');
      showAlert("Dark mode enabled", "success");
      document.body.style.backgroundColor = '#341928';
    } else {      
      setMode('light');
      showAlert("Light mode enabled", "success");
      document.body.style.backgroundColor = 'white';
    }
  }
  return (
    <div>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} alert={showAlert} />
      <Alert alert={alert} />
      <div className="container my-3" >
      <TextForm heading="Enter the text to analyze below" mode={mode} alert={showAlert} />
      <About mode={mode} />
      </div>
    </div>
  );
}

export default App;
