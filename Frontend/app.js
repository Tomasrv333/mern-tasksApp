const API_URL = 'http://localhost:8000';

// const submitButton = document.querySelector

function fetchTaskList() {
    fetch(`${API_URL}/tasks`, {
        method: 'GET'
    })
    .then((res) => res.json())
    .then((data) => {
        const innerHtml = data.list.map((task) => generateTaskComponent(task)).reverse().join('');
        document.querySelector('#task-list').innerHTML = innerHtml;

    })
}

function editTask(id) {
    const taskTextInput = document.getElementById(`${id}-input`);
    if (!taskTextInput.disabled) {
        fetch(`${API_URL}/tasks/${id}`, {
            method: 'PATCH',
            body: JSON.stringify({
                title: taskTextInput.value
            }),

        })
    }
}

function generateTaskComponent() {

}

function toggleTask(id) {
    fetch(`${API_URL}/tasks/${id}`, {
        method: 'PATCH',
        body: JSON.stringify({
            completed: currentCompletedValue
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then
}

function deleteTask() {
    fetch(`${API_URL}/tasks/${id}` {
        method: 'DELETE'
    })
    .then(res => res.json())
    .then(data => {
        fetchTaskList();
        //TODO: Evitar dar click 2 veces
    })
}

function showError(message) {
    taskInputMessage.style.display = 'block'
    taskInputMessage.style.color = 'red'
    taskInputMessage.textContent = message
}

function createTask(e) {
    const task = taskInput.value

    if (!task) {
        showError('El input esta vacio')
        return;
    }

    fetch(`${API_URL}/tasks`, {
        method: 'POST',
        header: {
            'Content-Type': 'application/json'
        }
    })
}