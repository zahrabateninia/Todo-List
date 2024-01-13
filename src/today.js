import { tasksArr } from "./inbox";
import { createTaskElement } from "./UI";

export function renderTodayTasks(){
    const todayDiv = document.createElement('div');
    todayDiv.classList.add('today-div');

    const todayH1= document.createElement('h1');
    todayH1.textContent= 'Today Tasks';

    // all tasks container which is below the header and above the add new task div
    const allTasksContainer = document.createElement('div');
    allTasksContainer.classList.add('all-tasks-container');

    
    todayDiv.appendChild(todayH1);
    todayDiv.appendChild(allTasksContainer);

    displayTodayTasks();
    return todayDiv;
};

function displayTodayTasks() {
    const allTasksContainer = document.querySelector('.all-tasks-container');

    if(allTasksContainer){ // if there are tasks in inbox
        allTasksContainer.innerHTML = ''; // Clear previous content

        const todayTasks = tasksArr.filter(task => isDueToday(task.schedule));

        if (todayTasks.length > 0) {
            todayTasks.forEach(task => {
                const taskElement = createTaskElement(task); 
                allTasksContainer.appendChild(taskElement);
            });
        } else {
            // No tasks for today
            const noTaskMessage = document.createElement('p');
            noTaskMessage.textContent = "No tasks today! Time for a movie break?";
            noTaskMessage.classList.add('no-task-msg');
            allTasksContainer.appendChild(noTaskMessage);
        }
    }


    
};

function isDueToday(taskDate) {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const dueDate = new Date(taskDate);
    dueDate.setHours(0, 0, 0, 0);

    return today.getTime() === dueDate.getTime();
}
