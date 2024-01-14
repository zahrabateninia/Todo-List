import { tasksArr } from "./inbox";
import { createTaskElement, addTaskToContainer, toggleStatusIcon, removeTaskFromContainer, clearTasks } from "./UI";

export function renderNewTask() {
    clearTasks(); // Clear all previous tasks before rendering new ones

        tasksArr.forEach((task) => {
            const taskElement = createTaskElement(task);  // Creates new task element
            addTaskToContainer(taskElement);  
        });

};

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
