import { tasksArr } from "./inbox";


export function renderNewTask(){
    const allTasksContainer = document.querySelector('.all-tasks-container');
    // Clear all previous tasks before rendering a new one
    allTasksContainer.innerHTML = '';
    
    tasksArr.forEach(task =>{
        const taskContainer = document.createElement('div');
        taskContainer.classList.add('task-container');

        // add the circle icon
        const statusIcon = document.createElement('img');
        statusIcon.classList.add('circle-icon', 'task-icon');
        statusIcon.src = "./images/circle_FILL0_wght400_GRAD0_opsz24.svg"
        taskContainer.appendChild(statusIcon);
        // add task title 
        const taskTitle = document.createElement('p');
        taskTitle.classList.add('task-title');
        taskTitle.textContent = task.title;
        taskContainer.appendChild(taskTitle);
        // add schedule
        const schedule = document.createElement('span');
        schedule.classList.add('schedule');
        schedule.textContent = task.schedule;
        taskContainer.appendChild(schedule);

        // add priority
        const priority = document.createElement('span');
        priority.classList.add('priority');
        priority.textContent = task.priority;
        taskContainer.appendChild(priority);

        // add other icons

        const editIcon = document.createElement('img');
        editIcon.classList.add('edit-icon', 'task-icon');
        editIcon.src = "./images/edit_FILL0_wght400_GRAD0_opsz24.svg";
        taskContainer.appendChild(editIcon);


        const trashIcon = document.createElement('img');
        trashIcon.classList.add('trash-icon', 'task-icon');
        trashIcon.src = "./images/delete_FILL0_wght400_GRAD0_opsz24.svg";
        taskContainer.appendChild(trashIcon);

        allTasksContainer.appendChild(taskContainer);
    
        
    })

};

