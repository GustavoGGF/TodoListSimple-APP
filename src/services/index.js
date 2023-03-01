function addTask() {
  const taskTitle = document.querySelector("#task-title").value;
  const taskTitlePH = document.querySelector("#task-title");

  if (taskTitle) {
    const template = document.querySelector(".template");

    const newTask = template.cloneNode(true);

    newTask.querySelector(".task-title").textContent = taskTitle;

    newTask.classList.remove("template");
    newTask.classList.remove("hide");

    const list = document.querySelector("#task-list");

    list.appendChild(newTask);

    const removeBtn = newTask
      .querySelector(".remove-btn")
      .addEventListener("click", function () {
        removeTask(this);
      });

    const doneBtn = newTask
      .querySelector(".done-btn")
      .addEventListener("click", function () {
        completeTask(this);
      });

    taskTitlePH.value = "";
  } else {
    taskTitlePH.setAttribute("placeholder", "Ecreva aqui sua tarefa");
  }
}

function removeTask(task) {
  task.parentNode.remove(true);
}

function completeTask(task) {
  const taskComplet = task.parentNode;

  taskComplet.classList.toggle("done");
}

const addBtn = document.querySelector("#add-btn");

addBtn.addEventListener("click", function (e) {
  e.preventDefault();

  addTask();
});
