document.addEventListener("DOMContentLoaded", () => {
    // Tema
    const switcher = document.getElementById("theme-switcher");
    const body = document.body;

    // Aplica o tema salvo
    if (localStorage.getItem("theme") === "dark") {
        body.classList.add("darkmode");
    }

    // Alterna o tema ao clicar
    switcher.addEventListener("click", () => {
        body.classList.toggle("darkmode");
        const theme = body.classList.contains("darkmode") ? "dark" : "light";
        localStorage.setItem("theme", theme);
    });

    // Posts 
    const posts = [
        {
            title: "Aamon Chevalier",
            img: "img/icon.png",
            tags: "Element: Dark | Race: Human | Style: Attack",
        },
        {
            title: "Asmodeus Chevalier",
            img: "img/icon.png",
            tags: "Element: Dark | Race: Primal | Style: Special",
        },
    ];

    const container = document.querySelector("main.content");

    // Limpa posts existentes (caso haja no HTML)
    container.querySelectorAll(".post").forEach((el) => el.remove());

    // Cria posts dinamicamente
    posts.forEach((p) => {
        const article = document.createElement("article");
        article.classList.add("post");
        article.innerHTML = `
      <div class="post-header">
        <img class="post-img" src="${p.img}" alt="${p.title}">
        <div class="post-info">
          <div class="post-title">${p.title}</div>
          <div class="post-tags">${p.tags}</div>
        </div>
      </div>
    `;
        container.appendChild(article);
    });
});
