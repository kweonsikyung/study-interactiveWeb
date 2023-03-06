import {ADD} from '../actions'
import { combineReducers } from 'redux'

//리듀서 데이터의 초깃값을 선언, 할당한다
const initState = {
    str : 'react',
};

//이게 리듀서!! 현재의 state(초기값)와 action을 인자로 받아 스토어에 접근해 action에 맞춰 state를 변경한다
const data = (state = initState, action) =>{
    switch(action.type){
        case ADD:
            return state, {
                str : state.str + '200'
            };
        default:
            return state;
    }
};

//리듀서 함수 data를 combineReducers 함수를 이용해 하나의 리듀싱 함수로 변환하고 익스포트한다
//이 함수는 src의 index.js에 있는 createStore 함수의 파라미터로 넘겨진다. 
//스토어 state 값에 변경이 발생했기 때문에 subsribe 함수가 동작해 화면이 렌더링된다
const App = combineReducers({
    data
})

export default App;