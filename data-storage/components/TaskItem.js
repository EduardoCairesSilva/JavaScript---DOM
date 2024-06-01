import { useEvent } from "../hooks.js";

export default function TaskItem(props) {
    let liClick = useEvent('dblclick', function liClick(event) {

        let isCompleted = event.target.classList.contains('completed');
        let input = event.target.querySelector('input');

        if ((!isCompleted)) {
            li.classList.add('completed');
        } else {
            li.classList.remove('completed');
        }
        input.checked = !input.checked
    });

    return `
        <li ${liClick} class="${props.completed ? 'completed' : ''}">
            <input type="checkbox" ${props.completed ? 'checked' : ''}>
            ${props.todo}
        </li>
    `;
}
