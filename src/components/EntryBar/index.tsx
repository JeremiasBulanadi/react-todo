import React, { Dispatch, FormEvent, SetStateAction, useEffect, useState } from "react";
import { RiSearchLine } from "react-icons/ri";
import { IoMdAdd } from "react-icons/io";
import { useAtom } from "jotai";
import { todosAtom } from "../../state/atoms";
import { addTodo } from "../../utilities/todo";

interface IProps {
    setSearchKey: Dispatch<SetStateAction<string|undefined>>
}

const EntryBar: React.FC<IProps> = ({setSearchKey}) => {
    const [input, setInput] = useState<string>("");
    const [todos, setTodos] = useAtom(todosAtom)

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setTodos(addTodo(todos, input))
    }

    useEffect(() => {
        setSearchKey(input)
    }, [input])

    return (
    <>
        <form 
            className="flex border hover:border-gray-400 border-gray-600 bg-plurble-900 mb-8 w-full max-w-[90%] h-12 rounded-md transition ease-in-out"
            onSubmit={(e) => {handleSubmit(e)}}
            >
                <input
                    className="w-full h-full pl-4 bg-transparent"
                    type="text"
                    onChange={e => {setInput(e.target.value)}}
                />
                <button className="bg-transparent hover:text-gray-200 text-gray-400 transition ease-in-out" type="submit" disabled={input.length < 1}>
                    {
                        input ?
                        <IoMdAdd />
                        :
                        <RiSearchLine />
                    }
                </button>
        </form>
    </>
    );
}

export default EntryBar;