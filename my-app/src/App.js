
import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About';
import React, { useState } from 'react';

// import {BrowserRouter as Router, Route, Link, Routes} from "react-router-dom"
function App() {
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type)=>{
    setAlert({
      msg:message,
      type: type
    })
    setTimeout(()=>{
      setAlert(null);
    },1500);
  }
  const[mode, setMode] = useState('light');
  const toggleMode = () => {
    if (mode === 'light') {
        setMode('dark');
        // document.body.style.backgroundColor = 'grey';
        showAlert("Dark mode has been enable", "success");
        document.title = "TextUtils - Dark Mode";
        // setInterval(()=>{
        //  document.title = "TextUtils - Dark Mode";
        // }, 3000);
        // setInterval(()=>{
        //   document.title = "Thanks for visiting!";
        //  }, 1500);
    }
    else {
        setMode('light');
        // document.body.style.backgroundColor = 'white';
        showAlert("Light mode has been enable", "success")
        document.title='TextUtils - LightMode';
    }
  };
  
  

  return (
    <>
    {/* <Navbar title="Nothing Special" link="https://www.google.com" linkName={true} /> */}
    {/* <Router> */}
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div >
      {/* <Routes> */}
        {/* <Route exact path="/about" element={<About/>}/> */}
        {/* <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze below"  mode={mode} toggleMode={toggleMode}/>}/> */}
        <TextForm showAlert={showAlert} heading="Enter the text to analyze below"  mode={mode} toggleMode={toggleMode}/>
      {/* </Routes> */}
    </div>
    {/* </Router> */}
    </>
  );
}

export default App;
