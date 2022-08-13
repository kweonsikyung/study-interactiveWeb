import React from 'react';
import './App.css';
import ForceUpdate from './R026_ForceUpdate'

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
      
      <ForceUpdate />
    </div>
  );
}

export default App;