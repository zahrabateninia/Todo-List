import { renderInbox ,  createAndAddNewTask } from "./inbox";
import { renderTodayTasks } from "./todayTasks";
import { enableProjectAddition } from "./projectManager";
import { displayTodayTasks } from "./todayTasks";
import { displayImportantTasks, renderImportantTasks } from "./importantTasks";
import { displayCompletedTasks, renderCompletedTasks } from "./completedTasks";
import { attachEventListenersToTasksContainer, renderNewTask } from "./toDoItem";
import { tasksArr } from "./inbox";

export function updateMainContent(){
    const mainContent = document.querySelector('.main-content');

    
    // Grab all sidebar links
    const sidebarLinks = document.querySelectorAll('.sidebar a');
    
    // Add an event listener to each link
    sidebarLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();  // Prevent the default link action
            // Clear the main content
            mainContent.textContent = ' ';

            // Determine which function to call based on clicked link's class
            if(link.classList.contains('inbox')){
                const inboxContent = renderInbox(); 
                mainContent.appendChild(inboxContent); 
                createAndAddNewTask(); // by clicking add btn in dialog add the new task to tasksArr and the all tasks container in the inbox 
                attachEventListenersToTasksContainer(); // event listener delegation
                
                if(tasksArr.length > 0 ){ // if there is already some tasks added show them when navigate back to inbox link
                    renderNewTask();
            };
        
            }
            else if(link.classList.contains('today')){
                const todayContent = renderTodayTasks();
                mainContent.appendChild(todayContent);
                displayTodayTasks();
            }
            else if(link.classList.contains('completed')){
                const completedContent = renderCompletedTasks();
                mainContent.appendChild(completedContent);
                displayCompletedTasks();
            }
            else if(link.classList.contains('important')){
                const importantContent = renderImportantTasks();
                mainContent.appendChild(importantContent);
                displayImportantTasks();
            }
            else if(link.classList.contains('add-project')){
                enableProjectAddition();
            };
        });
    });
};

// DOM for to do list tasks

export function clearTasks() {
    const allTasksContainer = document.querySelector('.all-tasks-container');
    allTasksContainer.innerHTML = '';
}


export function createTaskElement(task) { 
        const taskContainer = document.createElement('div');
        taskContainer.classList.add('task-container');
        const taskStatusTitle = document.createElement('div');
        taskStatusTitle.classList.add('task-status-title');
        const taskDetails = document.createElement('div');
        taskDetails.classList.add('task-details');

        // add the status icon
        const statusIcon = document.createElement('img');
        statusIcon.classList.add('circle-icon', 'task-icon');
        statusIcon.src = "./images/circle_FILL0_wght400_GRAD0_opsz24.svg";
        taskStatusTitle.appendChild(statusIcon);


        // add task title 
        const taskTitle = document.createElement('p');
        taskTitle.classList.add('task-title');
        taskTitle.textContent = task.title;
        taskStatusTitle.appendChild(taskTitle);


        // add schedule
        const schedule = document.createElement('span');
        schedule.classList.add('schedule');
        schedule.textContent = task.schedule;
        taskDetails.appendChild(schedule);

        // add priority
        const priority = document.createElement('span');
        priority.classList.add('priority');
        priority.textContent = task.priority;
        taskDetails.appendChild(priority);

        // add trash icon

        const trashIcon = document.createElement('img');
        trashIcon.classList.add('trash-icon', 'task-icon');
        trashIcon.src = "./images/delete_FILL0_wght400_GRAD0_opsz24.svg";
        taskDetails.appendChild(trashIcon);


        taskContainer.appendChild(taskStatusTitle);
        taskContainer.appendChild(taskDetails);

    return taskContainer; 
}

export function addTaskToContainer(taskElement) {
    const allTasksContainer = document.querySelector('.all-tasks-container');
    allTasksContainer.appendChild(taskElement);
}

export function removeTaskFromContainer(taskElement) {
    const allTasksContainer = document.querySelector('.all-tasks-container');
    allTasksContainer.removeChild(taskElement);
}

export function toggleStatusIcon(task, taskElement){
    const statusIcon = taskElement.querySelector('.circle-icon');
    task.done = !task.done;
    const taskTitle = taskElement.querySelector('.task-title');

    // Change the visual representation of the status icon
    if(task.done){
        statusIcon.src = "images/check_circle_FILL0_wght400_GRAD0_opsz24.svg";
        taskTitle.style.textDecoration = 'line-through';
    }else{
        statusIcon.src = "./images/circle_FILL0_wght400_GRAD0_opsz24.svg";
        taskTitle.style.textDecoration = 'none';
    }

    // renderNewTask(); // re-render tasks to update UI

};


