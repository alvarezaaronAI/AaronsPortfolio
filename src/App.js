import React from 'react';
import logo from './logo.svg';
import './App.css';
import * as firebase from "firebase";

const firebaseConfig = {
  //apiKey: "api-key",
  //authDomain: "alvarezaaronai.firebaseapp.com",
  databaseURL: "https://alvarezaaronai.firebaseio.com/",
  projectId: "alvarezaaronai",
  storageBucket: "alvarezaaronai.appspot.com",
  //messagingSenderId: "sender-id",
  //appId: "app-id",
  //measurementId: "G-measurement-id",
};
firebase.initializeApp(firebaseConfig);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
          <h1> Welcome Aaron! Beta Website Live!</h1>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
