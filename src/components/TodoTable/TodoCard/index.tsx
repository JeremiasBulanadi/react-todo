import React, { FormEvent, useEffect, useRef, useState } from "react"
import { Todo } from "../../../interfaces/todo"
import { FaUser } from "react-icons/fa";
import { TbNumber } from "react-icons/tb";
import { FaPencilAlt } from "react-icons/fa";
import { FaRegTrashAlt } from "react-icons/fa";
import { editTodo, removeTodo, updateTodo } from "../../../utilities/todo";
import { useAtom } from "jotai";
import { isSearchingAtom, searchTodosAtom, todosAtom } from "../../../state/atoms";

interface IProps {
    todo: Todo
}

// Cards for displaying the contents of todo objects
const TodoCard: React.FC<IProps> = ({todo}) => {
    const [todos, setTodos] = useAtom(todosAtom)
    const [searchTodos,] = useAtom(searchTodosAtom)
    const [isSearching,] = useAtom(isSearchingAtom)
    const [isEdit, setIsEdit] = useState<boolean>(false)
    const [isCompleted, setIsCompleted] = useState<boolean>(todo.completed)
    const [editInput, setEditInput] = useState<string>()
    const ref = useRef<HTMLInputElement>(null)


    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setTodos(editTodo(todos, todo.id, editInput))
        setIsEdit(false)
    }


    const handleEditClick = () => {
        setIsEdit(true);
    }


    const handleDeleteClick = () => {
        setTodos(removeTodo(todos, todo.id))
    }

    // 
    const handleCompletedClick = () => {
        const val = !isCompleted
        setIsCompleted(val)
        setTodos(updateTodo(todos, todo.id, val))
    }

    // Sets the focus on input when editing
    useEffect(() => {
        ref.current?.focus()
    }, [isEdit])

    if (!isSearching || searchTodos.includes(todo.id)) {
        return (
            <div className={`flex ${isCompleted && 'opacity-30'} border-b border-b-accent mx-2`}>
                <div
                    key={todo.id}
                    className="font-nunito font-semibold flex flex-col py-4 px-6 w-full"
                >
                    {
                        isEdit ?
                        <form onSubmit={(e) => {handleSubmit(e)}}>
                            <input
                                id="edit-input"
                                type="text"
                                className="flex w-full bg-transparent font-nunito mb-2"
                                defaultValue={todo.title}
                                ref={ref}
                                onChange={(e) => {setEditInput(e.target.value)}}
                            />
                            <button
                                type="submit" 
                                className="hidden"
                            />
                        </form>
                        :
                        <p className={`flex font-nunito mb-2 text-left ${isCompleted ? 'line-through' : ''}`}>{todo.title}</p>
                    }
                    <div className="flex text-xs">
                        <div className="opacity-30 flex text-base justify-center items-center mr-1"><TbNumber /></div>
                        <div className="opacity-30 mr-4">{todo.id}</div>
                        <div className="opacity-30 flex justify-center items-center mr-1"><FaUser /></div>
                        <div className="opacity-30 mr-4">#{todo.userId}</div>
                        <button 
                            className="bg-transparent p-1 hover:text-[#646cff] mr-2"
                            onClick={handleEditClick}
                        >
                            <FaPencilAlt/>
                        </button>
                        <button 
                            className="bg-transparent p-1 hover:text-red-600 hover:border-red-600"
                            onClick={handleDeleteClick}
                        >
                            <FaRegTrashAlt />
                        </button>
                    </div>
                </div>
                <div className="flex justify-center items-center">
                    <button
                        className={`bg-transparent rounded-md border-2 border-accent ${isCompleted ? 'bg-accent' : ''} w-6 h-6 p-0 mr-4 transition ease-in`}
                        onClick={handleCompletedClick}
                    />
                </div>
            </div>
        )
    } else {
        return <></>;
    }
    
}

export default TodoCard