const STYLE = `
<style>
</style>
`;

export class MyNavItem extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const itemId = this.getAttribute ('id');
        const itemPath = this.getAttribute ('path');
        const itemText = this.getAttribute ('text');
        const activeItemId = this.getAttribute ('active-id');

        const shadowRoot = this.attachShadow ({mode: 'closed'});
        shadowRoot.innerHTML = `
            ${STYLE}

            <li>
                <a id="nav-item-${itemId}" href="${itemPath}">${itemText}</a>
            </li>
        `;
    }
}
