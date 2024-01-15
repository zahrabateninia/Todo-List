// Save data to local storage
export function saveTasksToLocalStorage(tasksArr) {
    const data = JSON.stringify(tasksArr);
    localStorage.setItem('tasks', data);
}

// load tasks from localStorage and parse them back into JavaScript objects: 
export function loadTasksFromLocalStorage() {
    const data = localStorage.getItem('tasks');
    if (data) {
        return JSON.parse(data);
    } else {
        return []; // Return an empty array if no data is found
    }
}



