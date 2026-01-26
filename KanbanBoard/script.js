
//we select the dom elements 
const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskLists = document.querySelectorAll(".task-list");

//this is the state where i store the task 
let boardState = {
    todo: [],
    inProgress: [],
    done: []
};

//load state from localstorage 
function loadState() {//this function only read and then save data
    const saved = localStorage.getItem("kanbanBoard");

    if(saved){
        boardState = JSON.parse(saved);
    }
}

function saveState() {//this function if we can write it save the data //if we can save the data then we can load the state otherwise it will be empty
localStorage.setItem("kanbanBoard",JSON.stringify(boardState));
}

//then we will create the RenderFunction
//this function creates the UI from the data
//it render function means first we clean the old task
//then check for the new existing task and add 

function renderBoard(){
    taskLists.forEach(list => {
        list.innerHTML = "";//clear old UI
    });

    renderColumn("todo", boardState.todo);
    renderColumn("inProgress", boardState.inProgress);
    renderColumn("done", boardState.done);
}
//here we render the column means add card based on the no.of tasks

function renderColumn(columnId,tasks){
    const column = document.getElementById(columnId);

    tasks.forEach((task,index)=> {
        const card = document.createElement("div");

        card.className = "card";
        card.textContent =  task;
        card.draggable = true;

        card.dataset.index  = index;
        card.dataset.column = columnId;

        addDragEvents(card);

        column.appendChild(card);

    });
}
//add task
addTaskBtn.addEventListener("click",() => {
    const taskText = taskInput.value.trim();


    if(taskInput === "") return;


    boardState.todo.push(taskText);

    saveState();
    renderBoard();

    taskInput.value = "";
});
//here we use the drag and drop
let draggedTask = null;
//drag start from here
function addDragEvents(card){
    card.addEventListener("dragstart",() => {
        draggedTask = {
            text: card.textContent,
            fromColumn: card.dataset.column,
            index: Number(card.dataset.index)
        };
    });
}
//drag over and leave
taskLists.forEach(list => {
  list.addEventListener("dragover", e => {
    e.preventDefault();
    list.classList.add("drag-over");
  });

  list.addEventListener("dragleave", () => {
    list.classList.remove("drag-over");
  });
});
//drop
taskLists.forEach(list => {
  list.addEventListener("drop", () => {
    
    const toColumn = list.dataset.column;
//remove the task from old column
    const task = boardState[draggedTask.fromColumn]
      .splice(draggedTask.index, 1)[0];

    boardState[toColumn].push(task);

    draggedTask = null;

    saveState();
    renderBoard();
    });
  });

renderBoard();
loadState();
