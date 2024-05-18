let todoList = document.getElementById('todo-list')

const addTaskHtml = (task) => {
    let li = document.createElement('li')
    let checkBox = document.createElement('input')
    checkBox.type = 'checkbox'
    checkBox.checked = task.completed

    if (checkBox.checked) {
        li.style.textDecoration = 'line-through';
    }

    checkBox.addEventListener('click', () => {
        if (!li.style.textDecoration) {
            li.style.textDecoration = 'line-through';
        } else {
            li.style.textDecoration = '';
        }
    })

    li.addEventListener('dblclick', () => {
        if (!li.style.textDecoration) {
            li.style.textDecoration = 'line-through';
        } else {
            li.style.textDecoration = '';
        }
        checkBox.checked = !checkBox.checked;
    })

    li.textContent = task.todo
    li.prepend(checkBox)
    todoList.append(li)
}

let url = 'https://dummyjson.com/todos';

let request = fetch(url)
    .then(response => response.json())
    .then(json => {
        for (let task of json.todos) {
            addTaskHtml(task);
        }
    })
