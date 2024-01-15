import { tasksArr } from "./inbox";
import { createTaskElement, addTaskToContainer, toggleStatusIcon, removeTaskFromContainer, clearTasks } from "./UI";


export function renderNewTask() {
    clearTasks();

    tasksArr.forEach(task => {
        const taskElement = createTaskElement(task);
        updateTaskUI(task, taskElement); 
        addTaskToContainer(taskElement);
    });
}


function updateTaskUI(task, taskElement) {
    const statusIcon = taskElement.querySelector('.circle-icon');
    const taskTitle = taskElement.querySelector('.task-title');

    if (task.done) {
        statusIcon.src = "images/check_circle_FILL0_wght400_GRAD0_opsz24.svg";
        taskTitle.style.textDecoration = 'line-through';
    } else {
        statusIcon.src = "./images/circle_FILL0_wght400_GRAD0_opsz24.svg";
        taskTitle.style.textDecoration = 'none';
    }
}

export function attachEventListenersToTasksContainer() {
    const allTasksContainer = document.querySelector('.all-tasks-container');

    allTasksContainer.addEventListener('click', (event) => {
        const taskElement = event.target.closest('.task-container');
        if (!taskElement) return;

        if (event.target.classList.contains('circle-icon')) {
            const index = Array.from(allTasksContainer.children).indexOf(taskElement);
            toggleStatusIcon(tasksArr[index], taskElement);
        } else if (event.target.classList.contains('trash-icon')) {
            const index = Array.from(allTasksContainer.children).indexOf(taskElement);
            removeTaskFromContainer(taskElement);
            tasksArr.splice(index, 1);
        }
    });
}
