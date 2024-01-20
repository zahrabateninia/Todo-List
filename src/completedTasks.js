import { tasksArr } from "./inbox";

export function renderCompletedTasks() {
  const completedDiv = document.createElement("div");
  completedDiv.classList.add("completed-div");

  const completedH1 = document.createElement("h1");
  completedH1.textContent = "Completed Tasks";

  const allTasksContainer = document.createElement("div");
  allTasksContainer.classList.add("all-tasks-container");

  completedDiv.appendChild(completedH1);
  completedDiv.appendChild(allTasksContainer);

  return completedDiv;
}

export function displayCompletedTasks() {
  // for each task check if the 'done' is equal to true for showing it in the completed div
  const allTasksContainer = document.querySelector(".all-tasks-container");

  if (allTasksContainer) {
    // Clear existing content
    allTasksContainer.innerHTML = "";

    // Loop through tasks and add high-priority tasks
    tasksArr.forEach((task) => {
      if (task.done === true) {
        const completedTask = createCompletedTaskElement(task);
        allTasksContainer.appendChild(completedTask);
      }
    });
  }
}

function createCompletedTaskElement(task) {
  const taskContainer = document.createElement("div");
  taskContainer.classList.add("task-container");

  const taskTitle = document.createElement("p");
  taskTitle.classList.add("task-title");
  taskTitle.textContent = task.title;
  taskContainer.appendChild(taskTitle);

  return taskContainer;
}
