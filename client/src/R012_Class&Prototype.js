import React, { Component } from "react";

class ClassPrototype extends Component{
    constructor(props){
        super(props);
        this.state ={};
    }

    componentDidMount(){
        class ExamCountClass{
            //파라미터로 전달받은 변숫값을 객체변수에 저장한다
            constructor(num1, num2){
                this.number1 = num1;
                this.number2 = num2;
            }
            //객체에 접근할 때 실행할 함수는 클래스 괄호 안에 간단하게 선언할 수 있다
            //함수가 실행되면, 생성자 함수에서 할당된 객체 변수를 사용한다
            showNum(){
                console.log(`2. react_${this.number1} + ${this.number2}`);
            }
        }

        //ExamCountClass 객체를 생성한 후 cnt2라는 변수에 저장한다
        var cnt2 = new ExamCountClass('2hundred','입니다..원래 생성자로 넘겨주나...?');
        //객체 안에 선언된 showNum() 함수를 실행한다.
        cnt2.showNum();
    }

    render() {
        return (
            <h2> [THIS IS CLASS]</h2>
        )
    }
}

export default ClassPrototype;

