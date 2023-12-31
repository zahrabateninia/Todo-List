(()=>{"use strict";var __webpack_modules__={403:()=>{eval("\n;// CONCATENATED MODULE: ./src/inbox.js\n// \x3c!-- content --\x3e\n// <div class=\"content\">\n\n// </div>\n// \x3c!-- /content --\x3e\n\n// \x3c!-- dialog form --\x3e\n// <dialog class=\"inbox\">\n// <h2 class=\"dialog-title.\">New Task</h2>\n// <form action=\"dialog\">\n//     <div class=\"task-title\">\n//         <label for=\"task-title\">Task Title*</label>\n//         <input type=\"text\" value=\"\" name=\"task-title\" id=\"task-title\" placeholder=\"e.g. Workout\" class=\"task-title--input\" required>\n//     </div>\n//     <div class=\"priority\">\n//         <label for=\"priority\">Priority</label>\n//         <select name=\"priority\" id=\"priority\" class=\"priority--select\">\n//             <option value=\"low\">Low</option>\n//             <option value=\"medium\">Medium</option>\n//             <option value=\"high\">High</option>\n//         </select>\n//     </div>\n//     <div class=\"schedule\">\n//         <label for=\"schedule\">Schedule</label>\n//         <input type=\"date\" value=\"\" name=\"schedule\" id=\"schedule\" class=\"due-date\">\n//     </div>\n//     <div class=\"buttons\">\n//         <button class=\"cancel-btn\">Cancel</button>\n//         <button type=\"submit\" class=\"add-btn\">Add</button>\n//     </div>\n    \n// </form>\n// </dialog>\n// \x3c!-- /dialog form --\x3e \n\n// inbox.js\n\n\nconst inboxItems = (/* unused pure expression or super */ null && ([]));\n\nfunction renderInbox(main) {\n    main.innerHTML = '';  // Clear the area\n\n    const inboxH1= document.createElement('h1');\n    inboxH1.textContent= 'Inbox';\n\n    const addNewTask = document.createElement('div');\n    addNewTask.classList.add('add-new-task');\n\n    const plusIcon =  document.createElement('img');\n    plusIcon.src = './images/add_FILL0_wght400_GRAD0_opsz24.svg';\n    plusIcon.alt = 'plus';\n    addNewTask.appendChild(plusIcon);\n\n    const addTaskText = document.createElement('p');\n    addTaskText.classList.add('add-task-text');\n    addNewTask.appendChild(addTaskText);\n\n    main.appendChild(inboxH1);\n    main.appendChild(addNewTask);\n\n\n    // Create and populate a list with inbox items\n    // const list = document.createElement('ul');\n    // inboxItems.forEach(item => {\n    //     const listItem = document.createElement('li');\n    //     listItem.textContent = item;\n    //     list.appendChild(listItem);\n    // });\n\n    // mainContentArea.appendChild(list);\n\n\n    // Add event listener for the inbox link in the sidebar\n    const inboxLink = document.querySelector('.sidebar .inbox'); \n    inboxLink.addEventListener('click', (event) => {\n    event.preventDefault(); // Prevent default link behavior\n    renderInbox(main); // Call renderInbox from inbox.js\n});\n}\n\n\n\n\n\n\n\n;// CONCATENATED MODULE: ./src/initializeWebsite.js\n\n\nfunction createHeader(){\n    const header = document.createElement('header');\n\n    const headerLogo = document.createElement('img');\n    headerLogo.classList.add('logo');\n    headerLogo.src = \"./images/todolist.svg\";\n    headerLogo.alt = 'logo';\n\n    const headerH1 = document.createElement('h1');\n    headerH1.textContent = 'Todo List';\n\n    header.appendChild(headerLogo);\n    header.appendChild(headerH1);\n    return header;\n}\n\n\nfunction createSidebar() {\n    const nav = document.createElement('nav');\n    const sidebar = document.createElement('div');\n    sidebar.classList.add('sidebar');\n\n    const sidebarItems = [\n        { class: 'inbox', text: 'Inbox', imgSrc: './images/inbox_FILL0_wght400_GRAD0_opsz24.svg', altText: 'inbox'},\n        { class: 'today', text: 'Today', imgSrc: './images/today_FILL0_wght400_GRAD0_opsz24.svg', altText: 'today' },\n        { class: 'important', text: 'Important', imgSrc: './images/stars_FILL0_wght400_GRAD0_opsz24.svg', altText: 'important' },\n        { class: 'completed', text: 'Completed', imgSrc: './images/done_all_FILL0_wght400_GRAD0_opsz24.svg', altText: 'completed' },\n        { class: 'add-project', text: 'Projects', imgSrc: './images/add_FILL0_wght400_GRAD0_opsz24.svg', altText: 'plus' }\n    ];\n\n    // Loop through each sidebar item and create its elements\n    sidebarItems.forEach(item => {\n        const anchor = document.createElement('a');\n        anchor.classList.add(item.class);\n\n        const img = document.createElement('img');\n        img.src = item.imgSrc;\n        img.alt = item.altText;\n        img.classList.add('navbar', 'icon');\n\n        const p = document.createElement('p');\n        p.textContent = item.text;\n        p.classList.add(item.class);\n\n        if (item.class === 'add-project') {\n            // Append the text before the icon\n            anchor.appendChild(p);\n            anchor.appendChild(img);\n        } else {\n            // Append the icon before the text\n            anchor.appendChild(img);\n            anchor.appendChild(p);\n        }\n        sidebar.appendChild(anchor);\n    });\n\n    nav.appendChild(sidebar);\n\n    return nav; \n}\n\nfunction createMainContent(){\n    const main = document.createElement('main');\n    main.classList.add('main-content');\n\n    return main;\n}\n\nfunction createFooter() {\n    const footer = document.createElement('footer');\n\n    const p = document.createElement('p');\n    p.textContent = 'Copyright © 2023 ';\n\n    const a = document.createElement('a');\n    a.href = 'https://github.com/zahrabateninia';\n    a.textContent = 'zahrabateninia'; \n    a.setAttribute('target', '_blank'); // Opens link in new tab\n\n    p.appendChild(a);\n\n    const img = document.createElement('img');\n    img.src = 'images/github.svg';\n    img.alt = 'github';\n\n    footer.appendChild(p);\n    footer.appendChild(img);\n\n    return footer;\n}\n\nfunction initializeWebsite(){\n    const wrapper = document.createElement('div');\n    wrapper.classList.add('wrapper');\n\n    const htmlContent = document.querySelector('.content');\n    htmlContent.appendChild(wrapper);\n\n    wrapper.appendChild(createHeader());\n    wrapper.appendChild(createSidebar());\n    renderInbox(main);\n    wrapper.appendChild(createMainContent());\n    wrapper.appendChild(createFooter());\n\n    return wrapper;\n\n}\n\n\n;// CONCATENATED MODULE: ./src/index.js\n\n\ninitializeWebsite()//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNDAzLmpzIiwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7QUFHQSxtQkFBbUIsa0RBQUU7O0FBRXJCO0FBQ0EsMEJBQTBCOztBQUUxQjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7O0FBRVI7OztBQUdBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QjtBQUM1Qix1QkFBdUI7QUFDdkIsQ0FBQztBQUNEOzs7Ozs7QUFNdUI7OztBQ3JGZTs7QUFFdEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFVBQVUseUdBQXlHO0FBQ25ILFVBQVUsMEdBQTBHO0FBQ3BILFVBQVUsc0hBQXNIO0FBQ2hJLFVBQVUseUhBQXlIO0FBQ25JLFVBQVU7QUFDVjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDOztBQUV4Qzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVlO0FBQ2Y7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJLFdBQVc7QUFDZjtBQUNBOztBQUVBOztBQUVBOzs7O0FDNUdvRDs7QUFFcEQsaUJBQWlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luYm94LmpzP2VhMmUiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luaXRpYWxpemVXZWJzaXRlLmpzPzI3NGUiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzP2I2MzUiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gPCEtLSBjb250ZW50IC0tPlxuLy8gPGRpdiBjbGFzcz1cImNvbnRlbnRcIj5cblxuLy8gPC9kaXY+XG4vLyA8IS0tIC9jb250ZW50IC0tPlxuXG4vLyA8IS0tIGRpYWxvZyBmb3JtIC0tPlxuLy8gPGRpYWxvZyBjbGFzcz1cImluYm94XCI+XG4vLyA8aDIgY2xhc3M9XCJkaWFsb2ctdGl0bGUuXCI+TmV3IFRhc2s8L2gyPlxuLy8gPGZvcm0gYWN0aW9uPVwiZGlhbG9nXCI+XG4vLyAgICAgPGRpdiBjbGFzcz1cInRhc2stdGl0bGVcIj5cbi8vICAgICAgICAgPGxhYmVsIGZvcj1cInRhc2stdGl0bGVcIj5UYXNrIFRpdGxlKjwvbGFiZWw+XG4vLyAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHZhbHVlPVwiXCIgbmFtZT1cInRhc2stdGl0bGVcIiBpZD1cInRhc2stdGl0bGVcIiBwbGFjZWhvbGRlcj1cImUuZy4gV29ya291dFwiIGNsYXNzPVwidGFzay10aXRsZS0taW5wdXRcIiByZXF1aXJlZD5cbi8vICAgICA8L2Rpdj5cbi8vICAgICA8ZGl2IGNsYXNzPVwicHJpb3JpdHlcIj5cbi8vICAgICAgICAgPGxhYmVsIGZvcj1cInByaW9yaXR5XCI+UHJpb3JpdHk8L2xhYmVsPlxuLy8gICAgICAgICA8c2VsZWN0IG5hbWU9XCJwcmlvcml0eVwiIGlkPVwicHJpb3JpdHlcIiBjbGFzcz1cInByaW9yaXR5LS1zZWxlY3RcIj5cbi8vICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJsb3dcIj5Mb3c8L29wdGlvbj5cbi8vICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJtZWRpdW1cIj5NZWRpdW08L29wdGlvbj5cbi8vICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJoaWdoXCI+SGlnaDwvb3B0aW9uPlxuLy8gICAgICAgICA8L3NlbGVjdD5cbi8vICAgICA8L2Rpdj5cbi8vICAgICA8ZGl2IGNsYXNzPVwic2NoZWR1bGVcIj5cbi8vICAgICAgICAgPGxhYmVsIGZvcj1cInNjaGVkdWxlXCI+U2NoZWR1bGU8L2xhYmVsPlxuLy8gICAgICAgICA8aW5wdXQgdHlwZT1cImRhdGVcIiB2YWx1ZT1cIlwiIG5hbWU9XCJzY2hlZHVsZVwiIGlkPVwic2NoZWR1bGVcIiBjbGFzcz1cImR1ZS1kYXRlXCI+XG4vLyAgICAgPC9kaXY+XG4vLyAgICAgPGRpdiBjbGFzcz1cImJ1dHRvbnNcIj5cbi8vICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImNhbmNlbC1idG5cIj5DYW5jZWw8L2J1dHRvbj5cbi8vICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3M9XCJhZGQtYnRuXCI+QWRkPC9idXR0b24+XG4vLyAgICAgPC9kaXY+XG4gICAgXG4vLyA8L2Zvcm0+XG4vLyA8L2RpYWxvZz5cbi8vIDwhLS0gL2RpYWxvZyBmb3JtIC0tPiBcblxuLy8gaW5ib3guanNcblxuXG5jb25zdCBpbmJveEl0ZW1zID0gW107XG5cbmZ1bmN0aW9uIHJlbmRlckluYm94KG1haW4pIHtcbiAgICBtYWluLmlubmVySFRNTCA9ICcnOyAgLy8gQ2xlYXIgdGhlIGFyZWFcblxuICAgIGNvbnN0IGluYm94SDE9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgaW5ib3hIMS50ZXh0Q29udGVudD0gJ0luYm94JztcblxuICAgIGNvbnN0IGFkZE5ld1Rhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBhZGROZXdUYXNrLmNsYXNzTGlzdC5hZGQoJ2FkZC1uZXctdGFzaycpO1xuXG4gICAgY29uc3QgcGx1c0ljb24gPSAgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgcGx1c0ljb24uc3JjID0gJy4vaW1hZ2VzL2FkZF9GSUxMMF93Z2h0NDAwX0dSQUQwX29wc3oyNC5zdmcnO1xuICAgIHBsdXNJY29uLmFsdCA9ICdwbHVzJztcbiAgICBhZGROZXdUYXNrLmFwcGVuZENoaWxkKHBsdXNJY29uKTtcblxuICAgIGNvbnN0IGFkZFRhc2tUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGFkZFRhc2tUZXh0LmNsYXNzTGlzdC5hZGQoJ2FkZC10YXNrLXRleHQnKTtcbiAgICBhZGROZXdUYXNrLmFwcGVuZENoaWxkKGFkZFRhc2tUZXh0KTtcblxuICAgIG1haW4uYXBwZW5kQ2hpbGQoaW5ib3hIMSk7XG4gICAgbWFpbi5hcHBlbmRDaGlsZChhZGROZXdUYXNrKTtcblxuXG4gICAgLy8gQ3JlYXRlIGFuZCBwb3B1bGF0ZSBhIGxpc3Qgd2l0aCBpbmJveCBpdGVtc1xuICAgIC8vIGNvbnN0IGxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICAgIC8vIGluYm94SXRlbXMuZm9yRWFjaChpdGVtID0+IHtcbiAgICAvLyAgICAgY29uc3QgbGlzdEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIC8vICAgICBsaXN0SXRlbS50ZXh0Q29udGVudCA9IGl0ZW07XG4gICAgLy8gICAgIGxpc3QuYXBwZW5kQ2hpbGQobGlzdEl0ZW0pO1xuICAgIC8vIH0pO1xuXG4gICAgLy8gbWFpbkNvbnRlbnRBcmVhLmFwcGVuZENoaWxkKGxpc3QpO1xuXG5cbiAgICAvLyBBZGQgZXZlbnQgbGlzdGVuZXIgZm9yIHRoZSBpbmJveCBsaW5rIGluIHRoZSBzaWRlYmFyXG4gICAgY29uc3QgaW5ib3hMaW5rID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpZGViYXIgLmluYm94Jyk7IFxuICAgIGluYm94TGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7IC8vIFByZXZlbnQgZGVmYXVsdCBsaW5rIGJlaGF2aW9yXG4gICAgcmVuZGVySW5ib3gobWFpbik7IC8vIENhbGwgcmVuZGVySW5ib3ggZnJvbSBpbmJveC5qc1xufSk7XG59XG5cblxuXG5cblxuZXhwb3J0IHsgcmVuZGVySW5ib3ggfTtcbiIsImltcG9ydCB7IHJlbmRlckluYm94IH0gZnJvbSBcIi4vaW5ib3hcIjtcblxuZnVuY3Rpb24gY3JlYXRlSGVhZGVyKCl7XG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJyk7XG5cbiAgICBjb25zdCBoZWFkZXJMb2dvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgaGVhZGVyTG9nby5jbGFzc0xpc3QuYWRkKCdsb2dvJyk7XG4gICAgaGVhZGVyTG9nby5zcmMgPSBcIi4vaW1hZ2VzL3RvZG9saXN0LnN2Z1wiO1xuICAgIGhlYWRlckxvZ28uYWx0ID0gJ2xvZ28nO1xuXG4gICAgY29uc3QgaGVhZGVySDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIGhlYWRlckgxLnRleHRDb250ZW50ID0gJ1RvZG8gTGlzdCc7XG5cbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQoaGVhZGVyTG9nbyk7XG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKGhlYWRlckgxKTtcbiAgICByZXR1cm4gaGVhZGVyO1xufVxuXG5cbmZ1bmN0aW9uIGNyZWF0ZVNpZGViYXIoKSB7XG4gICAgY29uc3QgbmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbmF2Jyk7XG4gICAgY29uc3Qgc2lkZWJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHNpZGViYXIuY2xhc3NMaXN0LmFkZCgnc2lkZWJhcicpO1xuXG4gICAgY29uc3Qgc2lkZWJhckl0ZW1zID0gW1xuICAgICAgICB7IGNsYXNzOiAnaW5ib3gnLCB0ZXh0OiAnSW5ib3gnLCBpbWdTcmM6ICcuL2ltYWdlcy9pbmJveF9GSUxMMF93Z2h0NDAwX0dSQUQwX29wc3oyNC5zdmcnLCBhbHRUZXh0OiAnaW5ib3gnfSxcbiAgICAgICAgeyBjbGFzczogJ3RvZGF5JywgdGV4dDogJ1RvZGF5JywgaW1nU3JjOiAnLi9pbWFnZXMvdG9kYXlfRklMTDBfd2dodDQwMF9HUkFEMF9vcHN6MjQuc3ZnJywgYWx0VGV4dDogJ3RvZGF5JyB9LFxuICAgICAgICB7IGNsYXNzOiAnaW1wb3J0YW50JywgdGV4dDogJ0ltcG9ydGFudCcsIGltZ1NyYzogJy4vaW1hZ2VzL3N0YXJzX0ZJTEwwX3dnaHQ0MDBfR1JBRDBfb3BzejI0LnN2ZycsIGFsdFRleHQ6ICdpbXBvcnRhbnQnIH0sXG4gICAgICAgIHsgY2xhc3M6ICdjb21wbGV0ZWQnLCB0ZXh0OiAnQ29tcGxldGVkJywgaW1nU3JjOiAnLi9pbWFnZXMvZG9uZV9hbGxfRklMTDBfd2dodDQwMF9HUkFEMF9vcHN6MjQuc3ZnJywgYWx0VGV4dDogJ2NvbXBsZXRlZCcgfSxcbiAgICAgICAgeyBjbGFzczogJ2FkZC1wcm9qZWN0JywgdGV4dDogJ1Byb2plY3RzJywgaW1nU3JjOiAnLi9pbWFnZXMvYWRkX0ZJTEwwX3dnaHQ0MDBfR1JBRDBfb3BzejI0LnN2ZycsIGFsdFRleHQ6ICdwbHVzJyB9XG4gICAgXTtcblxuICAgIC8vIExvb3AgdGhyb3VnaCBlYWNoIHNpZGViYXIgaXRlbSBhbmQgY3JlYXRlIGl0cyBlbGVtZW50c1xuICAgIHNpZGViYXJJdGVtcy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICBjb25zdCBhbmNob3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgICAgIGFuY2hvci5jbGFzc0xpc3QuYWRkKGl0ZW0uY2xhc3MpO1xuXG4gICAgICAgIGNvbnN0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICBpbWcuc3JjID0gaXRlbS5pbWdTcmM7XG4gICAgICAgIGltZy5hbHQgPSBpdGVtLmFsdFRleHQ7XG4gICAgICAgIGltZy5jbGFzc0xpc3QuYWRkKCduYXZiYXInLCAnaWNvbicpO1xuXG4gICAgICAgIGNvbnN0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIHAudGV4dENvbnRlbnQgPSBpdGVtLnRleHQ7XG4gICAgICAgIHAuY2xhc3NMaXN0LmFkZChpdGVtLmNsYXNzKTtcblxuICAgICAgICBpZiAoaXRlbS5jbGFzcyA9PT0gJ2FkZC1wcm9qZWN0Jykge1xuICAgICAgICAgICAgLy8gQXBwZW5kIHRoZSB0ZXh0IGJlZm9yZSB0aGUgaWNvblxuICAgICAgICAgICAgYW5jaG9yLmFwcGVuZENoaWxkKHApO1xuICAgICAgICAgICAgYW5jaG9yLmFwcGVuZENoaWxkKGltZyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBBcHBlbmQgdGhlIGljb24gYmVmb3JlIHRoZSB0ZXh0XG4gICAgICAgICAgICBhbmNob3IuYXBwZW5kQ2hpbGQoaW1nKTtcbiAgICAgICAgICAgIGFuY2hvci5hcHBlbmRDaGlsZChwKTtcbiAgICAgICAgfVxuICAgICAgICBzaWRlYmFyLmFwcGVuZENoaWxkKGFuY2hvcik7XG4gICAgfSk7XG5cbiAgICBuYXYuYXBwZW5kQ2hpbGQoc2lkZWJhcik7XG5cbiAgICByZXR1cm4gbmF2OyBcbn1cblxuZnVuY3Rpb24gY3JlYXRlTWFpbkNvbnRlbnQoKXtcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWFpbicpO1xuICAgIG1haW4uY2xhc3NMaXN0LmFkZCgnbWFpbi1jb250ZW50Jyk7XG5cbiAgICByZXR1cm4gbWFpbjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlRm9vdGVyKCkge1xuICAgIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvb3RlcicpO1xuXG4gICAgY29uc3QgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBwLnRleHRDb250ZW50ID0gJ0NvcHlyaWdodCDCqSAyMDIzICc7XG5cbiAgICBjb25zdCBhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgIGEuaHJlZiA9ICdodHRwczovL2dpdGh1Yi5jb20vemFocmFiYXRlbmluaWEnO1xuICAgIGEudGV4dENvbnRlbnQgPSAnemFocmFiYXRlbmluaWEnOyBcbiAgICBhLnNldEF0dHJpYnV0ZSgndGFyZ2V0JywgJ19ibGFuaycpOyAvLyBPcGVucyBsaW5rIGluIG5ldyB0YWJcblxuICAgIHAuYXBwZW5kQ2hpbGQoYSk7XG5cbiAgICBjb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBpbWcuc3JjID0gJ2ltYWdlcy9naXRodWIuc3ZnJztcbiAgICBpbWcuYWx0ID0gJ2dpdGh1Yic7XG5cbiAgICBmb290ZXIuYXBwZW5kQ2hpbGQocCk7XG4gICAgZm9vdGVyLmFwcGVuZENoaWxkKGltZyk7XG5cbiAgICByZXR1cm4gZm9vdGVyO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpbml0aWFsaXplV2Vic2l0ZSgpe1xuICAgIGNvbnN0IHdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB3cmFwcGVyLmNsYXNzTGlzdC5hZGQoJ3dyYXBwZXInKTtcblxuICAgIGNvbnN0IGh0bWxDb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKTtcbiAgICBodG1sQ29udGVudC5hcHBlbmRDaGlsZCh3cmFwcGVyKTtcblxuICAgIHdyYXBwZXIuYXBwZW5kQ2hpbGQoY3JlYXRlSGVhZGVyKCkpO1xuICAgIHdyYXBwZXIuYXBwZW5kQ2hpbGQoY3JlYXRlU2lkZWJhcigpKTtcbiAgICByZW5kZXJJbmJveChtYWluKTtcbiAgICB3cmFwcGVyLmFwcGVuZENoaWxkKGNyZWF0ZU1haW5Db250ZW50KCkpO1xuICAgIHdyYXBwZXIuYXBwZW5kQ2hpbGQoY3JlYXRlRm9vdGVyKCkpO1xuXG4gICAgcmV0dXJuIHdyYXBwZXI7XG5cbn1cblxuZXhwb3J0IHtjcmVhdGVTaWRlYmFyfSIsImltcG9ydCBpbml0aWFsaXplV2Vic2l0ZSBmcm9tIFwiLi9pbml0aWFsaXplV2Vic2l0ZVwiO1xuXG5pbml0aWFsaXplV2Vic2l0ZSgpIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///403\n")}},__webpack_exports__={};__webpack_modules__[403]()})();