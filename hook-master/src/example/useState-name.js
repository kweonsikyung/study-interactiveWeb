import {useState} from 'react';

const heavyWork = () => {
  console.log('엄청 무거운 작업!!!');
  return ['홍길동', '김민수'];
}

function UseState2(){
  // const [names, setNames ] = useState(["홍길동", "김민수"]);

  //const [names, setNames ] = useState( heavyWork() );

  //이렇게 useState() 안에 초기값을 콜백으로 넣어주면 처음 렌더링에만 불림 
  const [names, setNames ] = useState( ()=> {
    return heavyWork();
  });


  const [input, setInput] = useState('');

  const handleInputChange = (e) => {
    setInput(e.target.value);
  }

  const handleUpload = () => {
    setNames( (prevState) => {
      console.log('이전 state: ', prevState)
      return [input, ...prevState];
    });
  }

  // console.log(input);

  return (
    <div>
      <input type="text" value={input} onChange={handleInputChange}/>
      <button onClick={handleUpload}>update</button>
      { names.map( (name, idx ) => {
        return <p key={idx}>{name}</p>;
      })}
    </div>

  );
}


export default UseState2;
