import React, { Component } from "react";

class R066_onClick extends Component{
    buttonClick = (param) => { //buttonClick 함수 선언하며 param을 파라미터로 받음
        if(typeof param != 'string') param = "Click a" // param이 문자열이 아니라면 "Click a"를 param에 할당
        console.log('param : ' + param);
    }

    render(){
        return(
            <>
            <button onClick={ e => this.buttonClick("Click button")}>
                Click button
            </button>
            <div onClick={ e => this.buttonClick("Click div")}>
                Click div
            </div>
            <a href="javascript:" onClick={this.buttonClick}>Click a</a>
            </>
        )
    }
}

export default R066_onClick;