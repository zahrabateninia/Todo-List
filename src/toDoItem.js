import { tasksArr } from "./inbox";
import { createTaskElement, addTaskToContainer, toggleStatusIcon, removeTaskFromContainer, clearTasks } from "./UI";

export function renderNewTask() {
    clearTasks(); // Clear all previous tasks before rendering new ones

    tasksArr.forEach((task, index) => {
        const taskElement = createTaskElement(task);  // Creates new task element

        // Add event listeners for toggling completion, editing task, and removing task
        // Attach event listeners to icons after they are created and added to the DOM
        taskElement.querySelector('.circle-icon').addEventListener('click', () => toggleStatusIcon(task, taskElement));
        taskElement.querySelector('.trash-icon').addEventListener('click', () => {
            removeTaskFromContainer(taskElement);
            tasksArr.splice(index, 1);  // Remove the task from the array
        });

        addTaskToContainer(taskElement);  // Adds task element to container
    });
}
