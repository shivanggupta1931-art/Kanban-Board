
let tasksData = {}

const todo = document.querySelector('#todo');
const progress = document.querySelector('#progress');
const done = document.querySelector('#done');
let dragElement = null;
const columns = [todo, progress, done];

function addTask(title, desc,priority = "low", column) {
    const div = document.createElement("div");
    div.classList.add("task");
    div.setAttribute("draggable", "true");

    div.innerHTML = `
     <h2>${title}</h2>
     <p>${desc}</p>
    <span class="priority ${priority}">
       ${priority.toUpperCase()}
    </span>
     <button>Delete</button>
    `;

    column.appendChild(div);

    div.addEventListener("dragstart", () => {
        dragElement = div;
    });
    const deleteButton=div.querySelector("button");
    deleteButton.addEventListener("click",()=>{
        div.remove();
        updateTaskCount();
    })


    return div;
}

function updateTaskCount() {
    columns.forEach(col => {
        const tasks = col.querySelectorAll(".task");
        const count = col.querySelector(".right");

        tasksData[col.id] = Array.from(tasks).map(t => {
            return {
                title: t.querySelector("h2").innerText,
                desc: t.querySelector("p").innerText,
                priority: t.querySelector(".priority").classList[1]
            }
        });

        localStorage.setItem("tasks", JSON.stringify(tasksData));
        count.innerText = tasks.length;
    });
    updateAnalytics();
}

if (localStorage.getItem("tasks")) {
    const data = JSON.parse(localStorage.getItem("tasks"));
    console.log(data);

    for (const col in data) {
        const column = document.querySelector(`#${col}`);

        data[col].forEach(task => {
            addTask(task.title, task.desc, task.priority, column);
        });
    }

    updateTaskCount();
}

const tasks = document.querySelectorAll('.task');

tasks.forEach(task => {
    task.addEventListener("dragstart", () => {
        dragElement = task;
    });
});

function addDragEventOnColumn(column) {
    column.addEventListener("dragenter", (e) => {
        e.preventDefault();
        column.classList.add("hover-over");
    });

    column.addEventListener("dragover", (e) => {
        e.preventDefault();
    });

    column.addEventListener("dragleave", (e) => {
        e.preventDefault();
        column.classList.remove("hover-over");
    });

    column.addEventListener("drop", (e) => {
        e.preventDefault();

        column.appendChild(dragElement);
        column.classList.remove("hover-over");

        updateTaskCount();
    });
}

addDragEventOnColumn(todo);
addDragEventOnColumn(progress);
addDragEventOnColumn(done);

// MODAL RELATED LOGIC
const toggleModalButton = document.querySelector('#toggle-modal');
const modal = document.querySelector('.modal');
const modalBg = document.querySelector('.modal .bg');
const addTaskButton = document.querySelector('#add-new-task');

toggleModalButton.addEventListener("click", () => {
    modal.classList.toggle("active");
});

modalBg.addEventListener("click", () => {
    modal.classList.remove("active");
});

addTaskButton.addEventListener("click", () => {
    const taskTitle = document.querySelector('#task-title-input').value;
    const taskDesc = document.querySelector('#task-desc-input').value;
    const priority =document.querySelector("#task-priority").value;

    addTask(taskTitle, taskDesc,priority, todo);

    updateTaskCount();

    document.querySelector('#task-title-input').value = "";
    document.querySelector('#task-desc-input').value = "";

    modal.classList.remove("active");
    // updateAnalytics();
});

const themeToggle = document.querySelector("#theme-toggle");

const savedTheme = localStorage.getItem("theme");

if(savedTheme === "light"){
    document.body.classList.add("light-theme");
    themeToggle.innerText = "🌙";
}

themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("light-theme");

    if(document.body.classList.contains("light-theme")){
        localStorage.setItem("theme","light");
        themeToggle.innerText = "🌙";
    }
    else{
        localStorage.setItem("theme","dark");
        themeToggle.innerText = "☀️";
    }

});



// PROGRESS TAB
function updateAnalytics(){

    const todoTasks = todo.querySelectorAll(".task").length;
    const progressTasks = progress.querySelectorAll(".task").length;
    const doneTasks = done.querySelectorAll(".task").length;

    const totalTasks = todoTasks + progressTasks + doneTasks;

    let completionRate = 0;

    if(totalTasks > 0){
        completionRate = Math.round((doneTasks / totalTasks) * 100);
    }

    document.querySelector("#total-tasks").innerText = totalTasks;
    document.querySelector("#completed-tasks").innerText = doneTasks;
    document.querySelector("#progress-tasks").innerText = progressTasks;
    document.querySelector("#pending-tasks").innerText = todoTasks;
    document.querySelector("#completion-rate").innerText = `${completionRate}%`;
}