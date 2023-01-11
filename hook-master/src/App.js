import { useState, useReducer } from 'react';
import Timer from './component/Timer';
import Bank from './component/Bank';
import Attendance from './component/Attendance';
import Ref from './example/useRef';
import RefCount from './component/Count';
import Focus from './component/Focus';

function App() {
  const [showTimer, setShowTimer] = useState(false);

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
    </div>
    

    
  );
}

export default App;
