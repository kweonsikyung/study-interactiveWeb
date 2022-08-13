import React, { Component } from "react";
import { shallowEqualArrays } from "shallow-equal";


class R029_ShallowEqual extends Component{
    constructor(props){
        super(props);
        this.state = {
            StateString : 'react',
        }
    }

    // shouldComponentUpdate() 함수는 변경된 props와 state 값을 파라미터로 받을 수 있고 반환값이 true일 때 render()함수를 실행시킨다
    // line27에서 문자열 state값이 변경되었는데, 원래 Component클래스에서는 변경으로 인식해 render()함수를 실행시킨다.
    // 그런데, shallowEqualArrays()함수로 값만 비교하기 때문에 false를 반환하고 render()함수를 실행하지 않는다.
   shouldComponentUpdate(nextProps, nextState){
    return !shallowEqualArrays(this.state, nextState)
   }

   componentDidMount(){
    //Array1과 Array2에서 object 변수는 동일한 객체를 참조하기 때문에 두 배열 비교시 true를 반환한다
    //Array2와 Array3 비교시, 두번째 요소의 값은 같지만 서로 다른 참조값을 갖기 때문에 서로 다른 객체기에 false를 반환한다
    const object = { react : '200'};
    const Array1 = ['리액트', object];
    const Array2 = ['리액트', object];
    const Array3 = ['리액트', { react : '200'}];

    console.log('shallowEqualArrays(Array1, Array2 : ' + shallowEqualArrays(Array1, Array2));
    console.log('shallowEqualArrays(Array2, Array3 : ' + shallowEqualArrays(Array2, Array3));
    this.setState({StateString : 'react'})
   }
    
    render() {
        console.log('render() 실행')
        return(
            <div></div>
        )
    }
}
export default R029_ShallowEqual;