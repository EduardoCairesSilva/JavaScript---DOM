import TodoForm from "./TodoForm.js";
import TaskList from "./TaskList.js";

export default function App() {

    let url = 'https://dummyjson.com/todos';

    return fetch(url)
        .then(response => response.json())
        .then(json => {
            return `
                ${TodoForm()}
                <hr>
                ${TaskList({ tasks: json.todos })}
            `
        })
}
