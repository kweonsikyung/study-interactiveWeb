import React, {Component} from "react";

//GET방식은 url? 뒤에 파라미터명=값 형태로 필요한 데이터를 전달한다
//주로 데이터 조회나 검색 등의 기능에 사용된다

//POST방식은 url뒤에 파라미터를 표시하지 않고 사용한다
//서버의 상태나 데이터를 변경하는 등의 수행작업에 사용된다

class R060_FetchPost extends Component{
    componentDidMount = async () => {
        //get방식과 비슷하지만 fetct()함수의 두번째 파라미터에 post호출에 대한 정보가 추가된다

        //http 통신을 할 때 header부분에서 어떤 형태의 데이터를 사용할지 지정한다
        //이때, Content-Type이라는 변수를 사용한다. json형태의 데이터를 사용하기 위해 application/json을 할당한다
        const response = await fetch('http://date.jsontest.com',{
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json',
            },
            body: { a:"react", b:200},
        });
      
        const body = await response.json();
        alert(body.date)
    }

    render(){
        return(
            <h1>Fetch post</h1>
        )
    }
}

export default R060_FetchPost;