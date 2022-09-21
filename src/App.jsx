import React from "react";
import {BrowserRouter as Router} from "react-router-dom";
import Header from "./components/Header";
import AuthRouter from "./routers/AuthRouter";

const App = () => {
  return (
    <Router>
      <Header />
      <AuthRouter />
    </Router>
  );
};

export default App;
