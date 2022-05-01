import { r as registerInstance, h } from './index-77fcea8f.js';

const sideDrawerCss = ":host{--purple:#3b013b;--light-purple:#750175;--green:#829e28;--white:#fff;--dark-grey:#444;--grey:#999;--light-grey:#ccc;--lighter-grey:#efefef;--lightest-grey:#f3f3f3;--lightning-grey:#fefefe;--error:red}aside{background-color:var(--lightest-grey);border-right:1px solid var(--dark-grey);-webkit-box-shadow:0 2px 8px rgb(0, 0, 0, 0.26);box-shadow:0 2px 8px rgb(0, 0, 0, 0.26);position:fixed;top:0;left:-100%;width:30rem;max-width:50%;height:100vh;z-index:100;-webkit-transition:left 250ms ease-out;transition:left 250ms ease-out}:host([open]) aside{left:0}header{background-color:var(--grey);padding:1rem;position:relative}header h1{color:var(--white);font-size:1.5rem}header button{background-color:var(--grey);border:none;border-radius:4px;-webkit-box-shadow:1px 1px 2px rgba(0, 0, 0, 0.25);box-shadow:1px 1px 2px rgba(0, 0, 0, 0.25);color:var(--white);cursor:pointer;width:30px;height:30px;position:absolute;top:0.5rem;right:0.5rem}.tabs{display:-ms-flexbox;display:flex;gap:1rem;-ms-flex-pack:center;justify-content:center;-webkit-padding-before:1rem;padding-block-start:1rem;width:100%}.tabs button{background-color:var(----lightning-grey);border:none;border-radius:4px;-webkit-box-shadow:1px 1px 2px rgba(0, 0, 0, 0.25);box-shadow:1px 1px 2px rgba(0, 0, 0, 0.25);color:var(--dark-grey);cursor:pointer;font:inherit;padding:.5rem;text-align:center;width:30%}.tabs .active{background-color:var(--grey);color:var(--white)}#contact-information{padding:0 2rem}#backdrop{background-color:rgb(0, 0, 0, 0.65);display:none;position:fixed;top:0;left:0;width:100%;height:100vh;z-index:10}:host([open]) #backdrop{display:block}.side-nav ul{list-style:none;margin:0;padding:0}.side-nav li{padding:0;border-bottom:1px solid var(--light-grey);-webkit-box-shadow:0 1px 2px rgba(0, 0, 0, 0.1);box-shadow:0 1px 2px rgba(0, 0, 0, 0.1)}.side-nav a{color:var(--green);display:block;padding:1rem 2rem}#btn{cursor:pointer;position:fixed;right:5rem;top:2rem}";

const SideDrawer = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
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
      mainContent = (h("div", { id: "contact-information" }, h("h2", null, "Contact information"), h("p", null, "Please contact us at:"), h("ul", null, h("li", null, "Phone: 555-123-4567"), h("li", null, "Email: ", h("a", { href: "mailto:contact@email.com" }, "contact@email.com")))));
    }
    // You can return () or []
    return [
      h("div", { id: "backdrop", onClick: this.onCloseDrawer.bind(this) }),
      h("aside", null, h("header", null, h("h1", null, this.headerTitle), h("button", { onClick: this.onCloseDrawer.bind(this) }, "X")), h("section", { class: "tabs" }, h("button", { class: !this.showContactInfo ? 'active' : '', onClick: this.onContentChange.bind(this, 'navigation') }, "Navigation"), h("button", { class: this.showContactInfo ? 'active' : '', onClick: this.onContentChange.bind(this, 'contact') }, "Contact")), h("main", null, mainContent))
    ];
  }
};
SideDrawer.style = sideDrawerCss;

export { SideDrawer as jd_side_drawer };
