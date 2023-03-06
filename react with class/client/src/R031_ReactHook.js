import React, {useState, useEffect} from "react";

function R031_ReactHook(props){
    // useState() 함수로 state 변수값을 선언 및 할당한다
    //이 때 두가지 인자가 선언된 배열이 반환되는데, 
    //첫번째 인자는 state변수명
    //두번째 인자는 state 변숫값을 변경해주는 함수이다
    const [contents, setContents] = useState('[THIS IS REACT]');
    
    //useEffect()는 생명주기 함수 componentDidMount()와 같이 return되는 html코드들이 화면이 그려진 후에 실행된다
    //최초 페이지가 로딩될 때 한 번 실행되고,
    //setContents() 함수로 state값이 변경되면 한 번 더 실행한다
    useEffect(()=>{
        console.log('useEffect');
    });

    //setContents()로 state값을 변경해주며
    //state 변경 시에 화면을 한 번 더 그려주는데
    //그 때 화면에 바뀐 값이 그려진다
    return(
        <div style={{padding:"0px"}}>
            <h2>{contents}</h2>
            <button onClick={()=> setContents('[THIS IS HOOK]')}>버튼</button>
        </div>
    )
}

export default R031_ReactHook;