import React, { Component } from "react";

//Currying 커링은 함수의 재사용성을 높이기 위해 함수자체를 return하는 함수이다.
//함수를 하나만 사용할 때는 필요한 모든 파라미터를 한 번에 넣어야한다.
//커링을 사용하면 함수를 분리할 수 있으므로 파라미터도 나눠 전달할 수 있다

class R074_ReactCurrying extends Component{

    //js도 +연산자를 숫자와 문자열에 사용 가능하군
    plusNumOrString(c, d){
        return c+d;
    }

    //PlusFunc1과 PlusFunc2는 완전히 같은 함수 => 표현법이 다를뿐
    //this.plusNumOrString(a,b)를 return하는 또 다른 함수를 return한다
    PlusFunc1(a){
        return function(b){
            return this.plusNumOrString(a,b)
        }.bind(this)
    }

    PlusFunc2 = a => b => this.plusNumOrString(a,b)

    //PlusFunc 함수는 파라미터를 1개만 받는다(a)
    //PlusFunc1 함수를 호출할 때 변수 a와 상수 200을 파라미터로 함께 전달한다
    PlusFunc(a){
        return this.PlusFunc1(a)(200)
    }

    render() {
        return(
            <>
            {/* PlusFunc 함수를 호출하면서 숫자 100과 문자열 "react"를 전달한다 */}
            {/* 고정으로 더해주는 숫자200은 line27에서 파라미터로 넣어주기 때문에 PLusFunc함수를 호출할 때 각각 200을 전달하지 않아도 된다 */}

            {/* 100+200 결과인 300 출력 */}
            <input type="button" value="NumberPlus" onClick={e => alert(this.PlusFunc(100))}/> 
            {/* react+200 결과인 react200 출력 */}
            <input type="button" value="StringPlus" onClick={e => alert(this.PlusFunc("react"))}/>
            </>
        )
    }
}

export default R074_ReactCurrying;