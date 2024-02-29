const STYLE = `

<style>
#drawer_button {
  display: inline-block;
  cursor: pointer;
}

.bar1, .bar2, .bar3 {
  width: 40px;
  height: 8px;
  background-color: #333;
  margin: 4px 0;
  transition: 0.4s;
}

.opened .bar1 {
  transform: translate(0, 12px) rotate(-45deg)
}

.opened .bar2 {
  opacity: 0;
}

.opened .bar3 {
  transform: translate(0, -12px) rotate(45deg);
}
</style>

`;

export class MyDrawer extends HTMLElement {
  constructor() {
    super();
  }

  opened = false;

  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: "open" });
    shadowRoot.innerHTML = `
          ${STYLE}
          <div id = "drawer_button">
            <div class="bar1"></div>
            <div class="bar2"></div>
            <div class="bar3"></div>
          </div>
        `;
    this.addEventListeners();
  }

  addEventListeners() {
    console.log (this);
    console.log (this.shadowRoot);
    const drawerButton = this.shadowRoot.querySelector('#drawer_button');
    drawerButton.addEventListener('click', () => {
      drawerButton.classList.toggle('opened');
      this.opened = !this.opened;
    });
  }
}

