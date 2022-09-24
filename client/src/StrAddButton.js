import React, {Component} from "react";
//actions 폴더 경로를 임포트한다. actions 폴더의 index.js 파일에는 add라는 함수가 있다.
import {add} from './actions'


class StrAddButton extends Component{
    render(){
        //버튼 클릭 시 addString 함수 실행
        return (
            <input value='Add200' type="button" onClick={this.addString} />
        )
    }

    //dispatch 함수를 통해 add 함수의 반환값을 스토어제 전달한다
    //이때 add 함수의 type 값을 리듀서에서 참고해 스토어 데이터를 변경한다
    //결론적으로 dispatch 함수는 리듀서에 액션을 전달하고 
    //리듀서에서는 액션에 작성된 작업 내용을 읽이 스토어 데이터를 변경한다
    addString = () => {
        this.props.store.dispatch(add());
    }
}

export default StrAddButton;