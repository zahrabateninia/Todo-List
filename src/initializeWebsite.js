import { renderInbox, createAndAddNewTask, tasksArr } from "./inbox";
import { attachEventListenersToTasksContainer, renderNewTask } from "./toDoItem";
import { loadTasksFromLocalStorage } from "./storage";


function createHeader() {
  const header = document.createElement("header");

  const headerLogo = document.createElement("img");
  headerLogo.classList.add("logo");
  headerLogo.src = "./images/todolist.svg";
  headerLogo.alt = "logo";

  const headerH1 = document.createElement("h1");
  headerH1.textContent = "Todo List";

  // add menu icon ( only be shown when on the mobile devices)
  const menuIcon = document.createElement("img");
  menuIcon.classList.add("menu-icon");
  menuIcon.src = "./images/icons8-menu-24.svg";
  menuIcon.alt = "menu";

  header.appendChild(headerLogo);
  header.appendChild(headerH1);
  header.appendChild(menuIcon);

  // Call checkWindowSize with menuIcon as a parameter
  checkWindowSize(menuIcon);

  return header;
}

// Modify checkWindowSize to accept the menuIcon as a parameter
function checkWindowSize(menuIcon) {
  if (window.innerWidth <= 768) {
    menuIcon.style.display = "block";
  } else {
    menuIcon.style.display = "none";
  }
}

// Update the event listener for window resize to also pass menuIcon
window.addEventListener("resize", () => {
  const menuIcon = document.querySelector("img.menu-icon");
  checkWindowSize(menuIcon);
});

function createSidebar() {
  const nav = document.createElement("nav");
  const sidebar = document.createElement("div");
  sidebar.classList.add("sidebar");

  const sidebarItems = [
    {
      class: "inbox",
      text: "Inbox",
      imgSrc: "./images/inbox_FILL0_wght400_GRAD0_opsz24.svg",
      altText: "inbox",
    },
    {
      class: "today",
      text: "Today",
      imgSrc: "./images/today_FILL0_wght400_GRAD0_opsz24.svg",
      altText: "today",
    },
    {
      class: "important",
      text: "Important",
      imgSrc: "./images/stars_FILL0_wght400_GRAD0_opsz24.svg",
      altText: "important",
    },
    {
      class: "completed",
      text: "Completed",
      imgSrc: "./images/done_all_FILL0_wght400_GRAD0_opsz24.svg",
      altText: "completed",
    },
    {
      class: "add-project",
      text: "Projects",
      imgSrc: "./images/add_FILL0_wght400_GRAD0_opsz24.svg",
      altText: "plus",
    },
  ];

  // Loop through each sidebar item and create its elements
  sidebarItems.forEach((item) => {
    const anchor = document.createElement("a");
    anchor.classList.add(item.class);

    const img = document.createElement("img");
    img.src = item.imgSrc;
    img.alt = item.altText;
    img.classList.add("navbar", "icon");

    const p = document.createElement("p");
    p.textContent = item.text;
    p.classList.add(item.class);

    if (item.class === "add-project") {
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

function createMain() {
  const main = document.createElement("main");
  main.classList.add("main-content");

  return main;
}

function createFooter() {
  const footer = document.createElement("footer");

  const p = document.createElement("p");
  p.textContent = "Copyright © 2024 ";

  const a = document.createElement("a");
  a.href = "https://github.com/zahrabateninia";
  a.textContent = "zahrabateninia";
  a.setAttribute("target", "_blank"); // Opens link in new tab

  p.appendChild(a);

  const img = document.createElement("img");
  img.src = "images/github.svg";
  img.alt = "github";

  footer.appendChild(p);
  footer.appendChild(img);

  return footer;
}

// toggle sidebar

function toggleSidebar() {
  const menuIcon = document.querySelector(".menu-icon");
  const sidebar = document.querySelector("nav");

  menuIcon.addEventListener("click", function () {
    // Toggle sidebar visibility
    sidebar.style.left = sidebar.style.left === "0px" ? "-60%" : "0px";
  });

  document.addEventListener("click", function (event) {
    // Check if the click is outside the sidebar
    const isClickInsideSidebar = sidebar.contains(event.target);
    const isClickOnMenuIcon = menuIcon.contains(event.target);

    if (
      !isClickInsideSidebar &&
      !isClickOnMenuIcon &&
      sidebar.style.left === "0px"
    ) {
      // Hide the sidebar if it's open and the click was outside
      sidebar.style.left = "-60%";
    }
  });
}

export default function initializeWebsite() {
  const wrapper = document.createElement("div");
  wrapper.classList.add("wrapper");

  const htmlContent = document.querySelector(".content");
  htmlContent.appendChild(wrapper);

  wrapper.appendChild(createHeader());
  wrapper.appendChild(createSidebar());
  toggleSidebar();
  const mainContent = createMain();
  wrapper.appendChild(mainContent);

  // when the website is rendered, the inbox contents (with previous added tasks) are shown as a default 
  const inboxContent = renderInbox();
  mainContent.appendChild(inboxContent);
  if(tasksArr){
    const data = loadTasksFromLocalStorage(); // tasks are stored in an array in data
    // push the data(tasks) to the tasks container
    data.forEach((task) =>{
      renderNewTask()
    })
}
  createAndAddNewTask(); 
  attachEventListenersToTasksContainer();

  wrapper.appendChild(createFooter());

  return wrapper;
}
