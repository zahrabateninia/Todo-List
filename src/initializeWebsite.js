// import { renderInbox } from "./inbox";

function createHeader(){
    const header = document.createElement('header');

    const headerLogo = document.createElement('img');
    headerLogo.classList.add('logo');
    headerLogo.src = "./images/todolist.svg";
    headerLogo.alt = 'logo';

    const headerH1 = document.createElement('h1');
    headerH1.textContent = 'Todo List';

    header.appendChild(headerLogo);
    header.appendChild(headerH1);
    return header;
}


function createSidebar() {
    const nav = document.createElement('nav');
    const sidebar = document.createElement('div');
    sidebar.classList.add('sidebar');

    const sidebarItems = [
        { class: 'inbox', text: 'Inbox', imgSrc: './images/inbox_FILL0_wght400_GRAD0_opsz24.svg', altText: 'inbox'},
        { class: 'today', text: 'Today', imgSrc: './images/today_FILL0_wght400_GRAD0_opsz24.svg', altText: 'today' },
        { class: 'important', text: 'Important', imgSrc: './images/stars_FILL0_wght400_GRAD0_opsz24.svg', altText: 'important' },
        { class: 'completed', text: 'Completed', imgSrc: './images/done_all_FILL0_wght400_GRAD0_opsz24.svg', altText: 'completed' },
        { class: 'add-project', text: 'Projects', imgSrc: './images/add_FILL0_wght400_GRAD0_opsz24.svg', altText: 'plus' }
    ];

    // Loop through each sidebar item and create its elements
    sidebarItems.forEach(item => {
        const anchor = document.createElement('a');
        anchor.classList.add(item.class);

        const img = document.createElement('img');
        img.src = item.imgSrc;
        img.alt = item.altText;
        img.classList.add('navbar', 'icon');

        const p = document.createElement('p');
        p.textContent = item.text;
        p.classList.add(item.class);

        if (item.class === 'add-project') {
            // Append the text before the icon
            anchor.appendChild(p);
            anchor.appendChild(img);
        } else {
            // Append the icon before the text
            anchor.appendChild(img);
            anchor.appendChild(p);
        }
        sidebar.appendChild(anchor);
    });

    nav.appendChild(sidebar);

    return nav; 
}

function createMain(){
    const main = document.createElement('main');
    main.classList.add('main-content');

    return main;
}

function createFooter() {
    const footer = document.createElement('footer');

    const p = document.createElement('p');
    p.textContent = 'Copyright © 2023 ';

    const a = document.createElement('a');
    a.href = 'https://github.com/zahrabateninia';
    a.textContent = 'zahrabateninia'; 
    a.setAttribute('target', '_blank'); // Opens link in new tab

    p.appendChild(a);

    const img = document.createElement('img');
    img.src = 'images/github.svg';
    img.alt = 'github';

    footer.appendChild(p);
    footer.appendChild(img);

    return footer;
}

export default function initializeWebsite(){
    const wrapper = document.createElement('div');
    wrapper.classList.add('wrapper');

    const htmlContent = document.querySelector('.content');
    htmlContent.appendChild(wrapper);

    wrapper.appendChild(createHeader());
    wrapper.appendChild(createSidebar());
    wrapper.appendChild(createMain());
    wrapper.appendChild(createFooter());

    return wrapper;

}


// Ensure that when a link in the sidebar is clicked, the corresponding content is displayed in the main area.(update UI)


function renderInbox(){
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
    inboxDiv.appendChild(addNewTaskDiv)
    return inboxDiv;
};

function renderToday(){
    return 'today'
};


function renderCompleted(){
    return 'comp'
};


function renderImportant(){
    return 'imp'
};

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
            }
            else if(link.classList.contains('today')){
                mainContent.textContent = renderToday();
            }
            else if(link.classList.contains('complete')){
                mainContent.textContent = renderCompleted();
            }
            else if(link.classList.contains('important')){
                mainContent.textContent = renderImportant();
            }
        });
    });
};
