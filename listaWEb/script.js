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

    
    }

    function toggleTask(element){
        element.parentElement.classList.toggle("completed");
    }

    function removeTask(buttom){
        buttom.parentElement.remove();
    }