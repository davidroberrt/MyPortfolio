class ProjectCard extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });

        // Creating the HTML of component
        this.shadowRoot.innerHTML = `
            <style>
                .card {
                    border: 1px solid #ddd;
                    border-radius: 8px;
                    padding: 16px;
                    margin: 16px;
                    background: white;
                    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
                    text-align: center;
                }
                .title {
                    font-size: 1.2em;
                    font-weight: bold;
                }
                .description {
                    color: #555;
                    margin: 10px 0;
                }
                .link {
                    color: #007bff;
                    text-decoration: none;
                    font-weight: bold;
                }
            </style>
            <div class="card">
                <div class="title"></div>
                <p class="description"></p>
                <a class="link" target="_blank">Ver Projeto</a>
            </div>
        `;
    }

    connectedCallback() {
        this.shadowRoot.querySelector(".title").textContent = this.getAttribute("title") || "Projeto Sem Nome";
        this.shadowRoot.querySelector(".description").textContent = this.getAttribute("description") || "Sem descrição disponível.";
        this.shadowRoot.querySelector(".link").setAttribute("href", this.getAttribute("link") || "#");
    }
}

// Define the Web Component
customElements.define("project-card", ProjectCard);
