import React, { Component } from "react";

class R011_SpreadOperator extends Component{

    constructor(props){
        super(props);
        this.state={};
    }

    componentDidMount() {
        //Javascript Array
        var varArray1 = ['num1', 'num2'];
        var varArray2 = ['num3', 'num4'];

        //ES5에서는 concat() 함수나 배열에 각각 인덱스로 접근해 값을 가져왔다
        var sumVarArr = [varArray1[0], varArray1[1], varArray2[0], varArray2[1]];
        //var sumVarArr= [].concat(varArray1, varArray2);
        console.log('1. sumVarArr : '+ sumVarArr);

        //ES6 Array
        //전개 연산자 ...을 배열명 앞에 붙여 여러개의 배열을 합칠 수 있다
        let sumLetArr = [...varArray1, ...varArray2];
        console.log('2. sumLetArr : '+sumLetArr);

        //sumLetArr 배열의 값을 추출해 개별 변수에 넣는다.
        //순서대로 sum1에 sumLetArr[0] 값, sum2에 sumLetArr[1] 값을 대입한다. 
        //나머지 배열 값은 마지막 전개연산자 처리된 ...remain 변수에 넣는다.
        const [sum1, sum2, ...remain] = sumLetArr;
        console.log('3. sum1 : '+ sum1 + ', sum2 : '+ sum2 + ', remain : '+remain);

        //------------------------------------------------------------------//

        var varObj1 = {key1 : 'val1', key2 : 'val2'};
        var varObj2 = {key2 : 'new2', key3 : 'val3'};

        //javascript object
        //ES5에서 객체 2개를 합치기 위해서는 Object.assign()함수를 이용해야 한다.
        //첫번째 인자 {}는 함수의 리턴값이고 뒤의 인자에 객체들을 , 로 연결해 나열하면 여래개의 객체를 합칠 수 있다.
        var sumVarObj = Object.assign({}, varObj1, varObj2);
        console.log('4. sumVarObj : '+ JSON.stringify(sumVarObj));

        //ES6 Object
        //ES6에서는 전개연산자 ...을 객체명 앞에 붙여 여러개의 객체를 합칠 수 있다
        var sumLetObj = {...varObj1, ...varObj2};
        console.log('5. sumLetObj : '+JSON.stringify(sumLetObj));

        //sumLetObj 객체의 키와 값을 추출해 키와 동일한 명칭의 개별 변수에 넣는다. 나머지는 전개연산자처리된 ...others 변수에 넣는다
        var {key1, key3, ...others} = sumLetObj;
        console.log('6. key1 : ' + key1 + ', key3 : ' + key3 + ', others : ' + JSON.stringify(others));
    }

    render(){
        return(
            <h2>[THIS IS SpereadOperator ]</h2>
        )
    }
}

export default R011_SpreadOperator;