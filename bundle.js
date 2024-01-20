(() => {
  "use strict";
  !(function () {
    const t = document.createElement("div");
    t.classList("wrapper"),
      document.querySelector(".content").appendChild(t),
      t.appendChild(
        (function () {
          const t = document.createElement("header"),
            e = document.createElement("img");
          e.classList.add("logo"),
            (e.src = "/images/todolist.svg"),
            (e.alt = "logo");
          const a = document.createElement("h1");
          return (
            (a.textContent = "Todo List"), t.appendChild(e), t.appendChild(a), t
          );
        })(),
      ),
      t.appendChild(
        (function () {
          const t = document.createElement("nav"),
            e = document.createElement("div");
          return (
            e.classList.add("sidebar"),
            [
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
            ].forEach((t) => {
              const a = document.createElement("div");
              a.classList.add(t.class);
              const n = document.createElement("img");
              (n.src = t.imgSrc),
                (n.alt = t.altText),
                n.classList.add("navbar", "icon");
              const s = document.createElement("p");
              (s.textContent = t.text),
                s.classList.add(t.class),
                a.appendChild(n),
                a.appendChild(s),
                e.appendChild(a);
            }),
            t.appendChild(e),
            t
          );
        })(),
      ),
      t.appendChild(
        (function () {
          const t = document.createElement("footer"),
            e = document.createElement("p");
          e.textContent = "Copyright © 2023 ";
          const a = document.createElement("a");
          (a.href = "https://github.com/zahrabateninia"),
            (a.textContent = "zahrabateninia"),
            a.setAttribute("target", "_blank"),
            e.appendChild(a);
          const n = document.createElement("img");
          return (
            (n.src = "images/github.svg"),
            (n.alt = "github"),
            t.appendChild(e),
            t.appendChild(n),
            t
          );
        })(),
      );
  })();
})();
