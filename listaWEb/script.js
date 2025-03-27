function addTask(){
    let taskInput = document.getElementById("taskInput");
    let taskText = taskInput.value.trim();
    
    if(!taskText){
        alert("Please enter a task");
        return;
    }

    let taskList = document.getElementById("taskList");
    taskInput.value = "";
    let item = document.createElement("li");
    item.innerHTML = `
    <span onclick="toggleTask(this)">${taskText}</span>
    <buttom class="delete-btn" onclick="deleteTask(this)">X</buttom>
    `
    taskList.appendChild(item);
    saveTask();

    
    }

    function toggleTask(element){
        element.parentElement.classList.toggle("completed");
    }

    function deleteTask(buttom){
        buttom.parentElement.remove();
    }
    function saveTask(){
        let tasks = [];

        document.querySelectorAll("#taskList li").forEach(task => {
            tasks.push({
                tarefa: task.innerText.trim(),
                status: task.classList.contains("completed")
            });
        });

        localStorage.setItem("tasks", JSON.stringify(tasks));
    
    }

    function loadTask(){
        let task =JSON.parse(localStorage.getItem("tasks")) || [];

        tasks.forEach((tasks) => {
            let li = document.createElement("li");

            li.innerHTML = `
            <span onclick="toggleTask(this)">${task.tarefa}</span>
            <button class="delete-btn" onclick="deleteTask(this)">X</button>
            `;
            if(task.status){
                li.classList.add("completed");
            }
            taskList.appendChild(li);
        });
    }
