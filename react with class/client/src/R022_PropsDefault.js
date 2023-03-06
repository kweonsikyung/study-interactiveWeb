import React, {Component} from "react";

class R022_PropsDefault extends Component{
    render(){
        let { ReactString, ReactNumber } = this.props

        return (
            <div style = {{padding:"0px"}} >
                {ReactString} 
                {ReactNumber}
            </div>
        )
    }
}

//상위 컴포넌트에서 값이 전달될 것이라 기대되는 ReactString과 ReactNumber 변수에 각각 기본 값을 할당한다
//값이 상위컴포넌트에서 전달된 ReactNumber은 재정의되었고, 전달되지 않은 ReactString는 설정한 default 값으로 화면에 표시된다
R022_PropsDefault.defaultProps = {
   ReactString: "리액트",
   ReactNumber: 400
}

export default R022_PropsDefault;

