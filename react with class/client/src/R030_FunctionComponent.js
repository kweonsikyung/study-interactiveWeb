import React from "react";

// 함수형 컴포넌트
//클래스형 컴포넌트와 달리 state와 생명주기 함수를 사용할 수 없다
//상위 컴포넌트에서 props와 context를 파라미터로 전달받아 사용하고 render() 함수가 없으므로 return만을 사용해 화면을 그려준다
//클래스형 컴포넌트와 달리 props앞에 this가 붙지 않는다
function R030_FunctionComponent(props){
    let {contents} = props;
    return(
        <h2>{contents}</h2>
    )
}

export default R030_FunctionComponent;