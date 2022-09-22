import React, { Component } from "react";

//key이벤트 사용하기 (onKeyDown, onKeyPress, onKeyUp)
//1.onKeyDown, onKeyPress는 키를 눌렀을 때 동작
//2.onKeyUp은 눌려있던 키에서 손을 뗐을 때 동작
//3.onKeyDown, onKeyUp은 키를 누르고 떼는 동작자체에 반응
//4.onKeyPress는 문자가 실제로 입력됐을 때 반응
//5.각 이벤트가 인식하지 못하는 키들 존재

class R071_OnKey extends Component{
    onKey(event, e) {
        var val = e.target.value;
        console.log('event: ' + event + ', value: ' + val);
    }

    render(){
        return(
            <>
            {/* 이벤트가 발생하고 value값이 할당되기 때문에 공백 출력 후 value 출력 */}
            onKeyDown : <input type="text" onKeyDown={e => this.onKey("onKeydown", e)}></input><br />
            onKeyPress : <input type="text" onKeyPress={e => this.onKey("onKeyPress", e)}></input><br />
            {/* 공백 없음 */}
            onKeyUp : <input type="text" onKeyUp={e => this.onKey("onKeyUp", e)}></input><br />


            </>
        )
    }
}

export default R071_OnKey;