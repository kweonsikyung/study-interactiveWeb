import React, { Component } from "react";
import Children from "./contextChildren";


//리액트 기본 제공 함수인 createContext를 호출하고 공급자 Provider와 소비자 Consumer를 받아 사용할 수 있도록 한다
const {Provider, Consumer } = React.createContext()
//하위 컴포넌트에서 소비자를 사용할 수 있도록 익스포트한다.
export {Consumer}

class R076_ContextApi extends Component{
    render() {
        return(
            // 자식 컴포넌트를 <Provider> 태그로 감싸고 전달할 데이터를 value 값으로 할당한다
            <Provider value='React200'>
                <Children />
            </Provider>
            
        )
    }
}

export default R076_ContextApi