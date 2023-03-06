import React, { Component} from "react";

class R013_ArrowFunction extends Component{

    constructor(props){
        super(props);
        this.state={
            arrowFuc: 'React200',
            num: 3
        };
    }

    componentDidMount(){
        Function1(1);
        this.Function2(1,1);
        this.Function3(1,3);
        this.Function4();
        this.Function5(0,2,3);

        function Function1(num1){
            return console.log(num1+'. Es5 Function');
        }
    }

    //ES6
    //this로 컴포넌트의 state 변수에 접근한다
    Function2 = (num1, num2) =>{
        let num3 = num1 + num2;
        console.log(num3+'. Arrow Function : '+this.state.arrowFuc);
    }

    //ES5에서 this를 백업하여 state 변수에 접근한다
    Function3(){
        var this_bind = this;
        setTimeout(function() {
            console.log(this_bind.state.num+'. ES5 Callback Function noBind');
            console.log(this.state.arrowFuc);
        },100)
    }

    //ES5에서 bind를 사용한다
    Function4(){
        setTimeout(function() {
            console.log('4. ES5 Call Function Bind : '+this.state.arrowFuc);
        }.bind(this),100);
    }

    //ES6의 화살표 함수에서는 this를 bind 해주지 않아도 this를 컴포넌트로 사용해 state뵨수에 접근할 수 있다.
    Function5 = (num1, num2, num3) =>{
        const num4 = num1 + num2 + num3;
        setTimeout(() => {
            console.log(num4+ '. Arrow Callback Function : ' + this.state.arrowFuc);
        }, 100);
    }

    render() {
        return(
            <h2>[THIS IS ArrowFunction]</h2>
        )
    }
}

export default R013_ArrowFunction;