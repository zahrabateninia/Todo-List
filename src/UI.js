import { renderInbox ,  addTaskDialog } from "./inbox";

export function updateMainContent(){
    const mainContent = document.querySelector('.main-content');

    
    // Grab all sidebar links
    const sidebarLinks = document.querySelectorAll('.sidebar a');
    
    // Add an event listener to each link
    sidebarLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();  // Prevent the default link action

            // Clear the main content
            mainContent.textContent = ' ';

            // Determine which function to call based on clicked link's class
            if(link.classList.contains('inbox')){
                const inboxContent = renderInbox();
                mainContent.appendChild(inboxContent);
                addTaskDialog();
            }
            else if(link.classList.contains('today')){
                // mainContent.textContent = renderToday();
            }
            else if(link.classList.contains('completed')){
                // mainContent.textContent = renderCompleted();
            }
            else if(link.classList.contains('important')){
                // mainContent.textContent = renderImportant();
            }
        });
    });
};