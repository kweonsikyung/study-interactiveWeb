import React from 'react';
import { RecoilRoot, useRecoilValue } from 'recoil';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import TodoListStats from "./components/TodoListStats";

function App() {
  // const todoList = useRecoilValue(todoListState);
  
  return (
    <RecoilRoot>
      <div>Todo List</div>
      <TodoInput />
      <TodoList />
      <TodoListStats />
    </RecoilRoot>
  );
}

export default App;
