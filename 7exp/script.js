
let tasks = [];

const input = document.getElementById("taskInput");
const list = document.getElementById("taskList");
const taskCount = document.getElementById("taskCount");

document.getElementById("addButton").addEventListener("click", addTask);

input.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        addTask();
    }
});

function addTask() {
    const task = input.value.trim();

    if (task === "") {
        return;
    }

    tasks.push(task);
    input.value = "";
    displayTasks();
}

function displayTasks() {
    list.innerHTML = "";

    for (let i = 0; i < tasks.length; i++) {
        const li = document.createElement("li");
        const span = document.createElement("span");
        const deleteButton = document.createElement("button");

        span.textContent = tasks[i];
        deleteButton.textContent = "Delete";
        deleteButton.className = "delete-btn";

        deleteButton.addEventListener("click", function() {
            deleteTask(i);
        });

        li.appendChild(span);
        li.appendChild(deleteButton);
        list.appendChild(li);
    }

    taskCount.textContent =
        tasks.length + (tasks.length === 1 ? " task" : " tasks");
}

function deleteTask(index) {
    tasks.splice(index, 1);
    displayTasks();
}
