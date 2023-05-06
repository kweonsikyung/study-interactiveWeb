import {atom} from "recoil";

export interface Todo {
    id: number;
    text: string;
    isCompleted: boolean;
}

export const todoListState = atom<Todo[]>({
    key: "todoListState",
    default: [ {id: 1, text: "Todo 1", isCompleted: false} ],
})