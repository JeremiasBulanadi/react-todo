import { atom } from "jotai";
import { Todo } from "../interfaces/todo";

export const todosAtom = atom<Todo[]>([])
export const searchTodosAtom = atom<number[]>([])
export const isSearchingAtom = atom<boolean>(false)