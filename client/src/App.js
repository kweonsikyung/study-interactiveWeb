import React from 'react';
import './App.css';
import LifecycleEx from './R007_LifecycleEx';

function App() {
  return (
    <div>
      <h1>START REACT 200!</h1>
      <p>HTML 적용하기</p>
      <LifecycleEx
        prop_value = 'FromApp.js'
      ></LifecycleEx>
    </div>
  );
}

export default App;