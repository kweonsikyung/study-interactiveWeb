import React, {Component} from "react";
import { UncontrolledCollapse, Button, CardBody, Card} from 'reactstrap';


//컬랩스
//Collapse 패키지는 특정 영역을 펼치고 숨기는 기능을 제공한다
//버튼 이벤트로 펼치고 숨기는 기능을 제어할 수 있다
//상단부터 점차적으로 펼쳐지고 하단부터 숨겨진다는 것이 show(), hide() 함수와의 차이점이다
//열고 닫지 않으면 쌓임

class R042_ReactstrapCollapse extends Component{
    render() {
        return (
            <div>
                <Button color="warning" id="toggle1">
                    #1
                </Button>
                <Button color="primary" id="toggle2">
                    #2
                </Button>
                <Button color="danger" id="toggle3">
                    #3
                </Button>
                <Button color="success" id="toggle4">
                    #4
                </Button>
                <UncontrolledCollapse toggler="#toggle1">
                    <Card>
                        <CardBody>
                            CARD1!
                        </CardBody>
                    </Card>
                </UncontrolledCollapse>
                <UncontrolledCollapse toggler="#toggle2">
                    <Card>
                        <CardBody style={
                            {
                            fontWeight:"bold",
                            background:"pink",
                            fontSize: "30px"
                            }
                            }>
                            CARD2!
                        </CardBody>
                    </Card>
                </UncontrolledCollapse>
                <UncontrolledCollapse toggler="#toggle3">
                    <Card>
                        <CardBody>
                            CARD3!
                        </CardBody>
                    </Card>
                </UncontrolledCollapse>
                <UncontrolledCollapse toggler="#toggle4">
                    <Card>
                        <CardBody>
                            CARD4!
                        </CardBody>
                    </Card>
                </UncontrolledCollapse>
            </div>
        )
    }
}

export default R042_ReactstrapCollapse;