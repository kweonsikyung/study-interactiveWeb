import { useState, useEffect } from 'react';

function UseEffect1() {
    
  const [count, setCount] = useState(1);
  const [name, setName] = useState('');
  
  const handleCountUpdate=() => {
    setCount(count + 1);
  };

  const hadleInputChange = (e) => {
    setName(e.target.value);
  }

  //마운트 + [ item ] 변경 될 때만 실행
  useEffect(()=> {
    console.log('렌더링')
  },);
  useEffect(()=> {
    console.log('name 렌더링')
  }, [name]);
  useEffect(()=> {
    console.log('count 렌더링')
  }, [count]);
  //마운팅 때만
  useEffect(()=> {
    console.log('마운팅')
  }, []);

  return (
    <div>
      <button onClick={handleCountUpdate}>Update</button>
      <span>count: {count} </span>
      
      <input type="text" value={name} onChange={hadleInputChange} />
      <span>name: {name}</span>
    </div>
  );
}

export default UseEffect1;