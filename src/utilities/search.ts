import { Todo } from "../interfaces/todo";

// Returns a new set of todos that has the keyphrase in their title. If there is no keyphrase, it returns the original set of todos.
export const todoSearch = (todos: Todo[], keyphrase: string|undefined): number[] => {
    const searchResults: number[] = [];

    if (!keyphrase) return []
    todos.forEach(todo => {
        if (todo.title.includes(keyphrase)){
            searchResults.push(todo.id)
        }
    })

    return searchResults;
}