(()=>{"use strict";var __webpack_modules__={779:()=>{eval("\n;// CONCATENATED MODULE: ./src/initializeWebsite.js\nfunction createHeader(){\n    const header = document.createElement('header');\n\n    const headerLogo = document.createElement('img');\n    headerLogo.classList.add('logo');\n    headerLogo.src = \"./images/todolist.svg\";\n    headerLogo.alt = 'logo';\n\n    const headerH1 = document.createElement('h1');\n    headerH1.textContent = 'Todo List';\n\n    header.appendChild(headerLogo);\n    header.appendChild(headerH1);\n    return header;\n}\n\n\nfunction createSidebar() {\n    const nav = document.createElement('nav');\n    const sidebar = document.createElement('div');\n    sidebar.classList.add('sidebar');\n\n    const sidebarItems = [\n        { class: 'inbox', text: 'Inbox', imgSrc: './images/inbox_FILL0_wght400_GRAD0_opsz24.svg', altText: 'inbox'},\n        { class: 'today', text: 'Today', imgSrc: './images/today_FILL0_wght400_GRAD0_opsz24.svg', altText: 'today' },\n        { class: 'important', text: 'Important', imgSrc: './images/stars_FILL0_wght400_GRAD0_opsz24.svg', altText: 'important' },\n        { class: 'completed', text: 'Completed', imgSrc: './images/done_all_FILL0_wght400_GRAD0_opsz24.svg', altText: 'completed' },\n        { class: 'add-project', text: 'Projects', imgSrc: './images/add_FILL0_wght400_GRAD0_opsz24.svg', altText: 'plus' }\n    ];\n\n    // Loop through each sidebar item and create its elements\n    sidebarItems.forEach(item => {\n        const anchor = document.createElement('a');\n        anchor.classList.add(item.class);\n\n        const img = document.createElement('img');\n        img.src = item.imgSrc;\n        img.alt = item.altText;\n        img.classList.add('navbar', 'icon');\n\n        const p = document.createElement('p');\n        p.textContent = item.text;\n        p.classList.add(item.class);\n\n        if (item.class === 'add-project') {\n            // Append the text before the icon\n            anchor.appendChild(p);\n            anchor.appendChild(img);\n        } else {\n            // Append the icon before the text\n            anchor.appendChild(img);\n            anchor.appendChild(p);\n        }\n        sidebar.appendChild(anchor);\n    });\n\n    nav.appendChild(sidebar);\n\n    return nav; \n}\n\nfunction createMain(){\n    const main = document.createElement('main');\n    main.classList.add('main-content');\n\n    return main;\n}\n\nfunction createFooter() {\n    const footer = document.createElement('footer');\n\n    const p = document.createElement('p');\n    p.textContent = 'Copyright © 2023 ';\n\n    const a = document.createElement('a');\n    a.href = 'https://github.com/zahrabateninia';\n    a.textContent = 'zahrabateninia'; \n    a.setAttribute('target', '_blank'); // Opens link in new tab\n\n    p.appendChild(a);\n\n    const img = document.createElement('img');\n    img.src = 'images/github.svg';\n    img.alt = 'github';\n\n    footer.appendChild(p);\n    footer.appendChild(img);\n\n    return footer;\n}\n\nfunction initializeWebsite(){\n    const wrapper = document.createElement('div');\n    wrapper.classList.add('wrapper');\n\n    const htmlContent = document.querySelector('.content');\n    htmlContent.appendChild(wrapper);\n\n    wrapper.appendChild(createHeader());\n    wrapper.appendChild(createSidebar());\n    wrapper.appendChild(createMain());\n    wrapper.appendChild(createFooter());\n\n    return wrapper;\n\n}\n\n\n;// CONCATENATED MODULE: ./src/toDoItem.js\n\n\n\nfunction renderNewTask(){\n    clearTasks(); // Clear all previous tasks before rendering new ones\n\n    tasksArr.forEach((task, index) => {\n        const taskElement = createTaskElement(task);  // Creates new task element\n\n        // Add event listeners for toggling completion and removing task\n        taskElement.querySelector('.circle-icon').addEventListener('click', () => toggleStatusIcon(task, taskElement));\n        taskElement.querySelector('.trash-icon').addEventListener('click', () => {\n            removeTaskFromContainer(taskElement);\n            tasksArr.splice(index, 1);  // Remove the task from the array\n        });\n\n        addTaskToContainer(taskElement);  // Adds task element to container\n    });\n}\n\n;// CONCATENATED MODULE: ./src/inbox.js\n\n\nfunction renderInbox(){\n    const inboxDiv = document.createElement('div');\n    inboxDiv.classList.add('inbox-div');\n\n    const inboxH1= document.createElement('h1');\n    inboxH1.textContent= 'Inbox';\n\n    // all tasks container which is below the header and above the add new task div\n    const allTasksContainer = document.createElement('div');\n    allTasksContainer.classList.add('all-tasks-container');\n\n\n    const addNewTaskDiv = document.createElement('div');\n    addNewTaskDiv.classList.add('add-new-task');\n\n    const plusIcon =  document.createElement('img');\n    plusIcon.src = './images/add_FILL0_wght400_GRAD0_opsz24.svg';\n    plusIcon.classList.add('task-plus-icon')\n    plusIcon.alt = 'plus';\n    addNewTaskDiv.appendChild(plusIcon);\n\n    const addTaskP = document.createElement('p');\n    addTaskP.classList.add('add-task-text');\n    addTaskP.textContent = 'Add a new task'\n    addNewTaskDiv.appendChild(addTaskP);\n    \n    inboxDiv.appendChild(inboxH1);\n    inboxDiv.appendChild(allTasksContainer);\n    inboxDiv.appendChild(addNewTaskDiv);\n    createAddTaskDialog();\n    return inboxDiv;\n};\n\n\n\nfunction createAddTaskDialog() {\n    // Create dialog element\n    const dialog = document.createElement('dialog');\n    dialog.classList.add('add-task-dialog');\n\n    // Create dialog title\n    const title = document.createElement('h2');\n    title.classList.add('dialog-title');\n    title.textContent = 'New Task';\n\n    // Create form\n    const form = document.createElement('form');\n    form.action = \"dialog\"; \n\n    // Form inputs\n    const inputsDiv = document.createElement('div'); \n    inputsDiv.classList.add('inputsDiv');\n\n    // label input div for each of inputs\n    const individualInput = document.createElement('div');\n    individualInput.classList.add('individual-input');\n\n\n    // Task title input\n    const taskTitleDiv = document.createElement('div');\n    taskTitleDiv.classList.add('task-title');\n    const taskTitleLabel = document.createElement('label');\n    taskTitleLabel.htmlFor = 'task-title';\n    taskTitleLabel.textContent = 'Task Title*';\n    const taskTitleInput = document.createElement('input');\n    taskTitleInput.type = 'text';\n    taskTitleInput.name = 'task-title';\n    taskTitleInput.id = 'task-title';\n    taskTitleInput.classList.add('task-title--input');\n    taskTitleInput.placeholder = 'e.g. Workout';\n    taskTitleInput.required = true;\n    taskTitleDiv.appendChild(taskTitleLabel);\n    taskTitleDiv.appendChild(taskTitleInput);\n\n    individualInput.appendChild(taskTitleDiv);\n\n    // Priority select\n    const priorityDiv = document.createElement('div');\n    priorityDiv.classList.add('priority');\n    const priorityLabel = document.createElement('label');\n    priorityLabel.htmlFor = 'priority';\n    priorityLabel.textContent = 'Priority';\n    const prioritySelect = document.createElement('select');\n    prioritySelect.name = 'priority';\n    prioritySelect.id = 'priority';\n    prioritySelect.classList.add('priority--select');\n    ['Low', 'Medium', 'High'].forEach((priority) => {\n        const option = document.createElement('option');\n        option.value = priority.toLowerCase();\n        option.textContent = priority;\n        prioritySelect.appendChild(option);\n    });\n    priorityDiv.appendChild(priorityLabel);\n    priorityDiv.appendChild(prioritySelect);\n\n    individualInput.appendChild(priorityDiv);\n\n    // Schedule date input\n    const scheduleDiv = document.createElement('div');\n    scheduleDiv.classList.add('schedule');\n    const scheduleLabel = document.createElement('label');\n    scheduleLabel.htmlFor = 'schedule';\n    scheduleLabel.textContent = 'Schedule';\n    const scheduleInput = document.createElement('input');\n    scheduleInput.type = 'date';\n    scheduleInput.name = 'schedule';\n    scheduleInput.id = 'schedule';\n    scheduleInput.classList.add('due-date');\n    scheduleDiv.appendChild(scheduleLabel);\n    scheduleDiv.appendChild(scheduleInput);\n\n    individualInput.appendChild(scheduleDiv);\n\n    // Buttons\n    const buttonsDiv = document.createElement('div');\n    buttonsDiv.classList.add('buttons');\n    const cancelButton = document.createElement('button');\n    cancelButton.classList.add('cancel-btn');\n    cancelButton.textContent = 'Cancel';\n    const addButton = document.createElement('button');\n    addButton.type = 'submit';\n    addButton.classList.add('add-btn');\n    addButton.textContent = 'Add';\n    buttonsDiv.appendChild(cancelButton);\n    buttonsDiv.appendChild(addButton);\n\n    // Append all inputs and their labels in inputsDiv \n    inputsDiv.appendChild(individualInput);\n\n    // Append all parts to form\n    form.appendChild(inputsDiv);\n    form.appendChild(buttonsDiv);\n\n    // Append form to dialog\n    dialog.appendChild(title);\n    dialog.appendChild(form);\n\n    return dialog;\n};\n\n// Global tasks container\nlet tasksContainer; // Will be initialized only once\nconst tasksArr = [];\n\nfunction addTaskDialog() {\n    // Ensure tasksContainer is created and appended only once\n    if (!tasksContainer) {\n        tasksContainer = document.createElement('div');\n        tasksContainer.classList.add('tasks-container');\n        document.querySelector('.main-content').appendChild(tasksContainer);\n    }\n\n    const addNewTaskDiv = document.querySelector('.add-new-task');\n\n    // Attach the event listener to the .add-new-task div\n    addNewTaskDiv.addEventListener('click', () => {\n        const dialog = createAddTaskDialog();\n        document.body.appendChild(dialog);\n        dialog.showModal();\n\n        const cancelButton = dialog.querySelector('.cancel-btn'); \n        const addButton = dialog.querySelector('.add-btn');\n\n        cancelButton.addEventListener('click', () => {\n            dialog.close();\n            document.body.removeChild(dialog); // removing the dialog after closing\n        });\n\n        addButton.addEventListener('click', (e) =>{\n            e.preventDefault();\n\n            const title = dialog.querySelector('#task-title').value;\n            const priority = dialog.querySelector('#priority').value;\n            const schedule = dialog.querySelector('#schedule').value;\n\n            const newTask = {\n                title: title,\n                priority: priority,\n                schedule: schedule,\n                done: false\n            };\n\n            tasksArr.push(newTask);\n\n            dialog.close();\n            document.body.removeChild(dialog);\n\n            renderNewTask(); // handle rendering all tasks\n        });\n    });\n}\n\n;// CONCATENATED MODULE: ./src/UI.js\n\n\nfunction updateMainContent(){\n    const mainContent = document.querySelector('.main-content');\n\n    \n    // Grab all sidebar links\n    const sidebarLinks = document.querySelectorAll('.sidebar a');\n    \n    // Add an event listener to each link\n    sidebarLinks.forEach(link => {\n        link.addEventListener('click', (event) => {\n            event.preventDefault();  // Prevent the default link action\n\n            // Clear the main content\n            mainContent.textContent = ' ';\n\n            // Determine which function to call based on clicked link's class\n            if(link.classList.contains('inbox')){\n                const inboxContent = renderInbox();\n                mainContent.appendChild(inboxContent);\n                addTaskDialog();\n            }\n            else if(link.classList.contains('today')){\n                // mainContent.textContent = renderToday();\n            }\n            else if(link.classList.contains('completed')){\n                // mainContent.textContent = renderCompleted();\n            }\n            else if(link.classList.contains('important')){\n                // mainContent.textContent = renderImportant();\n            }\n        });\n    });\n};\n\n// DOM for to do list tasks\n\nfunction clearTasks() {\n    const allTasksContainer = document.querySelector('.all-tasks-container');\n    allTasksContainer.innerHTML = '';\n}\n\n\nfunction createTaskElement(task) {\n        const taskContainer = document.createElement('div');\n        taskContainer.classList.add('task-container');\n        const taskStatusTitle = document.createElement('div');\n        taskStatusTitle.classList.add('task-status-title');\n        const taskDetails = document.createElement('div');\n        taskDetails.classList.add('task-details');\n\n        // add the status icon\n        const statusIcon = document.createElement('img');\n        statusIcon.classList.add('circle-icon', 'task-icon');\n        statusIcon.src = \"./images/circle_FILL0_wght400_GRAD0_opsz24.svg\";\n        taskStatusTitle.appendChild(statusIcon);\n\n        // add task title \n        const taskTitle = document.createElement('p');\n        taskTitle.classList.add('task-title');\n        taskTitle.textContent = task.title;\n        taskStatusTitle.appendChild(taskTitle);\n\n\n        // add schedule\n        const schedule = document.createElement('span');\n        schedule.classList.add('schedule');\n        schedule.textContent = task.schedule;\n        taskDetails.appendChild(schedule);\n\n        // add priority\n        const priority = document.createElement('span');\n        priority.classList.add('priority');\n        priority.textContent = task.priority;\n        taskDetails.appendChild(priority);\n\n        // add other icons\n\n        const editIcon = document.createElement('img');\n        editIcon.classList.add('edit-icon', 'task-icon');\n        editIcon.src = \"./images/edit_FILL0_wght400_GRAD0_opsz24.svg\";\n        taskDetails.appendChild(editIcon);\n\n\n        const trashIcon = document.createElement('img');\n        trashIcon.classList.add('trash-icon', 'task-icon');\n        trashIcon.src = \"./images/delete_FILL0_wght400_GRAD0_opsz24.svg\";\n        taskDetails.appendChild(trashIcon);\n\n        taskContainer.appendChild(taskStatusTitle);\n        taskContainer.appendChild(taskDetails);\n\n    return taskContainer; \n}\n\nfunction addTaskToContainer(taskElement) {\n    const allTasksContainer = document.querySelector('.all-tasks-container');\n    allTasksContainer.appendChild(taskElement);\n}\n\nfunction removeTaskFromContainer(taskElement) {\n    const allTasksContainer = document.querySelector('.all-tasks-container');\n    allTasksContainer.removeChild(taskElement);\n}\n\nfunction toggleStatusIcon(task, taskElement){\n    const statusIcon = taskElement.querySelector('.circle-icon');\n    task.done = !task.done;\n    const taskTitle = taskElement.querySelector('.task-title');\n\n    if(task.done){\n        statusIcon.src = \"images/check_circle_FILL0_wght400_GRAD0_opsz24.svg\";\n        taskTitle.style.textDecoration = 'line-through';\n    }else{\n        statusIcon.src = \"./images/circle_FILL0_wght400_GRAD0_opsz24.svg\";\n        taskTitle.style.textDecoration = 'none';\n    }\n};\n\n\n\n;// CONCATENATED MODULE: ./src/index.js\n\n\n\ninitializeWebsite()\nupdateMainContent()//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTDs7QUFFQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTs7O0FBR087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FDdEhvRDtBQUNYOztBQUV6QyxpQkFBaUI7QUFDakIsaUJBQWlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luaXRpYWxpemVXZWJzaXRlLmpzPzI3NGUiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3RvRG9JdGVtLmpzPzhmMDkiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luYm94LmpzP2VhMmUiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL1VJLmpzP2ExNjIiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzP2I2MzUiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gY3JlYXRlSGVhZGVyKCl7XG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJyk7XG5cbiAgICBjb25zdCBoZWFkZXJMb2dvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgaGVhZGVyTG9nby5jbGFzc0xpc3QuYWRkKCdsb2dvJyk7XG4gICAgaGVhZGVyTG9nby5zcmMgPSBcIi4vaW1hZ2VzL3RvZG9saXN0LnN2Z1wiO1xuICAgIGhlYWRlckxvZ28uYWx0ID0gJ2xvZ28nO1xuXG4gICAgY29uc3QgaGVhZGVySDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIGhlYWRlckgxLnRleHRDb250ZW50ID0gJ1RvZG8gTGlzdCc7XG5cbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQoaGVhZGVyTG9nbyk7XG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKGhlYWRlckgxKTtcbiAgICByZXR1cm4gaGVhZGVyO1xufVxuXG5cbmZ1bmN0aW9uIGNyZWF0ZVNpZGViYXIoKSB7XG4gICAgY29uc3QgbmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbmF2Jyk7XG4gICAgY29uc3Qgc2lkZWJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHNpZGViYXIuY2xhc3NMaXN0LmFkZCgnc2lkZWJhcicpO1xuXG4gICAgY29uc3Qgc2lkZWJhckl0ZW1zID0gW1xuICAgICAgICB7IGNsYXNzOiAnaW5ib3gnLCB0ZXh0OiAnSW5ib3gnLCBpbWdTcmM6ICcuL2ltYWdlcy9pbmJveF9GSUxMMF93Z2h0NDAwX0dSQUQwX29wc3oyNC5zdmcnLCBhbHRUZXh0OiAnaW5ib3gnfSxcbiAgICAgICAgeyBjbGFzczogJ3RvZGF5JywgdGV4dDogJ1RvZGF5JywgaW1nU3JjOiAnLi9pbWFnZXMvdG9kYXlfRklMTDBfd2dodDQwMF9HUkFEMF9vcHN6MjQuc3ZnJywgYWx0VGV4dDogJ3RvZGF5JyB9LFxuICAgICAgICB7IGNsYXNzOiAnaW1wb3J0YW50JywgdGV4dDogJ0ltcG9ydGFudCcsIGltZ1NyYzogJy4vaW1hZ2VzL3N0YXJzX0ZJTEwwX3dnaHQ0MDBfR1JBRDBfb3BzejI0LnN2ZycsIGFsdFRleHQ6ICdpbXBvcnRhbnQnIH0sXG4gICAgICAgIHsgY2xhc3M6ICdjb21wbGV0ZWQnLCB0ZXh0OiAnQ29tcGxldGVkJywgaW1nU3JjOiAnLi9pbWFnZXMvZG9uZV9hbGxfRklMTDBfd2dodDQwMF9HUkFEMF9vcHN6MjQuc3ZnJywgYWx0VGV4dDogJ2NvbXBsZXRlZCcgfSxcbiAgICAgICAgeyBjbGFzczogJ2FkZC1wcm9qZWN0JywgdGV4dDogJ1Byb2plY3RzJywgaW1nU3JjOiAnLi9pbWFnZXMvYWRkX0ZJTEwwX3dnaHQ0MDBfR1JBRDBfb3BzejI0LnN2ZycsIGFsdFRleHQ6ICdwbHVzJyB9XG4gICAgXTtcblxuICAgIC8vIExvb3AgdGhyb3VnaCBlYWNoIHNpZGViYXIgaXRlbSBhbmQgY3JlYXRlIGl0cyBlbGVtZW50c1xuICAgIHNpZGViYXJJdGVtcy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICBjb25zdCBhbmNob3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgICAgIGFuY2hvci5jbGFzc0xpc3QuYWRkKGl0ZW0uY2xhc3MpO1xuXG4gICAgICAgIGNvbnN0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICBpbWcuc3JjID0gaXRlbS5pbWdTcmM7XG4gICAgICAgIGltZy5hbHQgPSBpdGVtLmFsdFRleHQ7XG4gICAgICAgIGltZy5jbGFzc0xpc3QuYWRkKCduYXZiYXInLCAnaWNvbicpO1xuXG4gICAgICAgIGNvbnN0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIHAudGV4dENvbnRlbnQgPSBpdGVtLnRleHQ7XG4gICAgICAgIHAuY2xhc3NMaXN0LmFkZChpdGVtLmNsYXNzKTtcblxuICAgICAgICBpZiAoaXRlbS5jbGFzcyA9PT0gJ2FkZC1wcm9qZWN0Jykge1xuICAgICAgICAgICAgLy8gQXBwZW5kIHRoZSB0ZXh0IGJlZm9yZSB0aGUgaWNvblxuICAgICAgICAgICAgYW5jaG9yLmFwcGVuZENoaWxkKHApO1xuICAgICAgICAgICAgYW5jaG9yLmFwcGVuZENoaWxkKGltZyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBBcHBlbmQgdGhlIGljb24gYmVmb3JlIHRoZSB0ZXh0XG4gICAgICAgICAgICBhbmNob3IuYXBwZW5kQ2hpbGQoaW1nKTtcbiAgICAgICAgICAgIGFuY2hvci5hcHBlbmRDaGlsZChwKTtcbiAgICAgICAgfVxuICAgICAgICBzaWRlYmFyLmFwcGVuZENoaWxkKGFuY2hvcik7XG4gICAgfSk7XG5cbiAgICBuYXYuYXBwZW5kQ2hpbGQoc2lkZWJhcik7XG5cbiAgICByZXR1cm4gbmF2OyBcbn1cblxuZnVuY3Rpb24gY3JlYXRlTWFpbigpe1xuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtYWluJyk7XG4gICAgbWFpbi5jbGFzc0xpc3QuYWRkKCdtYWluLWNvbnRlbnQnKTtcblxuICAgIHJldHVybiBtYWluO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVGb290ZXIoKSB7XG4gICAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9vdGVyJyk7XG5cbiAgICBjb25zdCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHAudGV4dENvbnRlbnQgPSAnQ29weXJpZ2h0IMKpIDIwMjMgJztcblxuICAgIGNvbnN0IGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgYS5ocmVmID0gJ2h0dHBzOi8vZ2l0aHViLmNvbS96YWhyYWJhdGVuaW5pYSc7XG4gICAgYS50ZXh0Q29udGVudCA9ICd6YWhyYWJhdGVuaW5pYSc7IFxuICAgIGEuc2V0QXR0cmlidXRlKCd0YXJnZXQnLCAnX2JsYW5rJyk7IC8vIE9wZW5zIGxpbmsgaW4gbmV3IHRhYlxuXG4gICAgcC5hcHBlbmRDaGlsZChhKTtcblxuICAgIGNvbnN0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGltZy5zcmMgPSAnaW1hZ2VzL2dpdGh1Yi5zdmcnO1xuICAgIGltZy5hbHQgPSAnZ2l0aHViJztcblxuICAgIGZvb3Rlci5hcHBlbmRDaGlsZChwKTtcbiAgICBmb290ZXIuYXBwZW5kQ2hpbGQoaW1nKTtcblxuICAgIHJldHVybiBmb290ZXI7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGluaXRpYWxpemVXZWJzaXRlKCl7XG4gICAgY29uc3Qgd3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHdyYXBwZXIuY2xhc3NMaXN0LmFkZCgnd3JhcHBlcicpO1xuXG4gICAgY29uc3QgaHRtbENvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpO1xuICAgIGh0bWxDb250ZW50LmFwcGVuZENoaWxkKHdyYXBwZXIpO1xuXG4gICAgd3JhcHBlci5hcHBlbmRDaGlsZChjcmVhdGVIZWFkZXIoKSk7XG4gICAgd3JhcHBlci5hcHBlbmRDaGlsZChjcmVhdGVTaWRlYmFyKCkpO1xuICAgIHdyYXBwZXIuYXBwZW5kQ2hpbGQoY3JlYXRlTWFpbigpKTtcbiAgICB3cmFwcGVyLmFwcGVuZENoaWxkKGNyZWF0ZUZvb3RlcigpKTtcblxuICAgIHJldHVybiB3cmFwcGVyO1xuXG59XG5cbiIsImltcG9ydCB7IHRhc2tzQXJyIH0gZnJvbSBcIi4vaW5ib3hcIjtcbmltcG9ydCB7IGNyZWF0ZVRhc2tFbGVtZW50LCBhZGRUYXNrVG9Db250YWluZXIsIHRvZ2dsZVN0YXR1c0ljb24sIHJlbW92ZVRhc2tGcm9tQ29udGFpbmVyLCBjbGVhclRhc2tzIH0gZnJvbSBcIi4vVUlcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlck5ld1Rhc2soKXtcbiAgICBjbGVhclRhc2tzKCk7IC8vIENsZWFyIGFsbCBwcmV2aW91cyB0YXNrcyBiZWZvcmUgcmVuZGVyaW5nIG5ldyBvbmVzXG5cbiAgICB0YXNrc0Fyci5mb3JFYWNoKCh0YXNrLCBpbmRleCkgPT4ge1xuICAgICAgICBjb25zdCB0YXNrRWxlbWVudCA9IGNyZWF0ZVRhc2tFbGVtZW50KHRhc2spOyAgLy8gQ3JlYXRlcyBuZXcgdGFzayBlbGVtZW50XG5cbiAgICAgICAgLy8gQWRkIGV2ZW50IGxpc3RlbmVycyBmb3IgdG9nZ2xpbmcgY29tcGxldGlvbiBhbmQgcmVtb3ZpbmcgdGFza1xuICAgICAgICB0YXNrRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuY2lyY2xlLWljb24nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHRvZ2dsZVN0YXR1c0ljb24odGFzaywgdGFza0VsZW1lbnQpKTtcbiAgICAgICAgdGFza0VsZW1lbnQucXVlcnlTZWxlY3RvcignLnRyYXNoLWljb24nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIHJlbW92ZVRhc2tGcm9tQ29udGFpbmVyKHRhc2tFbGVtZW50KTtcbiAgICAgICAgICAgIHRhc2tzQXJyLnNwbGljZShpbmRleCwgMSk7ICAvLyBSZW1vdmUgdGhlIHRhc2sgZnJvbSB0aGUgYXJyYXlcbiAgICAgICAgfSk7XG5cbiAgICAgICAgYWRkVGFza1RvQ29udGFpbmVyKHRhc2tFbGVtZW50KTsgIC8vIEFkZHMgdGFzayBlbGVtZW50IHRvIGNvbnRhaW5lclxuICAgIH0pO1xufVxuIiwiaW1wb3J0IHsgcmVuZGVyTmV3VGFzayB9IGZyb20gXCIuL3RvRG9JdGVtXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJJbmJveCgpe1xuICAgIGNvbnN0IGluYm94RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaW5ib3hEaXYuY2xhc3NMaXN0LmFkZCgnaW5ib3gtZGl2Jyk7XG5cbiAgICBjb25zdCBpbmJveEgxPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIGluYm94SDEudGV4dENvbnRlbnQ9ICdJbmJveCc7XG5cbiAgICAvLyBhbGwgdGFza3MgY29udGFpbmVyIHdoaWNoIGlzIGJlbG93IHRoZSBoZWFkZXIgYW5kIGFib3ZlIHRoZSBhZGQgbmV3IHRhc2sgZGl2XG4gICAgY29uc3QgYWxsVGFza3NDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBhbGxUYXNrc0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdhbGwtdGFza3MtY29udGFpbmVyJyk7XG5cblxuICAgIGNvbnN0IGFkZE5ld1Rhc2tEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBhZGROZXdUYXNrRGl2LmNsYXNzTGlzdC5hZGQoJ2FkZC1uZXctdGFzaycpO1xuXG4gICAgY29uc3QgcGx1c0ljb24gPSAgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgcGx1c0ljb24uc3JjID0gJy4vaW1hZ2VzL2FkZF9GSUxMMF93Z2h0NDAwX0dSQUQwX29wc3oyNC5zdmcnO1xuICAgIHBsdXNJY29uLmNsYXNzTGlzdC5hZGQoJ3Rhc2stcGx1cy1pY29uJylcbiAgICBwbHVzSWNvbi5hbHQgPSAncGx1cyc7XG4gICAgYWRkTmV3VGFza0Rpdi5hcHBlbmRDaGlsZChwbHVzSWNvbik7XG5cbiAgICBjb25zdCBhZGRUYXNrUCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBhZGRUYXNrUC5jbGFzc0xpc3QuYWRkKCdhZGQtdGFzay10ZXh0Jyk7XG4gICAgYWRkVGFza1AudGV4dENvbnRlbnQgPSAnQWRkIGEgbmV3IHRhc2snXG4gICAgYWRkTmV3VGFza0Rpdi5hcHBlbmRDaGlsZChhZGRUYXNrUCk7XG4gICAgXG4gICAgaW5ib3hEaXYuYXBwZW5kQ2hpbGQoaW5ib3hIMSk7XG4gICAgaW5ib3hEaXYuYXBwZW5kQ2hpbGQoYWxsVGFza3NDb250YWluZXIpO1xuICAgIGluYm94RGl2LmFwcGVuZENoaWxkKGFkZE5ld1Rhc2tEaXYpO1xuICAgIGNyZWF0ZUFkZFRhc2tEaWFsb2coKTtcbiAgICByZXR1cm4gaW5ib3hEaXY7XG59O1xuXG5cblxuZnVuY3Rpb24gY3JlYXRlQWRkVGFza0RpYWxvZygpIHtcbiAgICAvLyBDcmVhdGUgZGlhbG9nIGVsZW1lbnRcbiAgICBjb25zdCBkaWFsb2cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaWFsb2cnKTtcbiAgICBkaWFsb2cuY2xhc3NMaXN0LmFkZCgnYWRkLXRhc2stZGlhbG9nJyk7XG5cbiAgICAvLyBDcmVhdGUgZGlhbG9nIHRpdGxlXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIHRpdGxlLmNsYXNzTGlzdC5hZGQoJ2RpYWxvZy10aXRsZScpO1xuICAgIHRpdGxlLnRleHRDb250ZW50ID0gJ05ldyBUYXNrJztcblxuICAgIC8vIENyZWF0ZSBmb3JtXG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgICBmb3JtLmFjdGlvbiA9IFwiZGlhbG9nXCI7IFxuXG4gICAgLy8gRm9ybSBpbnB1dHNcbiAgICBjb25zdCBpbnB1dHNEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTsgXG4gICAgaW5wdXRzRGl2LmNsYXNzTGlzdC5hZGQoJ2lucHV0c0RpdicpO1xuXG4gICAgLy8gbGFiZWwgaW5wdXQgZGl2IGZvciBlYWNoIG9mIGlucHV0c1xuICAgIGNvbnN0IGluZGl2aWR1YWxJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGluZGl2aWR1YWxJbnB1dC5jbGFzc0xpc3QuYWRkKCdpbmRpdmlkdWFsLWlucHV0Jyk7XG5cblxuICAgIC8vIFRhc2sgdGl0bGUgaW5wdXRcbiAgICBjb25zdCB0YXNrVGl0bGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0YXNrVGl0bGVEaXYuY2xhc3NMaXN0LmFkZCgndGFzay10aXRsZScpO1xuICAgIGNvbnN0IHRhc2tUaXRsZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICB0YXNrVGl0bGVMYWJlbC5odG1sRm9yID0gJ3Rhc2stdGl0bGUnO1xuICAgIHRhc2tUaXRsZUxhYmVsLnRleHRDb250ZW50ID0gJ1Rhc2sgVGl0bGUqJztcbiAgICBjb25zdCB0YXNrVGl0bGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgdGFza1RpdGxlSW5wdXQudHlwZSA9ICd0ZXh0JztcbiAgICB0YXNrVGl0bGVJbnB1dC5uYW1lID0gJ3Rhc2stdGl0bGUnO1xuICAgIHRhc2tUaXRsZUlucHV0LmlkID0gJ3Rhc2stdGl0bGUnO1xuICAgIHRhc2tUaXRsZUlucHV0LmNsYXNzTGlzdC5hZGQoJ3Rhc2stdGl0bGUtLWlucHV0Jyk7XG4gICAgdGFza1RpdGxlSW5wdXQucGxhY2Vob2xkZXIgPSAnZS5nLiBXb3Jrb3V0JztcbiAgICB0YXNrVGl0bGVJbnB1dC5yZXF1aXJlZCA9IHRydWU7XG4gICAgdGFza1RpdGxlRGl2LmFwcGVuZENoaWxkKHRhc2tUaXRsZUxhYmVsKTtcbiAgICB0YXNrVGl0bGVEaXYuYXBwZW5kQ2hpbGQodGFza1RpdGxlSW5wdXQpO1xuXG4gICAgaW5kaXZpZHVhbElucHV0LmFwcGVuZENoaWxkKHRhc2tUaXRsZURpdik7XG5cbiAgICAvLyBQcmlvcml0eSBzZWxlY3RcbiAgICBjb25zdCBwcmlvcml0eURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHByaW9yaXR5RGl2LmNsYXNzTGlzdC5hZGQoJ3ByaW9yaXR5Jyk7XG4gICAgY29uc3QgcHJpb3JpdHlMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgcHJpb3JpdHlMYWJlbC5odG1sRm9yID0gJ3ByaW9yaXR5JztcbiAgICBwcmlvcml0eUxhYmVsLnRleHRDb250ZW50ID0gJ1ByaW9yaXR5JztcbiAgICBjb25zdCBwcmlvcml0eVNlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xuICAgIHByaW9yaXR5U2VsZWN0Lm5hbWUgPSAncHJpb3JpdHknO1xuICAgIHByaW9yaXR5U2VsZWN0LmlkID0gJ3ByaW9yaXR5JztcbiAgICBwcmlvcml0eVNlbGVjdC5jbGFzc0xpc3QuYWRkKCdwcmlvcml0eS0tc2VsZWN0Jyk7XG4gICAgWydMb3cnLCAnTWVkaXVtJywgJ0hpZ2gnXS5mb3JFYWNoKChwcmlvcml0eSkgPT4ge1xuICAgICAgICBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgICAgb3B0aW9uLnZhbHVlID0gcHJpb3JpdHkudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgb3B0aW9uLnRleHRDb250ZW50ID0gcHJpb3JpdHk7XG4gICAgICAgIHByaW9yaXR5U2VsZWN0LmFwcGVuZENoaWxkKG9wdGlvbik7XG4gICAgfSk7XG4gICAgcHJpb3JpdHlEaXYuYXBwZW5kQ2hpbGQocHJpb3JpdHlMYWJlbCk7XG4gICAgcHJpb3JpdHlEaXYuYXBwZW5kQ2hpbGQocHJpb3JpdHlTZWxlY3QpO1xuXG4gICAgaW5kaXZpZHVhbElucHV0LmFwcGVuZENoaWxkKHByaW9yaXR5RGl2KTtcblxuICAgIC8vIFNjaGVkdWxlIGRhdGUgaW5wdXRcbiAgICBjb25zdCBzY2hlZHVsZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHNjaGVkdWxlRGl2LmNsYXNzTGlzdC5hZGQoJ3NjaGVkdWxlJyk7XG4gICAgY29uc3Qgc2NoZWR1bGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgc2NoZWR1bGVMYWJlbC5odG1sRm9yID0gJ3NjaGVkdWxlJztcbiAgICBzY2hlZHVsZUxhYmVsLnRleHRDb250ZW50ID0gJ1NjaGVkdWxlJztcbiAgICBjb25zdCBzY2hlZHVsZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBzY2hlZHVsZUlucHV0LnR5cGUgPSAnZGF0ZSc7XG4gICAgc2NoZWR1bGVJbnB1dC5uYW1lID0gJ3NjaGVkdWxlJztcbiAgICBzY2hlZHVsZUlucHV0LmlkID0gJ3NjaGVkdWxlJztcbiAgICBzY2hlZHVsZUlucHV0LmNsYXNzTGlzdC5hZGQoJ2R1ZS1kYXRlJyk7XG4gICAgc2NoZWR1bGVEaXYuYXBwZW5kQ2hpbGQoc2NoZWR1bGVMYWJlbCk7XG4gICAgc2NoZWR1bGVEaXYuYXBwZW5kQ2hpbGQoc2NoZWR1bGVJbnB1dCk7XG5cbiAgICBpbmRpdmlkdWFsSW5wdXQuYXBwZW5kQ2hpbGQoc2NoZWR1bGVEaXYpO1xuXG4gICAgLy8gQnV0dG9uc1xuICAgIGNvbnN0IGJ1dHRvbnNEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBidXR0b25zRGl2LmNsYXNzTGlzdC5hZGQoJ2J1dHRvbnMnKTtcbiAgICBjb25zdCBjYW5jZWxCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBjYW5jZWxCdXR0b24uY2xhc3NMaXN0LmFkZCgnY2FuY2VsLWJ0bicpO1xuICAgIGNhbmNlbEJ1dHRvbi50ZXh0Q29udGVudCA9ICdDYW5jZWwnO1xuICAgIGNvbnN0IGFkZEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGFkZEJ1dHRvbi50eXBlID0gJ3N1Ym1pdCc7XG4gICAgYWRkQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2FkZC1idG4nKTtcbiAgICBhZGRCdXR0b24udGV4dENvbnRlbnQgPSAnQWRkJztcbiAgICBidXR0b25zRGl2LmFwcGVuZENoaWxkKGNhbmNlbEJ1dHRvbik7XG4gICAgYnV0dG9uc0Rpdi5hcHBlbmRDaGlsZChhZGRCdXR0b24pO1xuXG4gICAgLy8gQXBwZW5kIGFsbCBpbnB1dHMgYW5kIHRoZWlyIGxhYmVscyBpbiBpbnB1dHNEaXYgXG4gICAgaW5wdXRzRGl2LmFwcGVuZENoaWxkKGluZGl2aWR1YWxJbnB1dCk7XG5cbiAgICAvLyBBcHBlbmQgYWxsIHBhcnRzIHRvIGZvcm1cbiAgICBmb3JtLmFwcGVuZENoaWxkKGlucHV0c0Rpdik7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChidXR0b25zRGl2KTtcblxuICAgIC8vIEFwcGVuZCBmb3JtIHRvIGRpYWxvZ1xuICAgIGRpYWxvZy5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gICAgZGlhbG9nLmFwcGVuZENoaWxkKGZvcm0pO1xuXG4gICAgcmV0dXJuIGRpYWxvZztcbn07XG5cbi8vIEdsb2JhbCB0YXNrcyBjb250YWluZXJcbmxldCB0YXNrc0NvbnRhaW5lcjsgLy8gV2lsbCBiZSBpbml0aWFsaXplZCBvbmx5IG9uY2VcbmV4cG9ydCBjb25zdCB0YXNrc0FyciA9IFtdO1xuXG5leHBvcnQgZnVuY3Rpb24gYWRkVGFza0RpYWxvZygpIHtcbiAgICAvLyBFbnN1cmUgdGFza3NDb250YWluZXIgaXMgY3JlYXRlZCBhbmQgYXBwZW5kZWQgb25seSBvbmNlXG4gICAgaWYgKCF0YXNrc0NvbnRhaW5lcikge1xuICAgICAgICB0YXNrc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0YXNrc0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd0YXNrcy1jb250YWluZXInKTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4tY29udGVudCcpLmFwcGVuZENoaWxkKHRhc2tzQ29udGFpbmVyKTtcbiAgICB9XG5cbiAgICBjb25zdCBhZGROZXdUYXNrRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC1uZXctdGFzaycpO1xuXG4gICAgLy8gQXR0YWNoIHRoZSBldmVudCBsaXN0ZW5lciB0byB0aGUgLmFkZC1uZXctdGFzayBkaXZcbiAgICBhZGROZXdUYXNrRGl2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBjb25zdCBkaWFsb2cgPSBjcmVhdGVBZGRUYXNrRGlhbG9nKCk7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZGlhbG9nKTtcbiAgICAgICAgZGlhbG9nLnNob3dNb2RhbCgpO1xuXG4gICAgICAgIGNvbnN0IGNhbmNlbEJ1dHRvbiA9IGRpYWxvZy5xdWVyeVNlbGVjdG9yKCcuY2FuY2VsLWJ0bicpOyBcbiAgICAgICAgY29uc3QgYWRkQnV0dG9uID0gZGlhbG9nLnF1ZXJ5U2VsZWN0b3IoJy5hZGQtYnRuJyk7XG5cbiAgICAgICAgY2FuY2VsQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgZGlhbG9nLmNsb3NlKCk7XG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGRpYWxvZyk7IC8vIHJlbW92aW5nIHRoZSBkaWFsb2cgYWZ0ZXIgY2xvc2luZ1xuICAgICAgICB9KTtcblxuICAgICAgICBhZGRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT57XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgIGNvbnN0IHRpdGxlID0gZGlhbG9nLnF1ZXJ5U2VsZWN0b3IoJyN0YXNrLXRpdGxlJykudmFsdWU7XG4gICAgICAgICAgICBjb25zdCBwcmlvcml0eSA9IGRpYWxvZy5xdWVyeVNlbGVjdG9yKCcjcHJpb3JpdHknKS52YWx1ZTtcbiAgICAgICAgICAgIGNvbnN0IHNjaGVkdWxlID0gZGlhbG9nLnF1ZXJ5U2VsZWN0b3IoJyNzY2hlZHVsZScpLnZhbHVlO1xuXG4gICAgICAgICAgICBjb25zdCBuZXdUYXNrID0ge1xuICAgICAgICAgICAgICAgIHRpdGxlOiB0aXRsZSxcbiAgICAgICAgICAgICAgICBwcmlvcml0eTogcHJpb3JpdHksXG4gICAgICAgICAgICAgICAgc2NoZWR1bGU6IHNjaGVkdWxlLFxuICAgICAgICAgICAgICAgIGRvbmU6IGZhbHNlXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICB0YXNrc0Fyci5wdXNoKG5ld1Rhc2spO1xuXG4gICAgICAgICAgICBkaWFsb2cuY2xvc2UoKTtcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoZGlhbG9nKTtcblxuICAgICAgICAgICAgcmVuZGVyTmV3VGFzaygpOyAvLyBoYW5kbGUgcmVuZGVyaW5nIGFsbCB0YXNrc1xuICAgICAgICB9KTtcbiAgICB9KTtcbn1cbiIsImltcG9ydCB7IHJlbmRlckluYm94ICwgIGFkZFRhc2tEaWFsb2cgfSBmcm9tIFwiLi9pbmJveFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlTWFpbkNvbnRlbnQoKXtcbiAgICBjb25zdCBtYWluQ29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluLWNvbnRlbnQnKTtcblxuICAgIFxuICAgIC8vIEdyYWIgYWxsIHNpZGViYXIgbGlua3NcbiAgICBjb25zdCBzaWRlYmFyTGlua3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2lkZWJhciBhJyk7XG4gICAgXG4gICAgLy8gQWRkIGFuIGV2ZW50IGxpc3RlbmVyIHRvIGVhY2ggbGlua1xuICAgIHNpZGViYXJMaW5rcy5mb3JFYWNoKGxpbmsgPT4ge1xuICAgICAgICBsaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpOyAgLy8gUHJldmVudCB0aGUgZGVmYXVsdCBsaW5rIGFjdGlvblxuXG4gICAgICAgICAgICAvLyBDbGVhciB0aGUgbWFpbiBjb250ZW50XG4gICAgICAgICAgICBtYWluQ29udGVudC50ZXh0Q29udGVudCA9ICcgJztcblxuICAgICAgICAgICAgLy8gRGV0ZXJtaW5lIHdoaWNoIGZ1bmN0aW9uIHRvIGNhbGwgYmFzZWQgb24gY2xpY2tlZCBsaW5rJ3MgY2xhc3NcbiAgICAgICAgICAgIGlmKGxpbmsuY2xhc3NMaXN0LmNvbnRhaW5zKCdpbmJveCcpKXtcbiAgICAgICAgICAgICAgICBjb25zdCBpbmJveENvbnRlbnQgPSByZW5kZXJJbmJveCgpO1xuICAgICAgICAgICAgICAgIG1haW5Db250ZW50LmFwcGVuZENoaWxkKGluYm94Q29udGVudCk7XG4gICAgICAgICAgICAgICAgYWRkVGFza0RpYWxvZygpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZihsaW5rLmNsYXNzTGlzdC5jb250YWlucygndG9kYXknKSl7XG4gICAgICAgICAgICAgICAgLy8gbWFpbkNvbnRlbnQudGV4dENvbnRlbnQgPSByZW5kZXJUb2RheSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZihsaW5rLmNsYXNzTGlzdC5jb250YWlucygnY29tcGxldGVkJykpe1xuICAgICAgICAgICAgICAgIC8vIG1haW5Db250ZW50LnRleHRDb250ZW50ID0gcmVuZGVyQ29tcGxldGVkKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmKGxpbmsuY2xhc3NMaXN0LmNvbnRhaW5zKCdpbXBvcnRhbnQnKSl7XG4gICAgICAgICAgICAgICAgLy8gbWFpbkNvbnRlbnQudGV4dENvbnRlbnQgPSByZW5kZXJJbXBvcnRhbnQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSk7XG59O1xuXG4vLyBET00gZm9yIHRvIGRvIGxpc3QgdGFza3NcblxuZXhwb3J0IGZ1bmN0aW9uIGNsZWFyVGFza3MoKSB7XG4gICAgY29uc3QgYWxsVGFza3NDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWxsLXRhc2tzLWNvbnRhaW5lcicpO1xuICAgIGFsbFRhc2tzQ29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVUYXNrRWxlbWVudCh0YXNrKSB7XG4gICAgICAgIGNvbnN0IHRhc2tDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdGFza0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd0YXNrLWNvbnRhaW5lcicpO1xuICAgICAgICBjb25zdCB0YXNrU3RhdHVzVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdGFza1N0YXR1c1RpdGxlLmNsYXNzTGlzdC5hZGQoJ3Rhc2stc3RhdHVzLXRpdGxlJyk7XG4gICAgICAgIGNvbnN0IHRhc2tEZXRhaWxzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRhc2tEZXRhaWxzLmNsYXNzTGlzdC5hZGQoJ3Rhc2stZGV0YWlscycpO1xuXG4gICAgICAgIC8vIGFkZCB0aGUgc3RhdHVzIGljb25cbiAgICAgICAgY29uc3Qgc3RhdHVzSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICBzdGF0dXNJY29uLmNsYXNzTGlzdC5hZGQoJ2NpcmNsZS1pY29uJywgJ3Rhc2staWNvbicpO1xuICAgICAgICBzdGF0dXNJY29uLnNyYyA9IFwiLi9pbWFnZXMvY2lyY2xlX0ZJTEwwX3dnaHQ0MDBfR1JBRDBfb3BzejI0LnN2Z1wiO1xuICAgICAgICB0YXNrU3RhdHVzVGl0bGUuYXBwZW5kQ2hpbGQoc3RhdHVzSWNvbik7XG5cbiAgICAgICAgLy8gYWRkIHRhc2sgdGl0bGUgXG4gICAgICAgIGNvbnN0IHRhc2tUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgdGFza1RpdGxlLmNsYXNzTGlzdC5hZGQoJ3Rhc2stdGl0bGUnKTtcbiAgICAgICAgdGFza1RpdGxlLnRleHRDb250ZW50ID0gdGFzay50aXRsZTtcbiAgICAgICAgdGFza1N0YXR1c1RpdGxlLmFwcGVuZENoaWxkKHRhc2tUaXRsZSk7XG5cblxuICAgICAgICAvLyBhZGQgc2NoZWR1bGVcbiAgICAgICAgY29uc3Qgc2NoZWR1bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgIHNjaGVkdWxlLmNsYXNzTGlzdC5hZGQoJ3NjaGVkdWxlJyk7XG4gICAgICAgIHNjaGVkdWxlLnRleHRDb250ZW50ID0gdGFzay5zY2hlZHVsZTtcbiAgICAgICAgdGFza0RldGFpbHMuYXBwZW5kQ2hpbGQoc2NoZWR1bGUpO1xuXG4gICAgICAgIC8vIGFkZCBwcmlvcml0eVxuICAgICAgICBjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgcHJpb3JpdHkuY2xhc3NMaXN0LmFkZCgncHJpb3JpdHknKTtcbiAgICAgICAgcHJpb3JpdHkudGV4dENvbnRlbnQgPSB0YXNrLnByaW9yaXR5O1xuICAgICAgICB0YXNrRGV0YWlscy5hcHBlbmRDaGlsZChwcmlvcml0eSk7XG5cbiAgICAgICAgLy8gYWRkIG90aGVyIGljb25zXG5cbiAgICAgICAgY29uc3QgZWRpdEljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgZWRpdEljb24uY2xhc3NMaXN0LmFkZCgnZWRpdC1pY29uJywgJ3Rhc2staWNvbicpO1xuICAgICAgICBlZGl0SWNvbi5zcmMgPSBcIi4vaW1hZ2VzL2VkaXRfRklMTDBfd2dodDQwMF9HUkFEMF9vcHN6MjQuc3ZnXCI7XG4gICAgICAgIHRhc2tEZXRhaWxzLmFwcGVuZENoaWxkKGVkaXRJY29uKTtcblxuXG4gICAgICAgIGNvbnN0IHRyYXNoSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICB0cmFzaEljb24uY2xhc3NMaXN0LmFkZCgndHJhc2gtaWNvbicsICd0YXNrLWljb24nKTtcbiAgICAgICAgdHJhc2hJY29uLnNyYyA9IFwiLi9pbWFnZXMvZGVsZXRlX0ZJTEwwX3dnaHQ0MDBfR1JBRDBfb3BzejI0LnN2Z1wiO1xuICAgICAgICB0YXNrRGV0YWlscy5hcHBlbmRDaGlsZCh0cmFzaEljb24pO1xuXG4gICAgICAgIHRhc2tDb250YWluZXIuYXBwZW5kQ2hpbGQodGFza1N0YXR1c1RpdGxlKTtcbiAgICAgICAgdGFza0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrRGV0YWlscyk7XG5cbiAgICByZXR1cm4gdGFza0NvbnRhaW5lcjsgXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRUYXNrVG9Db250YWluZXIodGFza0VsZW1lbnQpIHtcbiAgICBjb25zdCBhbGxUYXNrc0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hbGwtdGFza3MtY29udGFpbmVyJyk7XG4gICAgYWxsVGFza3NDb250YWluZXIuYXBwZW5kQ2hpbGQodGFza0VsZW1lbnQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlVGFza0Zyb21Db250YWluZXIodGFza0VsZW1lbnQpIHtcbiAgICBjb25zdCBhbGxUYXNrc0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hbGwtdGFza3MtY29udGFpbmVyJyk7XG4gICAgYWxsVGFza3NDb250YWluZXIucmVtb3ZlQ2hpbGQodGFza0VsZW1lbnQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdG9nZ2xlU3RhdHVzSWNvbih0YXNrLCB0YXNrRWxlbWVudCl7XG4gICAgY29uc3Qgc3RhdHVzSWNvbiA9IHRhc2tFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jaXJjbGUtaWNvbicpO1xuICAgIHRhc2suZG9uZSA9ICF0YXNrLmRvbmU7XG4gICAgY29uc3QgdGFza1RpdGxlID0gdGFza0VsZW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2stdGl0bGUnKTtcblxuICAgIGlmKHRhc2suZG9uZSl7XG4gICAgICAgIHN0YXR1c0ljb24uc3JjID0gXCJpbWFnZXMvY2hlY2tfY2lyY2xlX0ZJTEwwX3dnaHQ0MDBfR1JBRDBfb3BzejI0LnN2Z1wiO1xuICAgICAgICB0YXNrVGl0bGUuc3R5bGUudGV4dERlY29yYXRpb24gPSAnbGluZS10aHJvdWdoJztcbiAgICB9ZWxzZXtcbiAgICAgICAgc3RhdHVzSWNvbi5zcmMgPSBcIi4vaW1hZ2VzL2NpcmNsZV9GSUxMMF93Z2h0NDAwX0dSQUQwX29wc3oyNC5zdmdcIjtcbiAgICAgICAgdGFza1RpdGxlLnN0eWxlLnRleHREZWNvcmF0aW9uID0gJ25vbmUnO1xuICAgIH1cbn07XG5cblxuIiwiaW1wb3J0IGluaXRpYWxpemVXZWJzaXRlIGZyb20gXCIuL2luaXRpYWxpemVXZWJzaXRlXCI7XG5pbXBvcnQgeyB1cGRhdGVNYWluQ29udGVudCB9IGZyb20gXCIuL1VJXCI7XG5cbmluaXRpYWxpemVXZWJzaXRlKClcbnVwZGF0ZU1haW5Db250ZW50KCkiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///779\n")}},__webpack_exports__={};__webpack_modules__[779]()})();