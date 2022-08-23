import React, {Component} from "react";
import {UncontrolledCarousel} from 'reactstrap';

// Carousel 패키지는 슬라이드를 자동으로 회전시키는 기능을 제공한다.
//이미지 텍스트, 버튼 등으로 이루어진 슬라이드를 일정 단위로 다음 슬라이드로 이동시킨다

const items = [
    {
    src: 'http://bitly.kr/AUnjAodA',
    altText: '슬라이드1 이미지 대체 문구',
    caption : '슬라이드1 설명',
    header: ' 슬라이드1 제목'
    },
    {
        src: 'http://bitly.kr/AUnjAodA',
        altText: '슬라이드2 이미지 대체 문구',
        caption : '슬라이드2 설명',
        header: ' 슬라이드2 제목'
    },
    {
        src: 'http://bitly.kr/AUnjAodA',
        altText: '슬라이드3 이미지 대체 문구',
        caption : '슬라이드3 설명',
        header: ' 슬라이드3 제목'
    },
];

class R041_ReactstrapCarousel extends Component{
    render(){
        return(
            <UncontrolledCarousel items={items} />
        )
    }
}

export default R041_ReactstrapCarousel;