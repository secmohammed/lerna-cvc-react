import React from "react";
import logo from "./logo.svg";
import "./App.css";
import BaseApi from "@app-structure/commons/dist/infrastructure/api/Api";

const baseApi = new BaseApi();
const User = baseApi.user();
const msg = User.login({}).msg;

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{msg}</p>
      </header>
    </div>
  );
};

export default App;
