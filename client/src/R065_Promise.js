import React, {Component} from "react";
//Promise의 상태가 대기, 이행, 거부 중 거부 상태가 됐을 때 catch 함수를 실행한다
//대기 상태의 Promise에 에러가 발생해 이행으로 상태변화를 하지 못하는 경우이다.

//Promise라는 객체를 생성해 promise를 사용한다
//파라미터로 2개의 함수를 받으면, 첫번째 함수는 이행함수, 두번째 함수는 거부함수로 사용된다
//거부함수 reject를 실행하면서 Error 객체를 사용해 에러를 발생시킨다

class R065_Promise extends Component{
    componentDidMount(){
        new Promise((resolve, reject) =>{
            // 거부함수 reject를 실행하면서 Error 객체를 사용해 에러를 발생시킨다
            reject(Error("ERROR info"));
        })
        .then(result => console.log("then "+result))
        //promise의 상태가 거부로 변하면서 catch 함수가 실행된다. 
        //reject 함수에서 파라미터로 전달받은 에러정보를 출력한다
        //catch : Error: ERROR info
        .catch(result => console.log("catch : " + result));
    }

    render(){
        return(
            <h2>Promise</h2>
        )
    }
}

export default R065_Promise;