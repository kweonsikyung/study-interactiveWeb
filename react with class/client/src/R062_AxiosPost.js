import React, {Component} from "react";
import axios from "axios"

// axios도 fetch와 마찬가지로 비동기통신을 지원한다
// axios.get('호출url') 문법으로 get방식의 http를 호출한다

// post방식도 get방식과 거의 동일하게 호출하지만,
// 다른 점은 post 함수의 파라미터로 json과 같은 형태의 데이터를 넣고 http body에 담아 url을 호출할 수 있다
// axios.post('호출url', json데이터) 문법으로 post방식의 http를 호출한다
// json 데이터는 {key1 : value1, key2 : value2} 형태로 사용하고 http body에 담겨 전송된다

// utl호출이 완료되면 .then 함수가 실행되며, 이의 호출 결과로 response가 반환된다
// response와 호출된 변수명 사이에 data를 붙이면 변수를 사용할 수 있다

class R062_AxiosPost extends Component{
    componentDidMount(){
        axios.post('http://date.jsontest.com/', {
            a:"react", b:200
        })
        .then( response => {alert(response.data.date)})
    }

    render(){
        return(
            <h1>axios post</h1>
        )
    }
}

export default R062_AxiosPost;