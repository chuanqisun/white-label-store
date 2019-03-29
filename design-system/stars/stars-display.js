class StarsDisplay extends HTMLElement {
  static get _starSvg() {
    return `
    <svg xmlns="http://www.w3.org/2000/svg" style="display: none;">
      <symbol id="star" viewBox="0 0 16 16">
        <path d="M6 6.5H6.36038L6.47434 6.15811L8 1.58114L9.52566 6.15811L9.63962 6.5H10H14.5746L10.6877 9.60957L10.4154 9.82736L10.5257 10.1581L11.9902 14.5519L8.31235 11.6096L8 11.3597L7.68765 11.6096L4.00975 14.5519L5.47434 10.1581L5.58459 9.82736L5.31235 9.60957L1.42539 6.5H6Z" fill="var(--fill)" stroke="var(--stroke)"/>
      </symbol>
    </svg>
    `;
  }

  static get templateSingleLayer() {
    return `
    <style>
      :host {
        font-size: 0;
        display: inline-block;
        --fill: currentColor;
        --stroke: currentColor;
        --star-size: 1rem;
      }
      .stars--masked {
        --reveal: 100%;
        display: inline-flex;
        -webkit-clip-path: polygon(0 0, var(--reveal) 0, var(--reveal) 100%, 0% 100%);
        clip-path: polygon(0 0, var(--reveal) 0, var(--reveal) 100%, 0% 100%);
        transition: all 250ms;
      }

      .stars svg {
        width: var(--star-size);
        height: var(--star-size);
      }
    </style>
    ${StarsDisplay._starSvg}
    <div class="stars stars--masked">
      <svg><use xlink:href="#star"></svg>
      <svg><use xlink:href="#star"></svg>
      <svg><use xlink:href="#star"></svg>
      <svg><use xlink:href="#star"></svg>
      <svg><use xlink:href="#star"></svg>
    </div>`;
  }

  static get templateTwoLayer() {
    return `
    <style>
      :host {
        font-size: 0;
        display: inline-block;
        --fill: currentColor;
        --stroke: currentColor;
        --empty-star-fill: transparent;
        --empty-star-stroke: currentColor;
        --star-size: 1rem;
      }
      
      .layers-stack {
        display: inline-flex;
        position: relative;
        width: calc(5 * var(--star-size));
        height: var(--star-size);
      }
      
      .stars {
        --reveal: 100%;
        position: absolute;
        display: inline-flex;
      }
      
      .stars--masked {
        -webkit-clip-path: polygon(0 0, var(--reveal) 0, var(--reveal) 100%, 0% 100%);
        clip-path: polygon(0 0, var(--reveal) 0, var(--reveal) 100%, 0% 100%);
        transition: all 250ms;
      }

      .stars--background {
        --fill: var(--empty-star-fill);
        --stroke: var(--empty-star-stroke);
      }

      .stars svg {
        width: var(--star-size);
        height: var(--star-size);
      }
    </style>
    ${StarsDisplay._starSvg}
    <div class="layers-stack">
      <div class="stars stars--background">
        <svg><use xlink:href="#star"></svg>
        <svg><use xlink:href="#star"></svg>
        <svg><use xlink:href="#star"></svg>
        <svg><use xlink:href="#star"></svg>
        <svg><use xlink:href="#star"></svg>
      </div>
      <div class="stars stars--foreground stars--masked">
        <svg><use xlink:href="#star"></svg>
        <svg><use xlink:href="#star"></svg>
        <svg><use xlink:href="#star"></svg>
        <svg><use xlink:href="#star"></svg>
        <svg><use xlink:href="#star"></svg>
      </div>
    </div>`;
  }


  static get observedAttributes() {
    return ['star-count'];
  }

  constructor() {
    super();

    this.attachShadow({mode: 'open'});
    this.revealPercent = 100;
  }

  attributeChangedCallback(name, _oldValue, newValue) {
    if (name === 'star-count') {
      const newValueNum = parseFloat(newValue);
      const revealPercent = Math.round((newValueNum/5) * 100);
      this.revealPercent = revealPercent;
      this.title = `${newValue} stars out of 5`;

      if (this.starsElement) {
        this.starsElement.style.setProperty('--reveal', `${this.revealPercent}%`);
      }
    }
  }

  connectedCallback() {
    const chosenTemplate = this.hasAttribute('two-layer') ? StarsDisplay.templateTwoLayer : StarsDisplay.templateSingleLayer;
    this.shadowRoot.innerHTML = chosenTemplate;
    this.starsElement = this.shadowRoot.querySelector('.stars--masked');

    this.starsElement.style.setProperty('--reveal', `${this.revealPercent}%`);

  }
}

customElements.define('x-stars-display', StarsDisplay);