import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

//axios.defaults.withCredentials = true;

function App() {
  const clickHandle = () => {
    const headers = {
      'Access-Control-Allow-Origin': '*',
    };
    const config = {
      headers: headers,
      withCredentials: true
    };

    axios.get('http://localhost:3000', config).then((res) => {
        console.log(res);
      }).catch((err) => {
          console.log(err);
      });
  };

  const clickLogoutHandle = () => {
    const headers = {
      'Access-Control-Allow-Origin': '*',
    };
    const config = {
      headers: headers,
      withCredentials: true
    };

    axios.delete('http://localhost:3000/auth/sign_out', config).then((res) => {
        console.log(res);
      }).catch((err) => {
          console.log(err);
      });
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="http://localhost:3000/auth/google"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button onClick={ () => clickHandle() }>リクエスト</button>
        <button onClick={ () => clickLogoutHandle() }>ログアウト</button>
      </header>
    </div>
  );
}

export default App;
