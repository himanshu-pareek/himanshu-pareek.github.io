export class MyHeader extends HTMLElement {
    constructor() {
        super();
        console.log('MyHeader constructed');
    }

    connectedCallback() {
        this.innerHTML = `
            <header>
                <a href="/index.html">Home</a>
                <a href="/youtube.html">Youtube Content</a>
            </header>
        `;
    }
}
