import React, { Component } from "react";

class R025_SetState extends Component{
    constructor(props){
        super(props);
        this.state = {
            StateString : 'react'
        }
    }

    //state로 직접 변경을 눌렀을때, StateString 값은 '리액트'로 변경되지만, render()함수를 호출하지 않으므로 화면에는 이전 값인 'react'로 표시된다
    //setState로 변경을 눌렀을 때, StateString 값은 '리액트'로 변경되고, render() 함수를 다시 호출해 화면에는 변경된 값인 '리액트'가 표시된다.
    StateChange = (flag) => {
        if(flag == 'direct') this.state.StateString = '리액트';
        if(flag == 'setState') this.setState( {StateString : '리액트'});
    }
    render() {
        return (
            <div style={{padding:"0px"}}>
               <button onClick={(e) => this.StateChange('direct', e)}> state 직접 변경 </button>
               <button onClick={(e) => this.StateChange('setState', e)}> setstate로 변경 </button>
               <br />
               [state 변경하기] StateString : {this.state.StateString}
            </div>
        )
    }
}

export default R025_SetState;