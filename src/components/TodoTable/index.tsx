import React from "react"
import TodoCard from "./TodoCard"
import { useAtom } from "jotai"
import { todosAtom } from "../../state/atoms"
// Container component for the todo cards

const TodoTable: React.FC = () => {
    const [todos,] = useAtom(todosAtom)

    return (
        <div className="flex flex-col min-w-[22rem] w-full max-h-[60vh] h-full px-2 gap-2 overflow-y-scroll">
            {todos.map(todo => <TodoCard todo={todo}/>)}
        </div>
    )
}

export default TodoTable