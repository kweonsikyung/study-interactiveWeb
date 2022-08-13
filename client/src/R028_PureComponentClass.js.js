import React, { PureComponent } from "react";

// 문자열 변경 버튼을 클릭했을 때 변수와 동일한 state값을 setState()함수로 업데이트하면 render()함수를 실행하지 않는다
// PureComponent에서는 새로운 state변수가 선언됐지만, 변숫값만 비교한다

// 객체 배열 변경 버튼을 클릭했을 때, 동일한 state값을 setState()함수로 업데이트해도 render()함수를 실행한다
// 기본적으로 PureComponent에서는 변숫값만 비교하지만, 에외적으로 객체에 대해서는 참조 값을 비교한다
// line22에서 생성한 객체의 데이터는 같지만, 참조 값이 달라 다른 객체로 인식된다
class R028_PureComponentClass extends PureComponent{
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
            this.setState( {StateArrayObj: ['react', { react : '200'}] });
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

export default R028_PureComponentClass;