import React, {Component} from "react";
import {Badge, Button} from 'reactstrap';

//Badge 패키지는 부모요소에 추가로 특정문자열이나 숫자를 표시할 때 사용한다

//텍스트 옆 badge -> 쇼핑몰 웹 사이트 상품 옆 new, hit, sale 등 표시
//버튼 안 badge -> 접속자, 메세지 수와 같은 어던 속성의 수치 표시
//pill thrtjd -> 테두리 둥글게
//href badge에 링크 연결
class R035_ReactstrapBadges extends Component{
    render(){
        return(
            <div>
                <h1>PRODUCT NAME <Badge color="secondary">hit</Badge></h1>
                <Button color="light" outline>
                    Accessor <Badge color="dark">4</Badge>
                </Button>
                <Badge color="danger" pill>pill</Badge>
                <Badge href="http://naver.com" color="warning">Go link</Badge>
            </div>
        )
    }
}

export default R035_ReactstrapBadges;