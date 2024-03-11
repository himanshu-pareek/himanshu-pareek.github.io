import { NAV_ITEMS } from "./constants.js";

const STYLE = `

<style>
#drawer_button {
  display: inline-block;
  cursor: pointer;
  position: relative;
  z-index: 2;
}

.bar1, .bar2, .bar3 {
  width: 40px;
  height: 8px;
  background-color: #333;
  margin: 4px 0;
  transition: 0.4s;
}

.opened .bar1 {
  transform: translate(0, 12px) rotate(-45deg);
  background-color: white;
}

.opened .bar2 {
  opacity: 0;
}

.opened .bar3 {
  transform: translate(0, -12px) rotate(45deg);
  background-color: white;
}

#drawer_content {
  display: none;
  transition: 0.5s;
}

.opened #drawer_content {
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  z-index: 1;
  background-color: #333;
  color: white;
  transition: 0.5s;
  align-items: center;
  justify-content: center;
}

#drawer_links {
  list-style: none;
  color: white;
}

#drawer_links li {
  font-size: xxx-large;
  padding-top: 32px;
  padding-bottom: 32px;
}

#drawer_links a {
  text-decoration: none;
  color: white;
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
    let linkItems = '';
    NAV_ITEMS.forEach((navItem) => {
      linkItems += `<li>
        <a href="${navItem.path}">${navItem.text}</a>
      </li>\n`;
    });
    shadowRoot.innerHTML = `
          ${STYLE}
          <div id="drawer">
          <div id = "drawer_button">
            <div class="bar1"></div>
            <div class="bar2"></div>
            <div class="bar3"></div>
          </div>
          <div id="drawer_content">
            <ul id="drawer_links">
              ${linkItems}
            </ul>
          </div>
          </div>
        `;
    this.addEventListeners();
  }

  addEventListeners() {
    const drawerButton = this.shadowRoot.querySelector('#drawer_button');
    const drawerDiv = this.shadowRoot.querySelector('#drawer');
    drawerButton.addEventListener('click', () => {
      drawerDiv.classList.toggle('opened');
      this.opened = !this.opened;
    });
  }
}

