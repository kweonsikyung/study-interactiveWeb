import React, {Component} from "react";
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button} from 'reactstrap';

//Card 패키지는 이미지 제목, 부제목, 내용, 버튼 등을 한 세트로 묶는다
//Card 단위로 리스트를 만들어 반복해서 출력하면 정형화된 콘텐츠 목록을 만들 수 있다

class R040_ReactstrapCard extends Component{
    render(){
        return(
            <div>
                <Card style={{background:"pink"}}>
                    <CardImg top height="200px" src="https://saint.ssu.ac.kr/irj/portal" alt="Card Image" />
                    <CardBody>
                        <CardTitle>Title</CardTitle>
                        <CardSubtitle>Sub Title</CardSubtitle>
                        <CardText>Text ................</CardText>
                        <Button>Button</Button>
                    </CardBody>
                </Card>
            </div>
        )
    }
}

export default R040_ReactstrapCard;