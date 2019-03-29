class ButtonWired extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({mode: 'open'});
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
    <style>
      :host {
        --bg: var(--button-wired-bg, transparent);
        --border-style: var(--button-wired-border-style, solid);
        --border-width: var(--button-wired-border-width, 1px);
        --fg: var(--button-wired-fg, currentColor);
        --font-size: var(--button-wired-font-size, 1rem);
        --height: var(--button-wired-height, 3rem);
        --min-width: var(--button-wired-min-width, 8rem);
        --side-padding: var(--button-wired-side-padding, 1rem);

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
        border: var(--border-width) var(--border-style) var(--fg);
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

customElements.define('x-button-wired', ButtonWired);