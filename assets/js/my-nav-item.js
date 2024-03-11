const STYLE = `
<style>
li > a {
    text-decoration: none;
    font-size: x-large;
    color: #333;
}
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
        const isActive = activeItemId === itemId;

        const shadowRoot = this.attachShadow ({mode: 'closed'});
        shadowRoot.innerHTML = `
            ${STYLE}
            <li>
                <a id="nav-item-${itemId}" href="${itemPath}" style="${isActive ? "color: green; font-weight: bold;" : ""}">${itemText}</a>
            </li>
        `;
    }
}
