import React, {Component} from "react";

//GET방식은 url? 뒤에 파라미터명=값 형태로 필요한 데이터를 전달한다
//주로 데이터 조회나 검색 등의 기능에 사용된다

//자바스크립트 내장함수인 fetch를 사용하면 쉽게 비동기 통신을 구현할 수 있다
//비동기통신이란, 쉽게 말해 먼저 시작한 작업의 완료 여부와 상관없이 다음 작업을 실행하는 것이다

//비동기함수에 동기적인 기능 추가하기 async와 await
//비동기 함수를 실행하는 함수에 async를 추가하고 동기적으로 처리돼야 한느 함수 구문 앞에 await를 추가한다

class R059_FetchGet extends Component{
    componentDidMount = async () => {
        
        //fetch를 사용해서 get방식으로 url을 호출해 데이터를 가져온다. 기져온 데이터를 response 변수에 할당한다
        //이때 fetch 함수에 별도의 http 메서드 설정이 없다면, get방식으로 호출한다
        const response = await fetch('http://date.jsontest.com');
        
        //response라는 변수는 json형태이기 때문에 json() 함수로 사용할 수 있도록 변환해 body라는 변수에 할당한다
        //이때 fetch함수의 비동기적 특징때문에 line15에서 데이터를 가져오기 전에 line20이 실행돼 에러가 발생할 수 있다
        //이런 에러를 해결하기 위해 비동기함수에 동기적인 기능을 추가해 해결 할 수 있다
        const body = await response.json();
        alert(body.date)
    }

    render(){
        return(
            <h1>Fetch get</h1>
        )
    }
}

export default R059_FetchGet;