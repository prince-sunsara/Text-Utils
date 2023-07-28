import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import Error from './components/Error';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

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
    <>
      <Router>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} alert={showAlert} />
      <Alert alert={alert} />
        <Routes>
          <Route exact path='/' element={<TextForm heading="Try TextUtils - Word counter, Character counter, Remove Extra spaces" mode={mode} alert={showAlert} />} />
          <Route exact path='/about' element={<About mode={mode} />} />
          <Route path='/*' element={<Error />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
