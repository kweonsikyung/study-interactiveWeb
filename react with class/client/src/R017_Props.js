import React, {Component} from "react";

class R017_Props extends Component {
    render() {
        //상위 컴포넌트에서 전달받은 props 변수명을 this.props. 뒤에 붙여 해당 데이터 사용
        let props_value = this.props.props_val;
        //데이터 수정을 위해 props 자체가 아닌, 컴포넌트 내부 변수 props_value 에 옮겨 가공
        props_value += ' from App.js'
        //문자열 그리기
        return(
            <div> {props_value} </div>
        )

    }
}

export default R017_Props;