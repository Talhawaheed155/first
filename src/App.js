import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import About from "./components/About";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setmode] = useState('light');
  const [alert , setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg : message,
      type : type 
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  const togglemode = () => {
    if (mode=== 'light') {
      setmode('dark');
      document.body.style.backgroundColor = '#140e27';
      showAlert("Dark mode has been enabled",  "success")
      document.title = 'TextsUtils - Dark-mode';
    }
    else {
      setmode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled",  "success")
      document.title = 'TextsUtils - Light-mode';
    }
  }
  return (
    <Router>
      <>
        <Navbar title="TextUtils" abouttext="About Us" mode={mode} togglemode={togglemode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route exact path="/about" element = {<About />}/>
            <Route exact path="/" element = {<TextForm heading="Enter your text below" mode={mode} showAlert={showAlert} />}/>
          </Routes>
        </div>
      </>
    </Router>
  );
}

export default App;
