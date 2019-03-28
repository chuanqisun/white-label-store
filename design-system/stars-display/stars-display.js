class StarsDisplay extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({mode: 'open'});
  }
  connectedCallback() {
    this.shadowRoot.innerHTML = `
    <style>
      :host {
        display: inline-block;
        --fill: currentColor;
        --stroke: currentColor;
      }
      .stars {
        display: flex;
      }
    </style>
    <svg xmlns="http://www.w3.org/2000/svg" style="display: none;">
      <symbol id="star" viewBox="0 0 16 16">
        <path d="M6 6.5H6.36038L6.47434 6.15811L8 1.58114L9.52566 6.15811L9.63962 6.5H10H14.5746L10.6877 9.60957L10.4154 9.82736L10.5257 10.1581L11.9902 14.5519L8.31235 11.6096L8 11.3597L7.68765 11.6096L4.00975 14.5519L5.47434 10.1581L5.58459 9.82736L5.31235 9.60957L1.42539 6.5H6Z" fill="var(--fill)" stroke="var(--stroke)"/>
      </symbol>
    </svg>
    <div class="stars">
      <svg width="16" height="16"><use xlink:href="#star"></svg>
      <svg width="16" height="16"><use xlink:href="#star"></svg>
      <svg width="16" height="16"><use xlink:href="#star"></svg>
      <svg width="16" height="16"><use xlink:href="#star"></svg>
      <svg width="16" height="16"><use xlink:href="#star"></svg>
    </div>`;
  }
}

customElements.define('stars-display', StarsDisplay);