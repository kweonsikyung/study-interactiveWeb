import { useState, useReducer } from 'react';
import Timer from './component/Timer';
import Bank from './component/Bank';
import Attendance from './component/Attendance';
import Ref from './example/useRef';
import RefCount from './component/Count';
import Focus from './component/Focus';
import { useInput } from './customHook/useInput';
import { useToggle } from './customHook/useToggle';

function displayMessage(message) {
  alert(message);

}
function App() {
  const [showTimer, setShowTimer] = useState(false);

  const [inputValue, handleChange, handleSubmit] = useInput("",displayMessage );
  const [isTextChanged, setIsTextChanged] = useToggle();
  const [isTextChanged1, setIsTextChanged1] = useToggle();

  return (
    <div> 
      <div>
      {/* showTimer가 true일때만 보여준다 */}
      {showTimer && <Timer />}
      <button onClick={()=> setShowTimer(!showTimer)}>Toogle Timer</button>
      </div>
      <Bank />
      <Attendance />
      <Ref />
      <RefCount />
      <Focus />

      {/* customHook */}
      <h1>useInput</h1>
      <input value={inputValue} onChange={handleChange} />
      <button onClick={handleSubmit}>확인</button>

      <h1>useToggle</h1>
      <button onClick={setIsTextChanged}>{isTextChanged ? 'Toggled' : 'Click to Toggle'}</button>
      <button onClick={setIsTextChanged1}>{isTextChanged1 ? 'Hi!' : 'Hello!'}</button>
    </div>
    

    
  );
}

export default App;
