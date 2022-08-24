import React, {Component} from "react";
import axios from "axios"

// axios도 fetch와 마찬가지로 비동기통신을 지원한다
// axios.get('호출url') 문법으로 get방식의 http를 호출한다
// utl호출이 완료되면 .then 함수가 실행되며, 이의 호출 결과로 response가 반환된다
// response와 호출된 변수명 사이에 data를 붙이면 변수를 사용할 수 있다

class R061_AxiosGet extends Component{
    componentDidMount(){
        axios.get('http://date.jsontest.com/')
        .then( response => {alert(response.data.date)})
    }

    render(){
        return(
            <h1>axios get</h1>
        )
    }
}

export default R061_AxiosGet;