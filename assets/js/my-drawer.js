export class MyDrawer extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const shadowRoot = this.attachShadow ({mode: 'closed'});
        shadowRoot.innerHTML = '<div>Drawer</div>';
    }
}