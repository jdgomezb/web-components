import { Component, h, Method, Prop, State } from '@stencil/core';
export class SideDrawer {
  constructor() {
    this.showContactInfo = false;
  }
  onCloseDrawer() {
    this.open = false;
  }
  onContentChange(content) {
    // console.log(content);
    this.showContactInfo = content === 'contact';
  }
  /**
   * Developers should try to rely on publicly exposed methods as little as
   * possible, and instead default to using properties and events as much as
   * possible. As an app scales, we've found it's easier to manage and pass data
   * through @Prop rather than public methods.
   */
  async openMe() {
    this.open = true;
  }
  async closeMe() {
    this.onCloseDrawer();
  }
  render() {
    // let content = null;
    // if (this.open) {
    //   content = (
    //     <aside>
    //       <header><h1>{this.headerTitle}</h1></header>
    //       <main>
    //         <slot />
    //       </main>
    //     </aside>
    //   );
    // }
    let mainContent = h("slot", null);
    if (this.showContactInfo) {
      mainContent = (h("div", { id: "contact-information" },
        h("h2", null, "Contact information"),
        h("p", null, "Please contact us at:"),
        h("ul", null,
          h("li", null, "Phone: 555-123-4567"),
          h("li", null,
            "Email: ",
            h("a", { href: "mailto:contact@email.com" }, "contact@email.com")))));
    }
    // You can return () or []
    return [
      h("div", { id: "backdrop", onClick: this.onCloseDrawer.bind(this) }),
      h("aside", null,
        h("header", null,
          h("h1", null, this.headerTitle),
          h("button", { onClick: this.onCloseDrawer.bind(this) }, "X")),
        h("section", { class: "tabs" },
          h("button", { class: !this.showContactInfo ? 'active' : '', onClick: this.onContentChange.bind(this, 'navigation') }, "Navigation"),
          h("button", { class: this.showContactInfo ? 'active' : '', onClick: this.onContentChange.bind(this, 'contact') }, "Contact")),
        h("main", null, mainContent))
    ];
  }
  static get is() { return "jd-side-drawer"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["side-drawer.css"]
  }; }
  static get styleUrls() { return {
    "$": ["side-drawer.css"]
  }; }
  static get properties() { return {
    "headerTitle": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "header-title",
      "reflect": true
    },
    "open": {
      "type": "boolean",
      "mutable": true,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "open",
      "reflect": true
    }
  }; }
  static get states() { return {
    "showContactInfo": {}
  }; }
  static get methods() { return {
    "openMe": {
      "complexType": {
        "signature": "() => Promise<void>",
        "parameters": [],
        "references": {
          "Promise": {
            "location": "global"
          }
        },
        "return": "Promise<void>"
      },
      "docs": {
        "text": "Developers should try to rely on publicly exposed methods as little as\npossible, and instead default to using properties and events as much as\npossible. As an app scales, we've found it's easier to manage and pass data\nthrough @Prop rather than public methods.",
        "tags": []
      }
    },
    "closeMe": {
      "complexType": {
        "signature": "() => Promise<void>",
        "parameters": [],
        "references": {
          "Promise": {
            "location": "global"
          }
        },
        "return": "Promise<void>"
      },
      "docs": {
        "text": "",
        "tags": []
      }
    }
  }; }
}
