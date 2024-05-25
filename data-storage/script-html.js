let todoList = document.getElementById('todo-list')

const liWithCheckBox = (task) => {
    return `
    <li class='${task.completed ? 'completed' : ''}'>
        <input type="checkbox" ${task.completed ? 'checked' : ''}>
        ${task.todo}
    </li>
    `;
}

let url = 'https://dummyjson.com/todos';

let request = fetch(url)
    .then(response => response.json())
    .then(json => {
        for (let task of json.todos) {
            todoList.innerHTML += liWithCheckBox(task);
        }

        let lis = document.getElementsByTagName('li');
        let inputs = document.getElementsByTagName('input');
        console.log(inputs)

        for (let li of lis) {
            li.addEventListener('dblclick', e => {
                let input = e.target.querySelector('input');

                if (!li.classList.contains('completed')) {
                    li.classList.add('completed');
                } else {
                    li.classList.remove('completed');
                }

                input.checked = !input.checked
            });

            for (let input of inputs) {
                input.addEventListener('change', () => {
                    if (!input.classList.contains('completed')) {
                        input.classList.add('completed');
                    } else {
                        input.classList.remove('completed');
                    }
                    input.checked = !input.checked
                });
            }
        }
    })
