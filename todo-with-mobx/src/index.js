import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import createStore from 'redux';
import reducers from './reducers';

//createStore 함수의 파라미터로 reducers 폴더 경로를 넘긴다
const store = createStore(reducers);

//위에서 생성한 store를 App컴포넌트에 전달한다. 
//render함수를 listener라는 함수 내부에 위치시킨다.
const listener = () => {
  ReactDOM.render(
    <App store={store} />,
    document.getElementById('root')
  );
};

//store를 구독하면 store 데이터에 변화가 있을 때 listener 함수 내부의 render함수를 실행하고 
//변경된 데이터를 렌더링한다
store.subscribe(listener);
//위에서 render함수를 listener 함수로 감쌌기 때문에 
//초기 렌더링을 위해 수동으로 render 함수를 실행시켜준다
listener();