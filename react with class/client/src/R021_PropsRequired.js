import React, {Component} from "react";
import datatype from 'prop-types';

class R021_PropsRequired extends Component{
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

//ReactString이라는 props 값을 필수 값으로 지정한다. 
//하지만 상위 컴포넌트에서 ReactString이라는 변수를 전달하지 않았기 때문에 경고메세지가 발생한다
R021_PropsRequired.propTypes = {
    ReactString: datatype.isRequired,
}

export default R021_PropsRequired;

