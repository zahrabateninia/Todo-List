export function enableProjectAddition() {
    const addProjectLink = document.querySelector('.add-project');

    // Create the input container if it doesn't exist
    let projectNameInputContainer = document.querySelector('.project-name-input-container');
    if (!projectNameInputContainer) {
        projectNameInputContainer = document.createElement('div');
        projectNameInputContainer.classList.add('project-name-input-container');

        const projectNameInput = document.createElement('input');
        projectNameInput.type = 'text';

        const addBtn = document.createElement('button');
        addBtn.textContent = 'Add';

        const cancelBtn = document.createElement('button');
        cancelBtn.textContent = 'Cancel';

        projectNameInputContainer.appendChild(projectNameInput);
        projectNameInputContainer.appendChild(addBtn);
        projectNameInputContainer.appendChild(cancelBtn);

        // Append the container to the DOM
        addProjectLink.after(projectNameInputContainer);

        // Initially show the input container
        projectNameInputContainer.style.display = 'block';

        // Hide the container and clear the input when 'Cancel' is clicked
        cancelBtn.addEventListener('click', () => {
            projectNameInputContainer.style.display = 'none';
            projectNameInput.value = '';
        });

        // Add your logic for the 'Add' button here

        // Add an event listener for the add project link
        addProjectLink.addEventListener('click', () => {
            projectNameInputContainer.style.display = projectNameInputContainer.style.display === 'none' ? 'block' : 'none';
        });
    }
}
