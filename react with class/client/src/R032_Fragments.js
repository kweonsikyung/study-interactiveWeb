//Fragments 이용하기 
//element 반환 시 하나의 <html>태그로 감싸지 않으면 에러메세지가 뜬다
//이때 <Fragments> 태그로 감싸면 불필요한 <html>태그를 추가하지 않고 사용할 수 있다

import React, {Component} from "react";


class R032_Fragments extends Component{
    render() {
        return(
            <React.Fragment>
                <p>P TAG</p>
                <span>SPAN TAG</span>
            </React.Fragment>
        )
    }
}

export default R032_Fragments;