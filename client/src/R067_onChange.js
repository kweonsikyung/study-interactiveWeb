import React, { Component } from "react";

class R067_onChange extends Component{
    change = (e) => {
        var val = e.target.value;
    
        console.log('param : ' + val);

        if (val=="react") {
            console.log('react success')
        }
        else if (val=="200") {
            console.log('200 success')
        }
    
    }

    //input태그와 select태그 모두 같은 change 함수를 쓰고 있기 때문에
    //value가 같게 여겨짐
    render() {
        return(
            <>
            {/* input박스에 문자를 입력하거나 삭제할 때마다 onChange이벤트가 발생해 change함수를 호출함
            함수 호출 시 파라미터를 따로 넘겨주지 않아도 이벤트 객체 e가 전달된다
            이벤트 객체에는 <input>태그에 현재 입력된 값이 value로 할당된다 */}
            <input type="text" onChange={this.change} />
            <select onChange={this.change}>
                <option value="react">react</option>
                <option value="200">200</option>
            </select>
            </>
        )
    }
}

export default R067_onChange;