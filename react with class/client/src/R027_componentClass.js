import React, { Component } from "react";

//버튼을 클릭했을 때 변수와 동일한 state값을 setState()함수로 업데이트 해도
//컴포넌트는 state값이 변경됐다고 생각하기 때문에 render()함수를 실행한다.
class R027_componentClass extends Component{
    constructor(props){
        super(props);
        this.state = {
            StateString : 'react',
            StateArrayObj: ['react', { react : '200'}]
        }
    }

    buttonClick = (type) => {
        if(type ==='String'){
            this.setState({ StateString : 'react' });
        }else{
            this.setState( {StateArrayObj: ['react', {react: '200' }] });
        }
    }
    
    render() {
        console.log('render() 실행')
        return (
            <div>
               <button onClick={(e) => this.buttonClick('String')}> 문자열 변경 </button>
               <button onClick={(e) => this.buttonClick('ArrayObject')}> 객체 배열 변경 </button>
            </div>
        )
    }
}

export default R027_componentClass;