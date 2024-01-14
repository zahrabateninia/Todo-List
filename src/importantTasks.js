import { tasksArr } from "./inbox";
import { renderNewTask } from "./toDoItem";
import { createTaskElement } from "./UI";

export function renderImportantTasks(){
    const importantDiv = document.createElement('div');
    importantDiv.classList.add('important-div');

    const importantH1= document.createElement('h1');
    importantH1.textContent= 'Important Tasks';

    const allTasksContainer = document.createElement('div');
    allTasksContainer.classList.add('all-tasks-container');
    
    importantDiv.appendChild(importantH1);
    importantDiv.appendChild(allTasksContainer);

    return importantDiv;
};

export function displayImportantTasks(){
    // in the task array check for objects that their priority is high,
    // if that so, add these tasks to tasks container in important div 
    const allTasksContainer = document.querySelector('.all-tasks-container'); 

    if (allTasksContainer) {
        // Clear existing content
        allTasksContainer.innerHTML = '';

        // Loop through tasks and add high-priority tasks
        tasksArr.forEach(task => {
            if (task.priority === 'high') {
                const importantTask = createTaskElement(task);
                allTasksContainer.appendChild(importantTask);
            }
        });
    }
    
}