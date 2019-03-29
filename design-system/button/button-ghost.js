class ButtonGhost extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({mode: 'open'});
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
    <style>
      :host {
        --font-size: var(--button-ghost-font-size, 1rem);
        --height: var(--button-ghost-height, 3rem);
        --min-width: var(--button-ghost-min-width, 8rem);
        --side-padding: var(--button-ghost-side-padding, 1rem);
        --fg: var(--button-ghost-fg, currentColor);

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
        background-color: transparent;
        border: none;
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

customElements.define('x-button-ghost', ButtonGhost);