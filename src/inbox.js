// <!-- content -->
// <div class="content">

// </div>
// <!-- /content -->

// <!-- dialog form -->
// <dialog class="inbox">
// <h2 class="dialog-title.">New Task</h2>
// <form action="dialog">
//     <div class="task-title">
//         <label for="task-title">Task Title*</label>
//         <input type="text" value="" name="task-title" id="task-title" placeholder="e.g. Workout" class="task-title--input" required>
//     </div>
//     <div class="priority">
//         <label for="priority">Priority</label>
//         <select name="priority" id="priority" class="priority--select">
//             <option value="low">Low</option>
//             <option value="medium">Medium</option>
//             <option value="high">High</option>
//         </select>
//     </div>
//     <div class="schedule">
//         <label for="schedule">Schedule</label>
//         <input type="date" value="" name="schedule" id="schedule" class="due-date">
//     </div>
//     <div class="buttons">
//         <button class="cancel-btn">Cancel</button>
//         <button type="submit" class="add-btn">Add</button>
//     </div>
    
// </form>
// </dialog>
// <!-- /dialog form --> 

// inbox.js


// const inboxItems = [];

// function renderInbox() {

//     const inboxH1= document.createElement('h1');
//     inboxH1.textContent= 'Inbox';

//     const addNewTask = document.createElement('div');
//     addNewTask.classList.add('add-new-task');

//     const plusIcon =  document.createElement('img');
//     plusIcon.src = './images/add_FILL0_wght400_GRAD0_opsz24.svg';
//     plusIcon.alt = 'plus';
//     addNewTask.appendChild(plusIcon);

//     const addTaskText = document.createElement('p');
//     addTaskText.classList.add('add-task-text');
//     addNewTask.appendChild(addTaskText);

//     return addNewTask;

// }


// export { renderInbox };