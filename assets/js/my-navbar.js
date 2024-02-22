const NAV_ITEMS = [
    {
        id: 'index',
        path: '/index.html',
        text: 'Home',
    },
    {
        id: 'youtube',
        path: '/youtube.html',
        text: 'Youtube Content',
    },
    {
        id: 'contact',
        path: '/contact.html',
        text: 'Contact me'
    },
    {
        id: 'projects',
        path: '/projects.html',
        text: 'View projects'
    },
    {
        id: 'about',
        path: '/about.html',
        text: 'About me'
    }
];

const STYLE = `
<style>
ul {
    display: flex;
    flex-direction: row;
    list-style: none;
    gap: 48px;
}
</style>
`;

export class MyNavbar extends HTMLElement {
    constructor() {
        super();
        console.log('MyNavbar constructed');
    }

    connectedCallback() {
        const activeNavItemId = this.getAttribute('active-nav-item');
        console.log(`Active Nav Item = ${activeNavItemId}`);
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
        console.log (html);
        const shadowRoot = this.attachShadow ({mode: 'closed'});
        shadowRoot.innerHTML = html;
    }
}