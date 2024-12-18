const addTaskButton = document.getElementById("addTaskBtn");
const addTaskField = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");
const checkboxes = document.getElementsByClassName("checkbox");
const deleteButtons = document.getElementsByClassName("deleteButton");

function generateId() {}

function createTaskAsElement(name, isCompleted, id) {
    const taskContainer = document.createElement("div");
    taskContainer.className = "task";
    const taskAsElement = [
        document.createElement("li"),
        document.createElement("button"),
        document.createElement("input"),
    ];
    taskAsElement[0].textContent = name;
    taskAsElement[1].textContent = "Удалить"
    taskAsElement[1].className = "deleteButton"
    taskAsElement[2].type = "checkbox";
    taskAsElement[2].className = "checkbox";
    taskAsElement[2].checked = isCompleted;
    for (let el of taskAsElement) {
        taskContainer.appendChild(el);
    }
    taskContainer.id = id;
    taskList.appendChild(taskContainer);
}

function addTask() {
    const taskName = addTaskField.value;
    if (taskName === "") addTaskField.style.borderColor = "red";
    else {
        addTaskField.value = "";
        addTaskField.style.borderColor = "black";
        let id =  Math.floor(Math.random() * 1000);
        createTaskAsElement(taskName, false, id);
        let data = JSON.parse(localStorage.getItem("tasks"));
        if (data === null) data = []
        data.push({
            id: id,
            name: taskName,
            isCompleted: false
        })
        localStorage.setItem("tasks", JSON.stringify(data));
    }
}

function showTasks() {
    const data = JSON.parse(localStorage.getItem("tasks"));
    if(data === null) return;
    data.forEach(task => createTaskAsElement(task.name, task.isCompleted, task.id));
}

addTaskButton.addEventListener("click", () => addTask());

if (checkboxes.length !== 0) {
    Array.from(checkboxes).forEach(checkbox => checkbox.addEventListener("click", () => {
            const data = JSON.parse(localStorage.getItem("tasks"));
            console.log(data);
            data.forEach(task => {
                if (task.id === parseInt(checkbox.parentElement.id))
                    task.isCompleted = checkbox.checked;
                console.log(task.id, parseInt(checkbox.parentElement.id));
            })
            localStorage.setItem("tasks", JSON.stringify(data));
        }
    ))
}

if(deleteButtons.length !== 0) {
    Array.from(deleteButtons).forEach(deleteButton => deleteButton.addEventListener("click", () => {
        const newTasks = JSON.parse(localStorage.getItem("tasks"))
            .filter(task => task.id !== parseInt(deleteButton.parentElement.id));
        console.log(deleteButton.parentElement);
        localStorage.setItem("tasks", JSON.stringify(newTasks));
        location.reload();
    }))
}


showTasks();

