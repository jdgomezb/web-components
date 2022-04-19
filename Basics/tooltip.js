class Tooltip extends HTMLElement {
  constructor() { // First lifecycle method. When Element created.
    super();
    // console.log('tooltip working');

    // this._tooltipContainer; // Replaced by the render method.
    this._tooltipIcon;
    this._isTooltipVisible = false;
    this._tooltipText = 'Default tooltip text!'
    this.attachShadow({ mode: 'open' });

    // const template = document.querySelector('#tooltip-template');
    // this.shadowRoot.appendChild(template.content.cloneNode(true));

    this.shadowRoot.innerHTML = `
      <style>
        :host {
          border-bottom: 1px solid #bada55;
          padding: 0.5em;
          position: relative;
        }
        :host(.important) {
          background-color: var(--color-accent, #f00);
        }

        :host-context(p) {
          font-weight: 700;
        }
        
        div {
          background-color: #000;
          border-radius: 4px;
          box-shadow: 1px 1px 6px rgba(0, 0, 0, 0.3);
          color: #fff;
          font-weight: 400;
          padding: .5rem;
          position: absolute;
          top: 1.8rem;
          left: 1rem;
          text-align: center;
          min-width: 10rem;
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

    // this._tooltipIcon.textContent = ' (?)';
    this._tooltipIcon = this.shadowRoot.querySelector('span.icon');
    this._tooltipIcon.addEventListener('mouseenter', this._showTooltip.bind(this));
    this._tooltipIcon.addEventListener('mouseleave', this._hideTooltip.bind(this));
    
    // this.shadowRoot.appendChild(this._tooltipIcon); // It's taken care from template.
    // this.style.position = 'relative'; // Moved to style on top.

    this._render();
  }

  disconnectedCallback() { // When Element detached from DOM.
    this._tooltipIcon.removeEventListener('mouseenter', this._showTooltip);
    this._tooltipIcon.removeEventListener('mouseleave', this._hideTooltip);
  }

  attributeChangedCallback(name, oldValue, newValue) { // Observed Attribute updated.
    // console.log(`Attribute "${name}" changed! from: ${oldValue} to: ${newValue}`);
    if (name === 'text' && newValue !== oldValue) {
      this._tooltipText = newValue;
    }
  }

  static get observedAttributes() {
    return ['text'];
  }

  _render() {
    // console.log('rendering');
    let tooltipContainer = this.shadowRoot.querySelector('div');

    if (this._isTooltipVisible) {
      tooltipContainer = document.createElement('div');
      tooltipContainer.textContent = this._tooltipText;
      this.shadowRoot.appendChild(tooltipContainer);
    } else {
      if (tooltipContainer) {
        this.shadowRoot.removeChild(tooltipContainer);
      }
    }
  }

  _showTooltip() {
    // this._tooltipContainer = document.createElement('div');
    // this._tooltipContainer.textContent = this._tooltipText;
    // // this._tooltipContainer.style.backgroundColor = '#000';
    // // this._tooltipContainer.style.color = '#fff';
    // // this._tooltipContainer.style.position = 'absolute';
    // // this._tooltipContainer.style.zIndex = '10';

    // this.shadowRoot.appendChild(this._tooltipContainer);

    this._isTooltipVisible = true;
    this._render();
  }

  _hideTooltip() {
    // this.shadowRoot.removeChild(this._tooltipContainer);

    this._isTooltipVisible = false;
    this._render();
  }
}

customElements.define('jd-tooltip', Tooltip);