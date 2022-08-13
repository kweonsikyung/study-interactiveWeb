import React, {Component} from "react";

class R019_PropsBoolean extends Component{
    render(){
        let {BooleanTrueFalse} = this.props

        return(
            <div style={{padding: "0px"}}>
                {/* 삼항 연산자를 이욯해 BooleanTrueFalse 변수가 true면 2, false면 1을 화면에 출력한다 */}
                {BooleanTrueFalse ? '2. ' : '1. '}
                {/* Booolean은 직접 화면에 출력할 수 없으므로 toString()을 이용해 문자열로 변환한다 */}
                {BooleanTrueFalse.toString()}
            </div>
        )
        
    }
}

export default R019_PropsBoolean