import React, {Component} from "react";
//배열함수
class R015_Map extends Component {

    componentDidMount(){
        var Map_Arr = [3,2,8,8]
        //기존배열에 map() 함수를 사용해 순서대로 하나씩 요소에 접근해 가져온다. 
        //이때마다 콜백함수가 실행된다
        //가져온 값을 변수 x에 넣은 후, 마지막 요소까지 반복이 끝나면 그 때 새로운 배열에 저장한다.
        let Map_newArr = Map_Arr.map(x=>x)
        console.log("1. Map_newArr : [" + Map_newArr + "]")

        let Map_muiltiArr = Map_Arr.map(x => x*2)
        console.log("2. Map_muiltiArr ; [" + Map_muiltiArr + "]")

        //배열 안 객체 생성
        var ObjArray = [{key:'react', value:'200'},
                        {key: '리액트', value:'TwoHundred'}];
        //배열 안의 객체를 순서대로 가져와 콜백함수를 실행하는데, 가져온 값을 obj라는 변수에 저장한다.
        //콜백함수의 두번재 인자인index는 기존 배열의 인덱스와 동일하다
        let Map_objArr = ObjArray.map((obj, index) => {
            console.log((index+3)+". obj : "+JSON.stringify(obj)) //기존 배열에서 가져온 객체값을 순서대로 출력한다
            var Obj = {}; //새로운 객체 선언
            Obj[obj.key] = obj.value; //기존 객체의 key, value 값을 새로운 객체의 key, value 값으로 저장한다.
            //반복이 끝나면 Map_objArr 변수에 반환할 값들을 저장한다
            return Obj; 
        });
        console.log("5. Map_objArr : "+JSON.stringify(Map_objArr))
    }

    render(){
        return(
            <h2>[THIS IS MAP]</h2>
        )
    }
}

export default R015_Map;