class ButtonSolid extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({mode: 'open'});
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
    <style>
      :host {
        --font-size: var(--button-solid-font-size, 1rem);
        --height: var(--button-solid-height, 3rem);
        --min-width: var(--button-solid-min-width, 8rem);
        --side-padding: var(--button-solid-side-padding, 1rem);
        --bg: var(--button-solid-bg, black);
        --fg: var(--button-solid-fg, white);

        display: inline-block;
      }

      :host(.square) {
        --width: var(--height);
        --min-width: var(--height);
        --side-padding: 0;
      }

      button {
        line-height: 1rem;
        height: var(--height);
        width: var(--width, auto);
        background-color: var(--bg);
        border: var(--border-width) var(--border-style) var(--bg);
        min-width: var(--min-width);
        padding: 0 var(--side-padding);
        font-size: var(--font-size);
        color: var(--fg);
      }
    </style>
    <button><slot></slot></button>
    `;
  }
}

customElements.define('x-button-solid', ButtonSolid);