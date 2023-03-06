import React, {Component} from "react";
import datatype from 'prop-types'; //props의 자료현 선언을 위해 리액트 기본 내장 패키지인 props-type을 임포트해 사용

class R018_PropsDatatype extends Component {
    render(){
        //render() 함수 내에 지역변수를 선언해 props로 전달될 값들을 할당한다
        let { String, Number, Boolean, Array, Object_Json, Function } = this.props
        return(
            //부모 컴포넌트에서 전달한 props 변수들을 화면에 표시한다
            <div style={{padding: "0px"}}>
                <p>StringProps: {String}</p> 
                {/* 잘못 설정했지만 에러가 아닌 경고메세지이기 대문에 정상적으로 표시됨 */}
                <p>NumberProps: {Number}</p>
                <span>BooleanProps: {Boolean.toString()}</span>
                <p>ArrayProps: {Array.toString()}</p>
                <p>Object JsonProps: {JSON.stringify(Object_Json)}</p>
                <p>FunctionProps ; {Function} </p>
            </div>
        )
    }
}

//props 값들 각각에 적합한 자료형을 선언한다.
R018_PropsDatatype.propTypes = {
    String: datatype.number, // String변수의 자료형을 number로 선언해 경고메세지 뜨도록 설정
    Number: datatype.number,
    Boolean : datatype.bool,
    Array: datatype.array,
    Object_Json : datatype.object,
    Function: datatype.func,
}

export default R018_PropsDatatype