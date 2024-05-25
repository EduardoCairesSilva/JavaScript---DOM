import { useEvent } from "../hooks.js";

export default function TaskItem(props) {
    let liClick = useEvent('dblclick', function liClick() {
        console.log('teste');
    });

    return `
        <li ${liClick} class="${props.completed ? 'completed' : ''}">
            <input type="checkbox" ${props.completed ? 'checked' : ''}>
            ${props.content}
        </li>
    `;
}
