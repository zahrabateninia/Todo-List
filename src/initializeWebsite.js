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

