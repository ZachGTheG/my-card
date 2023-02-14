import { LitElement, html, css } from 'lit';

const logo = new URL('../assets/open-wc-logo.svg', import.meta.url).href;

class MyCard extends LitElement {
  static properties = {
    header: { type: String },
  }

  static styles = css`
    :host {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      font-size: calc(10px + 2vmin);
      color: #1a2b42;
      max-width: 960px;
      margin: 0 auto;
      text-align: center;
      background-color: var(--my-card-background-color);
    }

    main {
      flex-grow: 1;
    }

    .logo {
      margin-top: 36px;
      animation: app-logo-spin infinite 20s linear;
    }

    @keyframes app-logo-spin {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }

    .app-footer {
      font-size: calc(12px + 0.5vmin);
      align-items: center;
    }

    .app-footer a {
      margin-left: 5px;
    }
  `;

  constructor() {
    super();
    this.header = 'My app';
  }

  render() {
    return html`
      <main>
        <div class="logo"><img alt="open-wc logo" src=${logo} /></div>
        <h1>${this.header}</h1>

        <p>Edit <code>src/MyCard.js</code> and save to reload.</p>
        <a
          class="app-link"
          href="https://open-wc.org/guides/developing-components/code-examples/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Code examples
        </a>
      </main>

      <p class="app-footer">
        🚽 Made with love by
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/open-wc"
          >open-wc</a
        >.
      </p>
    `;
  }
}

document.querySelector(".duplicator").addEventListener("click", function (e) {
  const node = document.getElementById("card");
  let clone = node.cloneNode(true);

  document.body.appendChild(clone);
});

const button = document.querySelector(".details");
button.addEventListener("mouseenter", function () {
  button.style.backgroundColor = "green";
});
button.addEventListener("mouseleave", function () {
  button.style.backgroundColor = "";
});

const card = document.querySelector("#card");
const toggleBackgroundButton = document.querySelector(".toggle-background");

toggleBackgroundButton.addEventListener("click", function () {
  card.classList.toggle("bg-toggled");
});

const heading = document.querySelector("#card h1");
const changeHeadingButton = document.querySelector(".change-heading");

changeHeadingButton.addEventListener("click", function () {
  heading.textContent = "Something Else";
});

const cardContainer = document.querySelector("#card").parentNode;
const deleteCardButton = document.querySelector(".delete-card");

deleteCardButton.addEventListener("click", function () {
  cardContainer.removeChild(cardContainer.lastChild);
});

const description = document.querySelector("#card p");
const detailsButton = document.querySelector(".details");

detailsButton.addEventListener("click", function () {
  description.classList.toggle("hidden");
});


customElements.define('my-card', MyCard);