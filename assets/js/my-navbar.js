import { NAV_ITEMS } from "./constants.js";

const STYLE = `
<style>
ul {
    display: flex;
    flex-direction: row;
    list-style: none;
    gap: 24px;
}
</style>
`;

export class MyNavbar extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const activeNavItemId = this.getAttribute('active-nav-item');
        let html = `${STYLE}`;
        html += '\n\n<ul>';
        NAV_ITEMS.forEach(navItem => {
            html += `
                <my-nav-item
                    id="${navItem.id}"
                    path="${navItem.path}"
                    text="${navItem.text}"
                    active-id="${activeNavItemId}"
                ></my-nav-item>\n
            `;
        });
        html += '</ul>'
        const shadowRoot = this.attachShadow ({mode: 'closed'});
        shadowRoot.innerHTML = html;
    }
}