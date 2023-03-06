import React, { Component } from "react";

class R026_ForceUpdate extends Component{
    constructor(props){
        super(props);
        this.state = {
            StateString : 'react'
        }
    }

    //state로 직접 변경을 눌렀을때, StateString 값은 '리액트'로 변경되지만, render()함수를 호출하지 않으므로 화면에는 이전 값인 'react'로 표시된다
   
    StateChange = () => {
       this.state.StateString = '리액트'; //값이 변경된 상태
       this.forceUpdate(); //화면을 강제로 새로고침 하여 render() 함수를 다시 실행시켜 화면에 변경된 state값을 표시하도록 한다
    }
    render() {
        return (
            <div style={{padding:"0px"}}>
               <button onClick={(e) => this.StateChange('direct', e)}> state 직접 변경 </button>
               <br />
               [state 변경하기] StateString : {this.state.StateString}
            </div>
        )
    }
}

export default R026_ForceUpdate;