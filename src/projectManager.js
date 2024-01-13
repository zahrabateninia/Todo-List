export function enableProjectAddition() {
    const addProjectLink = document.querySelector('.add-project');

    // Create the input container if it doesn't exist
    let projectNameInputContainer = document.querySelector('.project-name-input-container');
    if (!projectNameInputContainer) {
        projectNameInputContainer = document.createElement('div');
        projectNameInputContainer.classList.add('project-name-input-container');

        const projectNameInput = document.createElement('input');
        projectNameInput.type = 'text';

        // add and cancel buttons
        const buttonsContainer = document.createElement('div');
        buttonsContainer.classList.add('buttons-container');


        const addBtn = document.createElement('button');
        addBtn.textContent = 'Add';
        addBtn.classList.add('add-project-btn');

        const cancelBtn = document.createElement('button');
        cancelBtn.textContent = 'Cancel';
        cancelBtn.classList.add('cancel-adding-btn')

        projectNameInputContainer.appendChild(projectNameInput);
        buttonsContainer.appendChild(cancelBtn);
        buttonsContainer.appendChild(addBtn);
        projectNameInputContainer.appendChild(buttonsContainer);

        // Append the container to the DOM
        addProjectLink.after(projectNameInputContainer);

        // Initially show the input container
        projectNameInputContainer.style.display = 'flex';

        // Hide the container and clear the input when 'Cancel' is clicked
        cancelBtn.addEventListener('click', () => {
            projectNameInputContainer.style.display = 'none';
            projectNameInput.value = '';
        });

        // Add the new project name when add project is clicked
        addBtn.addEventListener('click', ()=>{
            const projectsNamesContainer = document.createElement('div');
            projectsNamesContainer.classList.add('projects-names-container');

            const projectNameContainer = document.createElement('div');
            projectNameContainer.classList.add('project-name-container');

            const projectName = document.createElement('div');
            const projectNameValue = projectNameInput.value.trim();
            projectName.textContent = projectNameValue;
            projectName.classList.add('project-name');
            // add cross icon
            const crossIcon = document.createElement('img');
            crossIcon.src = './images/icons8-cross-16.png';
            crossIcon.alt = 'cross';
            crossIcon.classList.add('cross-icon');
            crossIcon.style.display = 'none';

            projectNameContainer.appendChild(projectName);
            projectNameContainer.appendChild(crossIcon);

            projectsNamesContainer.appendChild(projectNameContainer);
            addProjectLink.after(projectsNamesContainer);

            projectNameInputContainer.style.display = 'none';
            projectNameInput.value = '';
        })

        // Add an event listener for the add project link
        addProjectLink.addEventListener('click', () => {
            projectNameInputContainer.style.display = projectNameInputContainer.style.display === 'none' ? 'flex' : 'none';
        });
    }
}
