const addTaskField = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

const emptyTaskList = document.createElement("p");
emptyTaskList.textContent = "Список задач пуст";
emptyTaskList.className = "task";

function generateId() {}

class LocalStorage {
    static addTask(task) {
        const data = JSON.parse(localStorage.getItem("tasks"));
        if (data === null) localStorage.setItem("tasks", JSON.stringify([task]));
        else {
            data.push(task);
            localStorage.setItem("tasks", JSON.stringify(data));
        }
    }
    static getTasks() {
        return JSON.parse(localStorage.getItem("tasks"));
    }
}

function createTaskAsElement(name, isCompleted, id) {
    const taskContainer = document.createElement("div");
    taskContainer.className = "task";
    taskContainer.id = id;
    const taskElements = [
        document.createElement("li"), //текстовое поле
        document.createElement("button"), //кнопка удаления
        document.createElement("input"), //флажок состояния
    ];
    taskElements[0].textContent = name;
    taskElements[1].textContent = "Удалить";
    taskElements[1].className = "deleteButton";
    taskElements[2].type = "checkbox";
    taskElements[2].className = "checkbox";
    taskElements[2].checked = isCompleted;
    taskElements.forEach(element => taskContainer.appendChild(element));
    taskList.prepend(taskContainer);
}

function addTask() {
    const taskName = addTaskField.value.trim();
    if (taskName === "") addTaskField.style.borderColor = "red";
    else {
        try {
            taskList.removeChild(emptyTaskList);
        } catch (e) {
            console.log("Список не пустой");
        }
        addTaskField.value = "";
        addTaskField.style.borderColor = "black";
        let id = Math.floor(Math.random() * 1000);
        createTaskAsElement(taskName, false, id);
        const task = {
            id: id,
            name: taskName,
            isCompleted: false
        }
        LocalStorage.addTask(task);
    }
}

function showTasks() {
    const data = LocalStorage.getTasks();
    console.log(data);
    if (data === null || data.length === 0)
        taskList.prepend(emptyTaskList);
    else
        data.forEach(task => createTaskAsElement(task.name, task.isCompleted, task.id));
}

document.getElementById("addTaskBtn")
    .addEventListener("click", () => addTask());

taskList.addEventListener("click", (event) => {
    if (event.target.classList.contains("checkbox")) {
        const checkbox = event.target;
        const data = LocalStorage.getTasks();
        data.forEach(task => {
            if (task.id === parseInt(checkbox.parentElement.id))
                task.isCompleted = checkbox.checked;
        });
        localStorage.setItem("tasks", JSON.stringify(data));
    }

    if (event.target.classList.contains("deleteButton")) {
        const deleteButton = event.target;
        const newTasks = LocalStorage.getTasks()
            .filter(task => task.id !== parseInt(deleteButton.parentElement.id));
        localStorage.setItem("tasks", JSON.stringify(newTasks));
        if(newTasks.length === 0) taskList.prepend(emptyTaskList);
        deleteButton.parentElement.remove();
    }
});


showTasks();