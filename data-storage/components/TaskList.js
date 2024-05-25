import TaskItem from "./TaskItem.js";

export default function TaskList(props) {
    return `
        <ul>
            ${props.tasks.map(task => TaskItem(task)).join('')}
        </ul>
    `;
}
