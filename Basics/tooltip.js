class Tooltip extends HTMLElement {
  constructor() { // First lifecycle method. When Element created.
    super();
    console.log('tooltip working');

    this._tooltipContainer;
    this._tooltipText = 'Default tooltip text!'
    this.attachShadow({ mode: 'open' });

    // const template = document.querySelector('#tooltip-template');
    // this.shadowRoot.appendChild(template.content.cloneNode(true));

    this.shadowRoot.innerHTML = `
      <style>
        :host {
          border-bottom: 1px solid #bada55;
          padding: 0.5em;
        }
        :host(.important) {
          background-color: var(--color-accent, #f00);
        }

        :host-context(p) {
          font-weight: 700;
        }
        
        div {
          background-color: #000;
          color: #fff;
          position: absolute;
          z-index: 10;
        }
        .highlight {
          background-color: #bada55;
        }

        /*::slotted(.highlight) {
          background-color: #bada55 !important;
        }*/

        .icon {
          background-color: rgb(0, 0, 0, 0.5);
          border-radius: 50%;
          color: #fff;
          padding: 0.15rem 0.5rem;
          text-align: center;
        }
      </style>
      <slot>Default slot content!</slot>
      <span class="icon">?</span>
    `; 
  }
  
  connectedCallback() { // Second lifecycle method. When Element attached to DOM.
    // const tooltipIcon = document.createElement('span');
    
    if (this.hasAttribute('text') && this.getAttribute('text') !== '') {
      this._tooltipText = this.getAttribute('text');
    }

    // tooltipIcon.textContent = ' (?)';
    const tooltipIcon = this.shadowRoot.querySelector('span');
    tooltipIcon.addEventListener('mouseenter', this._showTooltip.bind(this));
    tooltipIcon.addEventListener('mouseleave', this._hideTooltip.bind(this));
    
    this.shadowRoot.appendChild(tooltipIcon);
    this.style.position = 'relative';
  }

  disconnectedCallback() { // When Element detached from DOM.
  }

  attributeChangedCallback(attrName, oldVal, newVal) { // Observed Attribute updated.
  }

  _showTooltip() {
    this._tooltipContainer = document.createElement('div');
    this._tooltipContainer.textContent = this._tooltipText;
    // this._tooltipContainer.style.backgroundColor = '#000';
    // this._tooltipContainer.style.color = '#fff';
    // this._tooltipContainer.style.position = 'absolute';
    // this._tooltipContainer.style.zIndex = '10';

    this.shadowRoot.appendChild(this._tooltipContainer);
  }

  _hideTooltip() {
    this.shadowRoot.removeChild(this._tooltipContainer);
  }
}

customElements.define('jd-tooltip', Tooltip);