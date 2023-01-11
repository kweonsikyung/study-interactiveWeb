import { useState } from 'react';

function UseState1() {
    
  const [time, setTime] = useState(1);
  
  const handleClick=() => {
    let newTime;
    if (time >= 12 ){
      newTime = 1;
    } else{
      newTime = time + 1;
    }
    setTime(newTime);
  };

  console.log('update');

  return (
    <div>
      <span>현재 시각: {time} </span>
      <button onClick={handleClick}>Update</button>
    </div>
  );
}

export default UseState1;
