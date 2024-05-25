import TaskItem from "./TaskItem.js";
import TaskList from "./TaskList.js";

export default function App() {

    let taskList = [
        { completed: true, content: "task 1" },
        { completed: false, content: "task 3" },
        { completed: true, content: "task 2" },
        { completed: false, content: "task 4" },
    ]

    let tasks = TaskList({tasks: taskList})
    return tasks;
}
