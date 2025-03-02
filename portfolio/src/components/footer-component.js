class FooterComponent extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({ mode: "open" });

        this.shadowRoot.innerHTML = `
            <style>
                footer {
                    background: #333;
                    color: white;
                    padding: 15px;
                    text-align: center;
                    position: fixed;
                    bottom: 0;
                    width: 100%;
                }
            </style>
            <footer>
                <p>&copy; 2025 Meu Nome. Todos os direitos reservados.</p>
            </footer>
        `;
    }
}

customElements.define("footer-component", FooterComponent);