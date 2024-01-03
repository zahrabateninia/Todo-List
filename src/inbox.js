import { renderNewTask } from "./toDoItem";

export function renderInbox(){
    const inboxDiv = document.createElement('div');
    inboxDiv.classList.add('inbox-div');

    const inboxH1= document.createElement('h1');
    inboxH1.textContent= 'Inbox';

    const addNewTaskDiv = document.createElement('div');
    addNewTaskDiv.classList.add('add-new-task');

    const plusIcon =  document.createElement('img');
    plusIcon.src = './images/add_FILL0_wght400_GRAD0_opsz24.svg';
    plusIcon.classList.add('task-plus-icon')
    plusIcon.alt = 'plus';
    addNewTaskDiv.appendChild(plusIcon);

    const addTaskP = document.createElement('p');
    addTaskP.classList.add('add-task-text');
    addTaskP.textContent = 'Add a new task'
    addNewTaskDiv.appendChild(addTaskP);
    
    inboxDiv.appendChild(inboxH1);
    inboxDiv.appendChild(addNewTaskDiv);
    createAddTaskDialog();
    return inboxDiv;
};



function createAddTaskDialog() {
    // Create dialog element
    const dialog = document.createElement('dialog');
    dialog.classList.add('add-task-dialog');

    // Create dialog title
    const title = document.createElement('h2');
    title.classList.add('dialog-title');
    title.textContent = 'New Task';

    // Create form
    const form = document.createElement('form');
    form.action = "dialog"; 

    // Form inputs
    const inputsDiv = document.createElement('div'); 
    inputsDiv.classList.add('inputsDiv');

    // label input div for each of inputs
    const individualInput = document.createElement('div');
    individualInput.classList.add('individual-input');


    // Task title input
    const taskTitleDiv = document.createElement('div');
    taskTitleDiv.classList.add('task-title');
    const taskTitleLabel = document.createElement('label');
    taskTitleLabel.htmlFor = 'task-title';
    taskTitleLabel.textContent = 'Task Title*';
    const taskTitleInput = document.createElement('input');
    taskTitleInput.type = 'text';
    taskTitleInput.name = 'task-title';
    taskTitleInput.id = 'task-title';
    taskTitleInput.classList.add('task-title--input');
    taskTitleInput.placeholder = 'e.g. Workout';
    taskTitleInput.required = true;
    taskTitleDiv.appendChild(taskTitleLabel);
    taskTitleDiv.appendChild(taskTitleInput);

    individualInput.appendChild(taskTitleDiv);

    // Priority select
    const priorityDiv = document.createElement('div');
    priorityDiv.classList.add('priority');
    const priorityLabel = document.createElement('label');
    priorityLabel.htmlFor = 'priority';
    priorityLabel.textContent = 'Priority';
    const prioritySelect = document.createElement('select');
    prioritySelect.name = 'priority';
    prioritySelect.id = 'priority';
    prioritySelect.classList.add('priority--select');
    ['Low', 'Medium', 'High'].forEach((priority) => {
        const option = document.createElement('option');
        option.value = priority.toLowerCase();
        option.textContent = priority;
        prioritySelect.appendChild(option);
    });
    priorityDiv.appendChild(priorityLabel);
    priorityDiv.appendChild(prioritySelect);

    individualInput.appendChild(priorityDiv);

    // Schedule date input
    const scheduleDiv = document.createElement('div');
    scheduleDiv.classList.add('schedule');
    const scheduleLabel = document.createElement('label');
    scheduleLabel.htmlFor = 'schedule';
    scheduleLabel.textContent = 'Schedule';
    const scheduleInput = document.createElement('input');
    scheduleInput.type = 'date';
    scheduleInput.name = 'schedule';
    scheduleInput.id = 'schedule';
    scheduleInput.classList.add('due-date');
    scheduleDiv.appendChild(scheduleLabel);
    scheduleDiv.appendChild(scheduleInput);

    individualInput.appendChild(scheduleDiv);

    // Buttons
    const buttonsDiv = document.createElement('div');
    buttonsDiv.classList.add('buttons');
    const cancelButton = document.createElement('button');
    cancelButton.classList.add('cancel-btn');
    cancelButton.textContent = 'Cancel';
    const addButton = document.createElement('button');
    addButton.type = 'submit';
    addButton.classList.add('add-btn');
    addButton.textContent = 'Add';
    buttonsDiv.appendChild(cancelButton);
    buttonsDiv.appendChild(addButton);

    // Append all inputs and their labels in inputsDiv 
    inputsDiv.appendChild(individualInput);

    // Append all parts to form
    form.appendChild(inputsDiv);
    form.appendChild(buttonsDiv);

    // Append form to dialog
    dialog.appendChild(title);
    dialog.appendChild(form);

    return dialog;
};

// Global tasks container
let tasksContainer; // Will be initialized only once
export const tasksArr = [];

export function addTaskDialog() {
    // Ensure tasksContainer is created and appended only once
    if (!tasksContainer) {
        tasksContainer = document.createElement('div');
        tasksContainer.classList.add('tasks-container');
        document.querySelector('.main-content').appendChild(tasksContainer);
    }

    const addNewTaskDiv = document.querySelector('.add-new-task');

    // Attach the event listener to the .add-new-task div
    addNewTaskDiv.addEventListener('click', () => {
        const dialog = createAddTaskDialog();
        document.body.appendChild(dialog);
        dialog.showModal();

        const cancelButton = dialog.querySelector('.cancel-btn'); 
        const addButton = dialog.querySelector('.add-btn');

        cancelButton.addEventListener('click', () => {
            dialog.close();
            document.body.removeChild(dialog); // removing the dialog after closing
        });

        addButton.addEventListener('click', (e) =>{
            e.preventDefault();

            const title = dialog.querySelector('#task-title').value;
            const priority = dialog.querySelector('#priority').value;
            const schedule = dialog.querySelector('#schedule').value;

            const newTask = {
                title: title,
                priority: priority,
                schedule: schedule
            };

            tasksArr.push(newTask);

            dialog.close();
            document.body.removeChild(dialog);

            renderNewTask(); // This function should now handle rendering all tasks
        });
    });
}
