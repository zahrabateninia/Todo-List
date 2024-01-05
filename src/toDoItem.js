import { tasksArr } from "./inbox";


export function renderNewTask(){
    const allTasksContainer = document.querySelector('.all-tasks-container');
    // Clear all previous tasks before rendering a new one
    allTasksContainer.innerHTML = '';
    
    tasksArr.forEach(task =>{
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


        // Toggle completion status
        statusIcon.addEventListener('click', ()=>{
            task.done = !task.done;
            if(task.done){
                statusIcon.src = "images/check_circle_FILL0_wght400_GRAD0_opsz24.svg";
                taskTitle.style.textDecoration = 'line-through';
            }else{
                statusIcon.src = "./images/circle_FILL0_wght400_GRAD0_opsz24.svg";
                taskTitle.style.textDecoration = 'none';
            }
        });

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

        // add other icons

        const editIcon = document.createElement('img');
        editIcon.classList.add('edit-icon', 'task-icon');
        editIcon.src = "./images/edit_FILL0_wght400_GRAD0_opsz24.svg";
        taskDetails.appendChild(editIcon);


        const trashIcon = document.createElement('img');
        trashIcon.classList.add('trash-icon', 'task-icon');
        trashIcon.src = "./images/delete_FILL0_wght400_GRAD0_opsz24.svg";
        taskDetails.appendChild(trashIcon);

        taskContainer.appendChild(taskStatusTitle);
        taskContainer.appendChild(taskDetails);
        allTasksContainer.appendChild(taskContainer);


        trashIcon.addEventListener('click', ()=>{
            // remove the task from the DOM (the UI)
            allTasksContainer.removeChild(taskContainer);
            // remove the actual task data
            const index = tasksArr.findIndex(t => t === task);
            tasksArr.splice(index, 1);
        })
    
    })

};

