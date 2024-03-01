import React, { useEffect, useState } from "react"
import TodoTable from "../../components/TodoTable"
import EntryBar from "../../components/EntryBar"
import TitleCard from "../../components/TitleCard"
import { requests } from "../../services/requests"
import { todoSearch } from "../../utilities/search"
import { useAtom } from "jotai"
import { todosAtom, isSearchingAtom, searchTodosAtom } from "../../state/atoms"

const MainPage: React.FC = () => {
    const [searchKey, setSearchKey] = useState<string>()
    const [, setIsSearching] = useAtom(isSearchingAtom)
    const [todos, setTodos] = useAtom(todosAtom)
    const [, setSearchTodos] = useAtom(searchTodosAtom)
    
    // Requests the todos from jsonplaceholder and stores the first 20 in todos
    const getTodos = async () => {
        requests.getTodos().then(data => setTodos(data.filter(todo => todo.id <= 20)))
    }
    
    useEffect(() => {
        getTodos()
    }, [])

    // Filters the displayed todos for those that include the search key in their title
    useEffect(() => {
        if (searchKey) {
            setIsSearching(true)
        } else {
            setIsSearching(false)
        }
        setSearchTodos(todoSearch(todos, searchKey))
    }, [todos, searchKey])

    return (
        <>
            <div className="flex max-w-svw max-h-svh sm:w-[30rem] sm:h-[40rem]">
                <div className="flex flex-col flex-grow items-center w-full h-full gap-8">
                    <TitleCard/>
                    <TodoTable />
                    <EntryBar setSearchKey={setSearchKey}/>
                </div>
            </div>
        </>
    )
}

export default MainPage