let todoForm = document.getElementById('todo-form');
let inputTask = document.getElementById('input-task');
let todoList = document.getElementById('todo-list')

let taskList = window.localStorage.getItem('todo-list') ?? '[]';
taskList = JSON.parse(taskList);

const addTaskHtml = (value) => {

    let li = document.createElement('li')
    let checkBox = document.createElement('input')
    checkBox.type = 'checkbox'

    li.addEventListener('dblclick', () => {
        if (!li.style.textDecoration) {
            li.style.textDecoration = 'line-through';
        } else {
            li.style.textDecoration = '';
        }

        checkBox.checked = !checkBox.checked;
    })

    li.textContent = value
    li.prepend(checkBox)
    todoList.append(li)


}

for (let value of taskList) {
    addTaskHtml(value);
}


todoForm.addEventListener('submit', event => {
    event.preventDefault()

    addTaskHtml(inputTask.value);

    taskList.push(inputTask.value);
    window.localStorage.setItem('todo-list', JSON.stringify(taskList));
});
