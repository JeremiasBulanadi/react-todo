import axios from "axios"
import { Todo } from "../interfaces/todo";

const url = "https://jsonplaceholder.typicode.com"

export const requests = {
    getTodos: async () : Promise<Todo[]> => { // returns the todos from jsonplaceholder
        const { data } = await axios.get(`${url}/todos`);
        return data
    } 
}