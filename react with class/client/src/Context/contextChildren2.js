import React from 'react';
//부모 컴포넌트의 데이터를 사용하기 위해 R076_ContextApi에서 익스포트했던 Consumer를 임포트해 사용할 수 있게 한다
import { Consumer } from './R076_ContextApi';

class contextChildren2 extends React.Component{
    render() {
        return(
            //<Consumer>태그로 출력할 element를 감싸고
            //R076_ContextApi 컴포넌트에서 value에 할당했던 데이터를 contextValue 변수로 받아 출력한다
            <Consumer>
                {ContextValue => <h3>{`contextValue : ${ContextValue}`}</h3>}
            </Consumer>
        )
    }
}

export default contextChildren2
