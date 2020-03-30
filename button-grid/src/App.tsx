import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.scss';
import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="main">
          <Content level={1} />
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
