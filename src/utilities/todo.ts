import { Todo } from "../interfaces/todo";

// returns a new Todo List with another todo to the end of the array with an id 1 higher than the highest one
export const addTodo = (todos: Todo[], title: string) => {
    let idCounter = 0;

    todos.forEach((todo) => {
        if (todo.id > idCounter) idCounter = todo.id
    })
    
    const newTodo: Todo = {
        id: idCounter + 1,
        title: title ?? '',
        userId: 1,
        completed: false
    }


    return [...todos, newTodo]
}

// returns new Todo List with edited title of selected todo
export const editTodo = (todos: Todo[], id: number, title: string|undefined) => {
    todos[todos.findIndex(todo => todo.id === id)].title = (title ?? '')
    return todos
}

// returns Todo List with removed todo
export const removeTodo = (todos: Todo[], id: number) => {
    return todos.filter(todo => todo.id !== id)
}

// returns Todo list with updated completed attribute of todo
export const updateTodo = (todos: Todo[], id: number, isComplete: boolean) => {
    todos[todos.findIndex(todo => todo.id === id)].completed = isComplete
    return todos
}