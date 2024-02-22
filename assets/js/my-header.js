const STYLE = `
<style>
header {
    padding: 16px;
    z-index: 1;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2),
                0 6px 20px 0 rgba(0, 0, 0, 0.19);
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: 48px;
}

my-drawer {
    display: none;
}

@media only screen and (max-width: 860px) {
    my-navbar {
        display: none;
    }

    my-drawer {
        display: block;
    }
}
</style>
`;

export class MyHeader extends HTMLElement {
    constructor() {
        super();
        console.log('MyHeader constructed');
    }

    connectedCallback() {
        const activeNavItemId = this.getAttribute('active-nav-item') || 'index';
        const shadowRoot = this.attachShadow ({mode: 'closed'});
        shadowRoot.innerHTML = `
            ${STYLE}

            <header>
                <div>Placeholder</div>
                <my-navbar active-nav-item="${activeNavItemId}"></my-navbar>
                <my-drawer></my-drawer>
            </header>
        `;
    }
}
