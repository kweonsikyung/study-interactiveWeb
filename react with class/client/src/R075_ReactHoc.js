import React, { Component } from "react";
import withHocComponent from "./withHocComponent";

//커링과 같이 함수 자체를 인자로 받거나 반환하는 함수를 '고차함수'라 한다
//이와 비슷하게 컴포넌트를 인자로 받거나 반환하는 함수를 '고차 컴포넌트'라 한다
class R075_ReactHoc extends Component{
    render(){
        console.log('2.HocComponent render')
        return(
            <h2>props.name : {this.props.name}</h2>
        )
    }
}

export default withHocComponent(R075_ReactHoc, 'R075_ReactHoc')