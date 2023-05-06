import React from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { todoListState, Todo } from '../recoil/atom';
import '../css/TodoItem.css';
import styled from 'styled-components';

const TodoItem = ({item}:{item: Todo}) =>{
    const setTodoList = useSetRecoilState(todoListState);

    const handleCheck = () => {
        setTodoList((oldList) =>
          oldList.map((todo) =>
            todo.id === item.id ? { ...todo, isCompleted: !todo.isCompleted } : todo
          )
        );
      };

    const handleDelete = () => {
        setTodoList((prev) => prev.filter((todo)=> todo.id !== item.id));
    };

    return(
        <StyledTodoItem>
            <input type="checkbox" checked={item.isCompleted} onChange={handleCheck} />
            <span>{item.text}</span>
            <StyledDelete onClick={handleDelete}>삭제</StyledDelete>
        </StyledTodoItem>
    )
};

const TodoList = () => {
    const todoList = useRecoilValue(todoListState);

    return (
        <ul>
          {todoList.map((item) => (
            <TodoItem key={item.id} item={item} />
          ))}
        </ul>
      );
}

export default TodoList;

const StyledTodoItem = styled.li`
  display: flex;
  margin-bottom: 8px;
  input[type="checkbox"] {
    margin-right: 8px;
  }
  button {
    margin-left: auto;
  }
  background-color: #eee;
  padding: 10px;
  width: 200px;
  border-radius: 10px;
  align-items: center;
  span {
    height: 20px;
    line-height: 20px;
    flex: 1;
  }
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
`;
const StyledDelete = styled.button`
  align-self: flex-end;
  right: 10px;
  border-radius: 10px;
  padding: 5px;
  border: none;
`;
