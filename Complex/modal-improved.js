class Modal extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.isOpen = false;

    this.shadowRoot.appendChild(template.content.cloneNode(true));
    
    const backdrop = this.shadowRoot.querySelector('#backdrop');
    const btnCancel = this.shadowRoot.querySelector('#btn-cancel');
    const btnConfirm = this.shadowRoot.querySelector('#btn-confirm');

    backdrop.addEventListener('click', this._cancel.bind(this));
    btnCancel.addEventListener('click', this._cancel.bind(this));
    btnConfirm.addEventListener('click', this._confirm.bind(this));
  }

  open() {
    this.isOpen = true;
    this.setAttribute('opened', '');
  }

  close() {
    this.isOpen = false;
    this.removeAttribute('opened');
  }

  _cancel(event) {
    const cancelEvent = new Event('cancel', { bubbles: true, composed: true });

    this.close();
    event.target.dispatchEvent(cancelEvent);
  }

  _confirm(event) {
    const confirmEvent = new Event('confirm');

    this.close();
    this.dispatchEvent(confirmEvent);
  }

}

// Moved the whole template out of the constructor. 
template = document.createElement('template');
template.innerHTML = `
  <style>
    :host {
      --accent-color: #bada55;
    }
    :host([opened]) #backdrop {
      display: block;
    }
    :host([opened]) #modal {
      opacity: 1;
      top: 25%;
    }
    #backdrop {
      background-color: rgb(0, 0, 0, 0.65);
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100vh;
      z-index: 10;

      display: none;
    }
    #modal {
      background-color: white;
      border: 2px solid var(--accent-color);
      border-radius: 6px;
      box-shadow: 0 2px 8px rgb(0, 0, 0, 0.45);
      opacity: 0;
      position: fixed;
      top: 20%;
      left: 25%;
      width: 50%;
      //height: 30rem;
      z-index: 100;

      display: flex;
      flex-direction: column;
      justify-content: space-between;

      transition: top 0.2s ease-out, opacity 0.2s ease-out;
    }
    header {
      border-bottom: 1px solid var(--accent-color);
      padding: 1rem;
    }
    header h1,
    ::slotted(h1) {
      font-size: 1.25rem;
      margin: 0;
    }
    #actions {
      border-top: 1px solid var(--accent-color);
      padding: 2rem ;

      display: flex;
      justify-content: flex-end;
      gap: 1.5rem;
    }
    #body {
      padding: 1rem;
    }

  </style>
  <div id="backdrop"></div>
  <div id="modal">
    <header>
      <!-- <h1>Please confirm below</h1> -->
      <slot name="title">Default title here!</slot>
    </header>
    <section id="body">
      <slot></slot>
    </section>
    <footer id="actions">
      <button id="btn-cancel">Cancel</button>
      <button id="btn-confirm">Confirm</button>
    </footer>
  </div>
`;


customElements.define('jd-modal', Modal);