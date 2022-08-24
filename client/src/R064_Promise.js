import React, {Component} from "react";

//promise는 콜백함수와 같이 비동기적으로 동작하는 코드를 동기적으로 구현할 때 사용한다
//promise를 사용하면 콜백 함수와 달리, 코드 가독성을 높일 수 있고 예외처리도 쉽게 할 수 있다

//promise에는 대기, 이행, 거부의 개념이있다. 대기 상태에서 이행 상태로 변할 때 then() 함수 안의 코드가 실행된다
//Promise라는 객체를 생성해 promise를 사용한다. 파라미터로 하나의 함수(resolve)만 받으면 이행함수로 실행된다
class R064_Promise extends Component{

    componentDidMount(){
       new Promise(resolve =>{
            setTimeout(function(){
                resolve('react');
            }, 1500);
        }) 
        .then(function(result) {
            console.log(result);
            return result + 200;
        })
        .then( result => {
            console.log(result);
        })
    }

    render(){
        return (
            <h1> Promise </h1>
        )
    }
}

export default R064_Promise;