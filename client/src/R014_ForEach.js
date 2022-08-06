import React, { Component } from "react";
// 배열함수
class R014_ForEach extends Component{

    componentDidMount() {
        //For문으로 배열 사용하기
        var For_Arr = [3,2,8,8];
        var For_newArr = [];

        for( var i=0; i<For_Arr.length; i++){
            For_newArr.push(For_Arr[i]);
        }
        console.log("1. For_newArr : ["+For_newArr+"]");

        //ForEach() 함수로 배열 사용하기
        //ForEach() 함수에서는 순번과 배열의 크기 정보를 사용하지 않는다
        //0부터 배열의 크기만큼 반복하며 순서대로 배열값을 반환한다. 
        //반복문이 실행될 때마다 콜백 함수로 결괏값(result)을 받아 새로운 배열에 넣는다
        var ForEach_Arr = [3,3,9,8];
        var ForEach_newArr = [];

        ForEach_Arr.forEach((result)=>{
            ForEach_newArr.push(result);
        })
        console.log("2. ForEach_newArr : ["+ForEach_newArr+"]");
    }

    render(){
        return(
            <h2>[THIS IS ForEach]</h2>
        )
    }
}

export default R014_ForEach;