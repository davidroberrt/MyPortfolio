class HeaderComponent extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });

        this.shadowRoot.innerHTML = `
            <style>
                header {
                    background: #333;
                    color: white;
                    padding: 15px;
                    text-align: center;
                }
                nav ul {
                    list-style: none;
                    padding: 0;
                    display: flex;
                    justify-content: center;
                    gap: 20px;
                }
                nav ul li {
                    display: inline;
                }
                nav ul li a {
                    color: white;
                    text-decoration: none;
                    font-size: 1.1em;
                }
            </style>
            <header>
                <h1>Meu Portfólio</h1>
                <nav>
                    <ul>
                        <li><a href="#about">Sobre</a></li>
                        <li><a href="#projects">Projetos</a></li>
                        <li><a href="#contact">Contato</a></li>
                    </ul>
                </nav>
            </header>
        `;
    }
}

customElements.define("header-component", HeaderComponent);
