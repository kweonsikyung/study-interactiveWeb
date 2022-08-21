import React from "react";
import './App.css';
import ReactstrapAlerts from './R034_ReactstrapAlerts'
import 'bootstrap/dist/css/bootstrap.css'

function App() {
  return (
    <div>
      <h1>START REACT 200!</h1>
      <p>CSS 적용하기</p>
      {/* R019 예제 
      <PropsBoolean BooleanTrueFalse = {false}/>
      <PropsBoolean BooleanTrueFalse />
      */}
      {/* R020 에제
      <PropsObjVal Object_Json={{react: "리액트", twohundred: "200"}}/>
       */}
      {/* R021 예제 
      <PropsRequired ReactNumber={200} />
      
      */}
      {/* R022 예제 
      <PropsDefault ReactNumber={200} />
      */}
      {/* R023 예제 
      <PropsNode>
        <span>Node from App.js</span>
      </PropsNode>
      */}
      {/* R024 예제 
      <ReactState reactString={"react"} />
      */}
      
      <ReactstrapAlerts/>
    </div>
  );
}

export default App;