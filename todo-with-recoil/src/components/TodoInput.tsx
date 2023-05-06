import React, { useState } from "react";
import { useSetRecoilState } from "recoil";
import { todoListState } from '../recoil/atom';

const TodoInput = () => {
    const [text,setText] = useState("");
    const setTodoList = useSetRecoilState(todoListState);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(!text) return;

        setTodoList((prev)=>[
            ...prev,
            { id: Date.now(), text, isCompleted: false},
        ]);
        setText("");
    }
    return (
        <form onSubmit={handleSubmit}>
          <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
          <button type="submit">Add</button>
        </form>
      );
};

export default TodoInput;
