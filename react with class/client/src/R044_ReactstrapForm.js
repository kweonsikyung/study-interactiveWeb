import React, {Component} from "react";
import {Form, Label, Input, Row, Col, FormGroup} from 'reactstrap';

//From 패키지를 이용하면 기존 <html form> 태그에 깔끔하고 정리된 스타일을 간편하게 적용해 사용할 수 있다

//input유형을 select로 입력해 <option> 태그 중 하나를 선택할 수 있다. 이때 bsSize 속성으로 태그의 크기를 정할 수 있다-> sm or lg
//md 속성으로 너비를 나눌 때, md속성의 총 합은 12가 되어야 한다

class R044_ReactstrapForm extends Component{
    render(){
        return(
            <Form>
                <Label for="exampleGender">gender</Label>
                <Input type="select" bsSize="sm">
                    <option>no select</option>
                    <option>woman</option>
                    <option>man</option>
                </Input>
                <Row form>
                    <Col md={6}>
                        <FormGroup>
                            <Label for="exampleAddress">address</Label>
                            <Input type="text" name="address" id="address" />
                        </FormGroup>
                    </Col>
                    <Col md={4}>
                        <FormGroup>
                            <Label for="exampleMobile">address</Label>
                            <Input type="text" name="mobile" id="mobile" />
                        </FormGroup>
                    </Col>
                    <Col md={2}>
                        <FormGroup>
                            <Label for="exampleAge">age</Label>
                            <Input type="text" name="age" id="age" />
                        </FormGroup>
                    </Col>
                </Row>
            </Form>
        )
    }
}

export default R044_ReactstrapForm;