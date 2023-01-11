# 리액트의 훅을 마스터해보자!

## 1. useState
+ setState -> 렌더링 됨

## 2. useEffect
+ Mount : 화면에 첫 렌더링
+ Update : 다시 렌더링
+ Unmount : 화면에서 사라질 때 

<b>각각의 컴포넌트, 특정 작업을 처리할 코드를 실행시키고 싶을 때 사용</b>

1. 렌더링 될 때 마다 실행
```js
useEffect(()=> {
    //작업
});
```
2. 첫 렌더링 + [dependancy array]의 값이 바뀔 때만 실행
</br>만약, [] 빈 배열이라면, 처음 렌더링만 실행
```js
useEffect(()=> {
    //작업
}. [dependancy array]);
```

<b>Clean up -정리</b>
</br>더 이상 이벤트 리스너가 필요없을 때, 더 이상 카운트를 세고 싶지 않을 때

```js
useEffect(()=> {
    //구독
    return() => {
        //구독 해지
    }
}, []);
```


## 3. useEeducer
+ state를 변경하기 위해 reducer가 대신 해줌
+ 요구 내용 action / 요구 행위 dispatch
+ dispatch에 action을 담음

+ useReducer의 인자로 reducer -> state를 변경하고 싶을때마다 리듀서로 수정
+ dispach의 인자로 Action: dispatch 호출 시 -> 리듀서 호출 -> 리듀서의 액션 수행

+ 리듀서: state 업데이트 -> 은행
+ 디스패치: state 업데이트를 위한 요구
+ 액션: 디스패치 안에 들어갈 요구에 대한 내용


### 4. useRef 
+ const ref = useRef(value) 
=> ref 오브젝트를 반환해줌 { current: value } 
+ ref오브젝트는 언제든지 수정 가능
```js
const ref = useRef("hi") //{current: "hi"}
ref.current = "hello" //{ current: "hello"}
ref.current = "nice" // {current: "nice"}
```
+ 저장공간 역할
1. state의 변화 -> 렌더링 -> 컴포넌트 내부 변수들 초기화
2. Ref의 변화 -> No 렌더링 -> 변수들의 값이 유지됨
3. State의 변화 -> 렌더링 -> 그래도 Ref의 값은 유지됨

+ DOM요소에 접근
+ 컴포넌트는 전생애주기를 통해 유지

+ 변화는 감지해야 하지만, 그 변화가 렌더링을 발생시키면 안되는 상황에서 편리