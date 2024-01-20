import { tasksArr } from "./inbox";

export function renderTodayTasks(){
    const todayDiv = document.createElement('div');
    todayDiv.classList.add('today-div');

    const todayH1= document.createElement('h1');
    todayH1.textContent= 'Today Tasks';

    const allTasksContainer = document.createElement('div');
    allTasksContainer.classList.add('all-tasks-container');
    
    todayDiv.appendChild(todayH1);
    todayDiv.appendChild(allTasksContainer);

    displayTodayTasks();
    return todayDiv;
}

export function displayTodayTasks() {
    const allTasksContainer = document.querySelector('.all-tasks-container');

    if(allTasksContainer){ // if there are tasks in inbox
        allTasksContainer.innerHTML = ''; // Clear previous content

        const todayTasks = tasksArr.filter(task => isDueToday(task.schedule));

        if (todayTasks.length > 0) {
            todayTasks.forEach(task => {
                const taskElement = createTodayTaskElement(task); 
                allTasksContainer.appendChild(taskElement);
            });
        } else {
            // No tasks for today
            const noTaskMessage = document.createElement('p');
            noTaskMessage.textContent = "No tasks today!";
            noTaskMessage.classList.add('no-task-msg');
            allTasksContainer.appendChild(noTaskMessage);
        }
    }
}

function isDueToday(taskDate) {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const dueDate = new Date(taskDate);
    dueDate.setHours(0, 0, 0, 0);

    return today.getTime() === dueDate.getTime();
}


function createTodayTaskElement(task){

    const taskContainer = document.createElement('div');
    taskContainer.classList.add('task-container');

    const taskTitle = document.createElement('p');
    taskTitle.classList.add('task-title');
    taskTitle.textContent = task.title;
    taskContainer.appendChild(taskTitle);

    return taskContainer;
}